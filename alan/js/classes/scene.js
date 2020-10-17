import { Widget } from './widget.js'

export class Scene {
  constructor(set, sequence) {
    this.dom = document.getElementById('scene');
    this.name = 'scene';
    this.set = set;
    this.sequence = sequence;
    this.timeline = gsap.timeline();
    this.widgets = {};

    this.load(set); // load widgets
    for(const wgName in this.widgets) {
      this.dom.append(this.widgets[wgName].parseDom());      
      this.timeline.add(this.widgets[wgName].parseTimeline(), 0);
    }
  }

  // load widgets
  load(set) {    
    this.getWidget(set);
    for(const child of set.children) {      
      this.load(child);
    }
  }  
  getWidget(set) {
    var info = set.info;    
    const parent = this.findWidget(info.parent);

    info['parent'] = parent;
    info['sequence'] = this.findSequence(info.name);
    switch(info.type) {
      case 'image': {
        info['content'] = Scene.conFromImg(info);
      }
      break;
      case 'container': {
        
      }
      break;
      case 'svg': {
        info['content'] = Scene.conFromSvg(info);
      }
    }
    if(parent) return parent.addChild(new Widget(info));
      else return this.addChild(set.name, new Widget(info));
  }
  // helpers    
  findSequence(name) {
    for(const track of this.sequence) {
      if(track.track_name === `#${name}`) {
        return track.track_msgs;
      }
    }
  }
  findWidget(name) {
    if(this.widgets) {
      for(const wgName in this.widgets) {
        const foundWidget = this.widgets[wgName].findWidget(name);
        if(foundWidget) return foundWidget;
      }
    }
    return false;    
  }
  addChild(name, widget) {
    this.widgets[name] = widget;
    return this.widgets[name];
  }
  static isWidget(track) { if(track.track_name[0] === '#') return true; else false; }
  static getName(track) { return track.track_name.slice(1); }
  static conDecoration(info, dom) {
    if(info.class) dom.classList.add(info.class);
    else {
      dom.classList.add('fit');
      dom.classList.add('shadow');
    }
    if(info.style) {
      dom.style.top = dom.style.top || `${info.style.top}px`;
      dom.style.left = dom.style.left || `${info.style.left}px`;
      dom.style.width = dom.style.width || `${info.style.width}px`;
      dom.style.height = dom.style.height || `${info.style.height}px`;
      dom.style.filter = dom.style.filter || info.style.filter;
    }
    return dom;
  }
  static conFromImg(info) {
    // create a simple img elem
    const img = document.createElement('img');
    if(info.src) img.setAttribute('src', info.src);

    return this.conDecoration(info, img);
  }
  static conFromSvg(info) {
    // create a dom elem from svg
    const div = document.createElement('div');
    div.innerHTML = info.src.trim();
    const svg = div.firstChild;
    return this.conDecoration(info, svg);
  }
}