import { Layer } from './layer.js'

class Widget {
  constructor({name, contents, x, y, w, h, angle, contentId}) {
    this.name = name;
    this.content = document.getElementById(contentId);
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
    cluster[0].setLayer({ name: 'A1', x: -0.5 * w, y: -0.5 * h, w: w, h: h, angle: angle });
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

    this.generateDom();    
  }

  // getter
  get x() { return this.getLayer('P1').x; }
  get y() { return this.getLayer('P1').y; }
  get w() { return this.getLayer('C1').w; }
  get h() { return this.getLayer('C1').h; }
  get angle() { return this.getLayer('A1').angle; }
  get dom() { return this.getLayer('P1').dom; }
  get lastLayer() {return this.layers[this.layers.length - 1]; }
  
  getCluster(type) {
    var l1 = new Layer({name: `${type}1`});
    return [l1];
  }
  getLayer(name){
    return this.layers.find((v, i, o) => { if (v.name === name) return true; });
  }
  generateDom(){
    var wrapperElem = document.getElementById(this.name);
    var contentElem = wrapperElem.children;    
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
    this.lastLayer.dom.append(...contentElem);
  }
}

var widget = new Widget({name: 'dad', x: 400, y: 300, w:256, h:256, angle: 0, contentId: 'content' });
var dad = document.getElementById('dad');
dad.append(widget.dom);

