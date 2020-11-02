import {pad} from '../functions/helpers.js'

/**
 * init brush 
 */
export function init({brush}) {
  if(brush.pickedElem) {
    brush.pickedElem.classList.remove('picked');
    brush.pickedElem = undefined;    
  }
  if(brush.pickedBg) {
    brush.pickedBg.classList.remove('picked');
    brush.pickedBg = undefined;
  }
}
/**
 * show brush status
 */
export function status({brush}) {
  if(brush.pickedElem) {
    const elem = brush.pickedElem;    
    $("#brush-info").text
      (`brush   x: ${pad(parseFloat(elem.style.left))} | y: ${pad(parseFloat(elem.style.top))}` + 
      ` | w: ${pad(elem.width.baseVal.value)} | h: ${pad(elem.height.baseVal.value)}` +
      ` | name: ${pad(elem.getAttribute('name'))}`);
  }
  if(brush.pickedBg) {
    const bg = brush.pickedBg;
    const rect = bg.getBoundingClientRect();
    $("#bg-info").text    
      (`bg      x: ${pad(rect.left)} | y: ${pad(rect.top)}` +
      ` | w: ${pad(rect.width)} | h: ${pad(rect.height)}`);
  }
  if(brush.memory) {
    const mem = brush.memory;
    $("#memory-info").text
      (`memory  x: ${pad(mem.x)} | y: ${pad(mem.y)} | w: ${pad(mem.w)} | h: ${pad(mem.h)}`);
  }
}
/**
 * register brushPick event
 */
export function pick({brush, cursor, viewBox}) {
  $(".brush-item").off('mousedown');
  $(".brush-item").on('mousedown', evt => {
    if(brush.pickedElem) brush.pickedElem.classList.remove('picked');
    Object.assign(brush, {
      isPicked: true,
      pickedElem: evt.currentTarget,      
      clickedAt: {       
        cursor: {x: cursor.x, y: cursor.y}, // copy of cursor
        pos: {
          x: parseFloat(evt.currentTarget.style.left || -400),
          y: parseFloat(evt.currentTarget.style.top || -400)}
      }
    });
    brush.pickedElem.classList.add('picked');
    status({brush});
  });
  $(".canvas-item > path, circle").off('mousedown');
  $(".canvas-item > path, circle").on('mousedown', evt => {
    if(brush.pickedBg) brush.pickedBg.classList.remove('picked');
    Object.assign(brush, {
      isPickedBg: true,
      pickedBg: evt.currentTarget,      
      clickedAt: {       
        cursor: {x: cursor.x, y: cursor.y}, // copy of cursor
        pos: {
          x: parseFloat(viewBox.x || 0),
          y: parseFloat(viewBox.y || 0)}
      }
    });
    brush.pickedBg.classList.add('picked');
    status({brush});
  })
  $(".canvas-item > g > path, circle").off('mousedown');
  $(".canvas-item > g > path, circle").on('mousedown', evt => {
    if(brush.pickedBg) brush.pickedBg.classList.remove('picked');
    Object.assign(brush, {
      isPickedBg: true,
      pickedBg: evt.currentTarget,      
      clickedAt: {       
        cursor: {x: cursor.x, y: cursor.y}, // copy of cursor
        pos: {
          x: parseFloat(viewBox.x || 0),
          y: parseFloat(viewBox.y || 0)}
      }
    });
    brush.pickedBg.classList.add('picked');
    status({brush});
  })
}
/**
 * register brushDrop event
 */
export function drop({brush}) {
  $(".brush-item").off('mouseup');
  $(".brush-item").on('mouseup', evt => {
    brush.isPicked = false;    
    status({brush});
  });
  $(".canvas-item > path, circle").off('mouseup');
  $(".canvas-item > path, circle").on('mouseup', evt => {
    brush.isPickedBg = false;
  })
  $(".canvas-item > g > path, circle").off('mouseup');
  $(".canvas-item > g > path, circle").on('mouseup', evt => {
    brush.isPickedBg = false;
  });
}