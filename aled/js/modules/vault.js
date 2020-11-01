import * as factory from '../functions/factory.js'
import * as md from './md.js'
import * as helpers from '../functions/helpers.js'

/**
 * load vault
 */
export function load({canvas, vault, timeline}) {
  fetch('http://localhost:8084/list')
  .then(response => response.json())
  .then(data => {
    for(const item of data) {
      console.log(item);
      vault.append(factory.img({
        fn: item,
        //name: item.replace(/(.*)\.[\w\d]+$/, '$1'),
        name: item.replace('^\/', ''),
        path:'./library/images'}, 'vault-item'));
    }
    itemClick({canvas, timeline});
  });
}
/**
 * register itemClick event
 */
function itemClick({canvas, timeline}) { // resiter itemClick
  $(".vault-item").off('click');
  $(".vault-item").on('click', evt => {
    const item = evt.currentTarget;
    var name = item.getAttribute('name');
    var nodes = undefined;
    fetch(`http://localhost:8084/${name}`)
      .then(response => response.json())
      .then(data => {
        console.log(JSON.stringify(data, 0, 2));
        if(data.json) {
          nodes = helpers.createElementFromHTML(data.dom);
          name = data.name;
        } else {
          // nodes = [factory.img({name: name, path: data.path, fn: data.fn}, 'canvas-item')];
          nodes = [factory.svg({name: name, path: data.path, fn: data.fn, src: data.svg}, 'canvas-item')];
        }
        md.canvas.save({canvas});
        md.canvas.load({canvas, timeline, nodes, name});
      });    
  });
}
