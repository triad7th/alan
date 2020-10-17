import * as factory from './factory.js'
import * as choreo from './choreo.js'
import * as svgs from '../library/svgs/svgs.js'

function reload(timeline) {
  for(const child of timeline.getChildren()) {
    child.kill();
  }
  timeline.clear();
  timeline.add(choreo.eyeblink(svgs.eye, 0.6), 0);
}


$(document).ready(function() {
  const items = [factory.svg(svgs.eye), factory.svg(svgs.eye), factory.svg(svgs.eye)];
  const palette = document.getElementById('palette')
  const canvas = document.getElementById('pos');
  const timeline = gsap.timeline({repeat: -1, repeatDelay: 3});
  var brush = {clickedAt: undefined, elem: undefined};
  var cur = {x: undefined, y: undefined};
  
  for(const item of items) {
    palette.append(item);
  }
  reload(timeline);

  $(".palette-item").click(function(evt) {
    console.log(evt.currentTarget);
    const item = evt.currentTarget;
    canvas.append(factory.svg(svgs[item.getAttribute('name')], 'brush-item'));

    reload(timeline);
    $(".brush-item").mousedown(function(evt) {
      console.log(evt.currentTarget + ' mouse-down');
      brush = {clickedAt: {cur: cur, pos: {
        x: parseFloat(evt.currentTarget.style.left || -400),
        y: parseFloat(evt.currentTarget.style.top || -400)}
      }, elem: evt.currentTarget};
    });
    $(".brush-item").mouseup(function(evt) {
      console.log(evt.currentTarget + ' mouse-up');
      brush = undefined;
    });
  });

  $("#canvas").mousemove(function(evt) {
    const padX = evt.pageX.toString().padStart(4,' ');
    const padY = evt.pageY.toString().padStart(4,' ');
    $("#info").text(`x : ${padX} | y : ${padY}`);
    cur = {x: evt.pageX, y: evt.pageY};
    if (brush) {
      if (brush.elem) {
        brush.elem.style.left = `${cur.x - brush.clickedAt.cur.x + brush.clickedAt.pos.x}px`;
        brush.elem.style.top = `${cur.y - brush.clickedAt.cur.y + brush.clickedAt.pos.y}px`;
      }
    }
  });
  
});
