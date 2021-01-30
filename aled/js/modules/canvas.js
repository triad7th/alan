import * as md from './md.js'
import * as helpers from '../functions/helpers.js'
import * as tl from '../functions/tl.js'

import {pad} from '../functions/helpers.js'

/**
 * init canvas
 */
export function init({canvas}) {
  md.brush.init(canvas);
  mousemove(canvas);
  keydown(canvas);
}
/**
 * show status
 */
function status({viewBox, brush}) {
  if(viewBox) {
    const vb = viewBox;
    $("#viewbox-info").text (`viewbox x: ${pad(vb.x)} | y: ${pad(vb.y)} | w: ${pad(vb.width)} | h: ${pad(vb.height)}`);
    $("#file-info").text    (`file     : ${pad($(".canvas-item").attr("name"), 50)}`);
    //$("#file-info").text    (`file     : ${$(".canvas-item").attr("name")}`);
  }

}
/**
 * load a new image to Canvas
 */
export function load({canvas, timeline, nodes, name}) {  
  helpers.removeAllChildNodes(canvas.dom);
  canvas.dom.append(...nodes);
  canvas.dom.setAttribute('name', name || nodes[0].getAttribute('name'));
  canvas.viewBox = canvas.dom.querySelector('svg.canvas-item').viewBox.baseVal;  
  md.brush.pick(canvas);
  md.brush.drop(canvas);
  tl.reload(timeline);
  init({canvas});
  status(canvas);  
}
/**
 * save the cursorrent canvas
 */
export function save({canvas}) {
  md.brush.init(canvas);
  const dom = canvas.dom.innerHTML;
  const name = canvas.dom.getAttribute('name');  
  if (name) {    
    fetch(`http://localhost:8084/${name}`, {
      method: 'POST',
      body: JSON.stringify({ name: name, dom: dom}, 3, 2)
    }).then(response => response.json())
      .then(data => {        
        console.log(JSON.stringify(data, 0, 2));
      });
  }  
}
/**
 * register keypress event
 */
function keydown({brush, viewBox}) {
  $("#canvas").off('keydown');
  $("#canvas").on('keydown', evt => {
    if(brush.pickedElem || brush.pickedBg){      
      const elem = brush.pickedElem;
      const bg = brush.pickedBg;
      const vb = viewBox;
      switch(evt.code){
        case 'KeyS': {
          if(evt.shiftKey) {
            if(vb) {
              vb.width *= 1.05;
              vb.height *= 1.05;
            }
          } else {
            if(elem) {
              elem.width.baseVal.value *= 0.95;
              elem.height.baseVal.value *= 0.95;
            } 
          }         
        }
        break;
        case 'KeyD': {
          if(evt.shiftKey) {
            if(vb) {
              vb.width *= 0.95;
              vb.height *= 0.95;
            }
          } else {
            if(elem) {
              elem.width.baseVal.value *= 1.05;
              elem.height.baseVal.value *= 1.05;          
            }
          } 
        }
        break;
        case 'KeyX': {
          if(evt.shiftKey) {
            if(elem) {
              elem.style.left = `${brush.memory.x}px`;
            }
          } else {
            if(elem) {
              brush.memory.x = parseFloat(elem.style.left);
            } else if(bg) {
              brush.memory.x = bg.getBoundingClientRect().left;
            }
          }
        }
        break;
        case 'KeyY': {
          if(evt.shiftKey) {
            if(elem) {
              elem.style.top = `${brush.memory.y}px`;
            }
          } else {
            if(elem) {
              brush.memory.y = parseFloat(elem.style.top);
            } else if(bg) {
              brush.memory.y = bg.getBoundingClientRect().top;
            }
          }
        }
        break;
        case 'KeyW': {
          if(evt.shiftKey) {
            if(elem) {              
              elem.width.baseVal.value = brush.memory.w;
            }
          } else {
            if(elem) {
              brush.memory.w = elem.width.baseVal.value;
            } else if(bg) {
              brush.memory.w = bg.getBoundingClientRect().width;
            }
          }
        }
        break;
        case 'KeyH': {
          if(evt.shiftKey) {
            if(elem) {              
              elem.height.baseVal.value = brush.memory.h; 
            }
          } else {
            if(elem) {
              brush.memory.h = elem.height.baseVal.value;
            } else if(bg) {
              brush.memory.h = bg.getBoundingClientRect().height;
            }
          }
        }
        break;
        case 'KeyC': {
          if(elem) {
            brush.memory.w = elem.width.baseVal.value;
            brush.memory.h = elem.height.baseVal.value;
          } else if(bg) {
            brush.memory.w = bg.getBoundingClientRect().width;
            brush.memory.h = bg.getBoundingClientRect().height;
          }
        }
        break;
        case 'KeyV': {
          if(elem) {
            elem.width.baseVal.value = brush.memory.w;
            elem.height.baseVal.value = brush.memory.h; 
          }          
        }
        break;
        case 'KeyZ' : {
          if(evt.shiftKey) {
            if(vb) {
              vb.x = 0;
              vb.y = 0;
              vb.width = 512;
              vb.height = 512;
            }
          } else {
            md.brush.init({brush});
          }          
        }
        break;
        case 'Delete': {
          if(elem) {
            brush.isPicked = false;
            brush.pickedElem = undefined;          
            elem.remove();
          }
          if(bg) {
            brush.pickedBg = undefined;
            bg.remove();
          } 
        }
        break;
        default: {
          // console.log(evt);
        }
        break;
      }
      md.brush.status({brush});
      status({viewBox});
    }    
  });
}
/**
 * register brushMove event
 */
function mousemove({brush, cursor, viewBox}) {
  $("#canvas").off('mousemove');
  $("#canvas").on('mousemove', evt => {
    $("#cursor-info").text(`cursor  x: ${helpers.pad(evt.pageX)} | y: ${helpers.pad(evt.pageY)}`);
    md.brush.status({brush});
    cursor.x = evt.pageX, cursor.y = evt.pageY;
    if(brush.isPicked) {
      if(brush.pickedElem) {
        brush.pickedElem.style.left = `${cursor.x - brush.clickedAt.cursor.x + brush.clickedAt.pos.x}px`;
        brush.pickedElem.style.top = `${cursor.y - brush.clickedAt.cursor.y + brush.clickedAt.pos.y}px`;
      }   
    } else {
      if(brush.isPickedBg) {
        if(brush.pickedBg) {
          viewBox.x = brush.clickedAt.cursor.x - cursor.x + brush.clickedAt.pos.x;
          viewBox.y = brush.clickedAt.cursor.y - cursor.y + brush.clickedAt.pos.y;
          status({viewBox});
        } 
      }
    }
  });
}

// Ally footage
// Oct 18 2020 in the morning
// abcdefghijklmnopqqqqqqqqqqqqqqqqqqqqqqqqqqqrstuvwxyzabcdefghijklmnnnnopqrstuvwxtxxyz                  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaababbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccdddddddddeeeeeeeeeeeeefffffffgggg