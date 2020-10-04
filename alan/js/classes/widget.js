import { Layer } from './layer.js'
import { widgetsFromMidi } from '../functions/widgetsFromMidi.js'
import { parseTimeline } from '../functions/parseTimeline.js'

export class Widget {
  constructor({name, x, y, w, h, content}) {
    this.name = name;
    this.content = content;
    this.tl = undefined;
    this.layers = [];

    // pos cluster
    //
    // P1 is a key layer
    // x: x
    // y: y
    // width: 0px
    // height: 0px
    var cluster = this.getCluster('P');
    cluster[0].setLayer({ name: 'P1', x: x, y: y });
    this.layers = [...this.layers, ...cluster];

    // angle cluster
    //
    // A1 is a key layer 
    // left: -1/2 * width (of C1) - to make the p1 as a center of content
    // top: -1/2 * height (of C1) - to make the p1 as a center of content
    // width: any px
    // height: any px
    var cluster = this.getCluster('A');
    cluster[0].setLayer({ name: 'A1', x: -0.5 * w, y: -0.5 * h, w: w, h: h});
    this.layers = [...this.layers, ...cluster];
    this.getLayer('P1').child = this.getLayer('A1'); // connect pos cluster

    // con cluster
    // C1 is a key layer
    // width: w
    // height: h
    var cluster = this.getCluster('C');
    cluster[0].setLayer({ name: 'C1', w: w, h: h});
    this.layers = [...this.layers, ...cluster];
    this.getLayer('A1').child = this.getLayer('C1');

    // content
    if(this.content) {
      this.getLayer('C1').dom.append(this.content);
    }
  }

  // getter
  get x() { return this.getLayer('P1').x; }
  get y() { return this.getLayer('P1').y; }
  get w() { return this.getLayer('C1').w; }
  get h() { return this.getLayer('C1').h; }
  get dom() { return this.getLayer('P1').dom; }
  get lastLayer() {return this.layers[this.layers.length - 1]; }
  
  getCluster(type) {
    var l1 = new Layer({name: `${type}1`});
    return [l1];
  }
  getLayer(name) {
    return this.layers.find((v, i, o) => { if (v.name === name) return true; });
  }
  generateDom() {    
    for(let layer of this.layers){
      layer.dom.setAttribute('id', `${this.name}${layer.name}`);
      if(layer.dom) {
        if(layer.child) {
          if(layer.child.dom) {
            layer.dom.append(layer.child.dom)
          }
        }
      }
    }
    this.lastLayer.dom.append(this.content);
    return this.getLayer('P1').dom;
  }
  parseTimeline() {
    const msgs = this.tl;
    this.tl = gsap.timeline();
    return parseTimeline(this, msgs);
  }

  // setter
  set x(x) { this.getLayer('P1').x = x; }
  set y(y) { this.getLayer('P1').y = y; }
  set w(w) { this.getLayer('C1').w = w; }
  set h(w) { this.getLayer('C1').h = h; }
  set set({x, y, w, h}) { this.x = x, this.y = y, this.w = w, this.h = h; }

  // static methods
  static attach(widgets, parentId, gTl/*Global Timeline*/) {  
    // collect all widgets and attach them to target parent
    const parent = document.getElementById(parentId);
    for(const wgName in widgets) {
      parent.append(widgets[wgName].generateDom());      
      gTl.add(widgets[wgName].parseTimeline(), 0);
    }
  }

  // helpers
  static conFromImg(fn) {
    // create a simple img elem
    const img = document.createElement('img');
    img.setAttribute('src', fn);
    return img;
  }
  static widgetsFromList(nameList) {
    // create simple widgets
    const gap = 125;
    var widgets = {};
    nameList.forEach((name, idx) => {
      widgets[name] = new Widget({
        name: name,
        x: idx * (256 + gap) + 175,
        y: 350,
        w: 256,
        h: 256,
        content: this.conFromImg(`./images/${name}.png`)
      });
    });
    return widgets;    
  }
  static widgetsFromMidi = widgetsFromMidi;  
}

/*
var widget = new Widget({name: 'dad', x: 400, y: 300, w:256, h:256, angle: 0, contentId: 'content' });
var dad = document.getElementById('dad');
dad.append(widget.dom);
*/