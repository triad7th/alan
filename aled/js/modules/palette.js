import * as factory from '../functions/factory.js'
import * as tl from '../functions/tl.js'
import * as svgs from '../../library/svgs/svgs.js'
import * as md from './md.js'

/**
 * load palette
 */
export function load({canvas, palette, timeline}) {
  palette.items = [factory.svg(svgs.eyel), factory.svg(svgs.eyer)];
  for(const item of palette.items) {
    palette.dom.append(item);
  }
  tl.reload(timeline);
  itemClick({canvas, timeline});
}  
/**
 * register itemClick event
 */
export function itemClick({canvas, timeline}) {
  // pallete callbacks
  $(".palette-item").off('click');
  $(".palette-item").on('click', evt => {
    console.log(evt.currentTarget);
    const item = evt.currentTarget;
    canvas.dom.append(factory.svg(svgs[item.getAttribute('name')], 'brush-item'));
    tl.reload(timeline);

    md.brush.pick(canvas);
    md.brush.drop(canvas);
  });  
}