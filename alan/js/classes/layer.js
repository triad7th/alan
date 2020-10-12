export class Layer {
  constructor(args) {
    this.dom = document.createElement('div');    
    this.name = args.name;
    this._parent = args.parent;
    this._child = args.child;
    this.x = args.x;
    this.y = args.y;
    this.w = args.w;
    this.h = args.h;
    this.a = args.a;
    this.zIndex = args.zIndex;
    this.tl = gsap.timeline();

    this.dom.classList.add('layer');
    this.dom.classList.add(`${this.type}`);
  }

  // Getter
  get x() { return parseFloat(this.dom.style.left); }
  get y() { return parseFloat(this.dom.style.top); }
  get w() { return parseFloat(this.dom.style.width); }
  get h() { return parseFloat(this.dom.style.height); }
  get a() {
    const deg = this.dom.style.transform.match(/rotate\((.+)deg\)/);
    if(deg) if(deg.length > 1) return parseFloat(deg[1]);
  }
  get zIndex() { return parseFloat(this.dom.style.zIndex); }
  get parent() { return this._parent; }
  get child() { return this._child; }
  get type() { return this.name.slice(-2, -1); }
  get id() { return `#${this.dom.id}`; }

  // Setter
  set x(x) { this.dom.style.left = `${x}px`; }
  set y(y) { this.dom.style.top = `${y}px`; }
  set w(w) { this.dom.style.width = `${w}px`; }
  set h(h) { this.dom.style.height = `${h}px`; }
  set a(a) { 
    if(this.dom.style.transform.match('rotate')) {
      this.dom.style.transform = this.dom.style.transform.replace(/(rotate\()(.*)(deg\))/, `$1${a}$3`);
    } else {
      this.dom.style.transform = `rotate(${a}deg) ${this.dom.style.transform}`.trim();
    }    
  }
  set zIndex(idx) { this.dom.style.zIndex = idx; }
  set child(child) {
    this._child = child;
    if (child !== undefined) child._parent = this;
  }
  set parent(parent) {
    this._parent = parent;
  }
  setLayer({name, parent, child, x, y, w, h, a, zIndex}) {
    this.name = this.name || name; // [P|A|C1..4]
    this.parent = this.parent || parent;
    this.child = this.child || child;
    this.x = this.x || x;
    this.y = this.y || y;
    this.w = this.w || w;
    this.h = this.h || h;
    this.a = this.a || a;
    this.zIndex = this.zIndex || zIndex;
  }
  
  // toString
  toString() { return `${this.name}`; }
}