export class Layer {
  constructor(args) {
    this.dom = document.createElement('div');    
    this.name = args.name;
    this.timeline = args.timeline;
    this._parent = args.parent;
    this._child = args.child;
    this.x = args.x;
    this.y = args.y;
    this.w = args.w;
    this.h = args.ht;
    this.angle = args.angle;

    this.dom.classList.add('layer');
    this.dom.classList.add(`${this.type}`);
  }

  // Getter
  get x() { return parseInt(this.dom.style.left); }
  get y() { return parseInt(this.dom.style.top); }
  get w() { return parseInt(this.dom.style.width); }
  get h() { return parseInt(this.dom.style.height); }
  get angle() { return this.dom.style.rotate; }
  get parent() { return this._parent; }
  get child() { return this._child; }
  get type() { return this.name[0]; }

  // Setter
  set x(x) { this.dom.style.left = `${x}px`; }
  set y(y) { this.dom.style.top = `${y}px`; }
  set w(w) { this.dom.style.width = `${w}px`; }
  set h(h) { this.dom.style.height = `${h}px`; }
  set angle(angle) { this.dom.style.rotate = angle; }
  set child(child) {
    this._child = child;
    if (child !== undefined) child._parent = this;
  }
  set parent(parent) {
    this._parent = parent;
  }
  setLayer({name, timeline, parent, child, x, y, w, h, angle}) {
    this.name = this.name || name; // [P|A|C1..4]
    this.timeline = this.timeline || timeline;
    this.parent = this.parent || parent;
    this.child = this.child || child;
    this.x = this.x || x;
    this.y = this.y || y;
    this.w = this.w || w;
    this.h = this.h || h;
    this.angle = this.angle || angle;
  }
  
  // toString
  toString() { return `${this.name}`; }
}