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
  static conFromImg(info) {
    // create a simple img elem
    const img = document.createElement('img');
    img.id = 
    if(info.src) img.setAttribute('src', info.src);
    if(info.class) img.classList.add(info.class);
    else {
      img.classList.add('fit');
      img.classList.add('shadow');
    }
    if(info.style) {
      img.style.top = img.style.top || `${info.style.top}px`;
      img.style.left = img.style.left || `${info.style.left}px`;
      img.style.width = img.style.width || `${info.style.width}px`;
      img.style.height = img.style.height || `${info.style.height}px`;
      img.style.filter = img.style.filter || info.style.filter;
    }
    return img;
  }
}