import { Layer } from './layer.js'
import * as Parse from '../helpers/parseHelpers.js'

export class Widget {
  constructor({type, name, x, y, w, h, content, sequence, parent}) {
    this.type = type;
    this.name = name;
    this.content = content;
    this.sequence = sequence;
    this.tl = gsap.timeline();
    this.layers = [];
    this.parent = parent;
    this.children = [];
    this.id = this.parent ? `${this.parent.id}-${this.name}` : this.name;
    this.level = this.parent ? this.parent.level + 1 : 1;
    
    // pos cluster
    //
    // P1 is a key layer
    // x: x
    // y: y
    // width: 0px
    // height: 0px
    var cluster = this.getCluster('P');
    cluster[0].setLayer({ name: 'P1', x: x, y: y, zIndex: this.getZIndex(-300)});
    this.layers = [...this.layers, ...cluster];

    // angle cluster
    //
    // A1 is a key layer 
    // left: -1/2 * width (of C1) - to make the p1 as a center of content
    // top: -1/2 * height (of C1) - to make the p1 as a center of content
    // width: any px
    // height: any px
    var cluster = this.getCluster('A');
    cluster[0].setLayer({ name: 'A1', x: -0.5 * w, y: -0.5 * h, w: w, h: h, zIndex: this.getZIndex(-200)});
    this.layers = [...this.layers, ...cluster];
    this.getLayer('P1').child = this.getLayer('A1'); // connect pos cluster

    // con cluster
    // C1 is a key layer
    // width: w
    // height: h
    var cluster = this.getCluster('C');
    cluster[0].setLayer({ name: 'C1', w: w, h: h, zIndex: this.getZIndex(-100)});
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
  getZIndex(idx) {
    return -500000 + (this.level * 1000) + idx;
  }

  // setter
  set x(x) { this.getLayer('P1').x = x; }
  set y(y) { this.getLayer('P1').y = y; }
  set w(w) { this.getLayer('C1').w = w; }
  set h(h) { this.getLayer('C1').h = h; }
  set({x, y, w, h}) { this.x = x, this.y = y, this.w = w, this.h = h; }

  // childresn
  addChild(child) {
    this.children.push(child);    
    return child;
  }
  findChild(name) {
    if(this.children) {
      for(const child of this.children) {
        if(child.name === name) return child;
        foundChild = child.findChild(name);
        if(foundChild) return foundChild;
      }
    }
    return false;
  }
  findRoot() {
    if(this.parent) {
      return this.parent.findRoot();
    } else {
      return this;
    }
  }
  findWidgetGlobal(name){
    const root = this.findRoot();
    return root.findWidget(name);
  }
  findWidget(name) {
    if(this.name === name) return this;
    else return this.findChild(name);
  }

  // parse
  parseDom() {    
    for(const layer of this.layers){
      layer.dom.setAttribute('id', `${this.id}${layer.name}`);
      if(layer.dom) {
        if(layer.child) {
          if(layer.child.dom) {
            layer.dom.append(layer.child.dom)
          }
        }
      }
    }
    if(this.content) {
      this.lastLayer.dom.append(this.content);
    }
    if(this.children) {
      for(const child of this.children) {
        this.lastLayer.dom.append(child.parseDom());
      }
    }    
    return this.getLayer('P1').dom;
  }
  parseTimeline() {    
    for(const msg of this.sequence) {
      // meta
      if(msg.is_meta) {
        switch(msg.meta) {
          case 'text':
            Parse.text(this, msg);
        }
      // note
      } else {
        switch(msg.msg) {
          case 'note_on':
            Parse.note(this, msg);
        }
      }				
    }
    if(this.children) {
      for(const child of this.children) {
        child.parseTimeline();
        this.tl.add(child.tl, 0);
      }
    }    
    return this.tl;
  }
}