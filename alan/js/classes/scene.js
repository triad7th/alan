import { Widget } from './widget.js'

export class Scene {
  constructor(sequence) {
    this.dom = document.getElementById('scene');
    this.name = 'scene';
    this.sequence = sequence;
    this.timeline = gsap.timeline();
    this.widgets = {};

    this.loadWidgets(); // load widgets
    for(const wgName in this.widgets) {
      this.dom.append(this.widgets[wgName].parseDom());      
      this.timeline.add(this.widgets[wgName].parseTimeline(), 0);
    }
  }

  // load widgets
  loadWidgets() {
    // for all tracks in the midi
    for(const track of this.sequence) {
      if(Scene.isWidget(track)) {
        const name = Scene.getName(track);
        // for all msgs in the track
        for(const msg of track.track_msgs) {
          // meta
          if(msg.is_meta) {
            switch(msg.meta) {
              case 'text':
                this.parseText(name, msg, track.track_msgs);
            }
          }
        }    
      }
    }
    return this.widgets;
  }

  // helpers
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
  parseText(name, msg, sequence) {
    const meta = JSON.parse(msg.text);
    var args;
    switch(meta.cmd) {
      case 'update': {
        const widget = this.findWidget(name);
        switch(meta.type) {
          case 'content': {
            if(widget.content) {
              widget.content.style.left = meta.x;
              widget.content.style.top = meta.y;
              widget.content.style.width = meta.w;
              widget.content.style.height = meta.h;
              break;
            }
          }
          default:
            break;
        }
        break;
      }
      case 'create': {
        const parent = this.findWidget(meta['p']);
        args = {
          ...meta,
          sequence: sequence,
          parent: parent
        }          
        switch(meta.type) {
          case 'image':
            if(meta.src) {
              args['content'] = Scene.conFromImg(`./images/${meta.src}`);
            } else {
              args['content'] = Scene.conFromImg(`./images/${name}.png`);
            }            
            break;
          case 'container':
            break;
          default:
            return false;
        } 
        if(parent) {
          return parent.addChild(new Widget(args));
        } else {
          return this.addChild(name, new Widget(args));
        }                  
      }
      default:
        return false;
    }
  }
  static isWidget(track) { if(track.track_name[0] === '#') return true; else false; }
  static getName(track) { return track.track_name.slice(1); }
  static conFromImg(fn) {
    // create a simple img elem
    const img = document.createElement('img');
    img.setAttribute('src', fn);
    return img;
  }
}