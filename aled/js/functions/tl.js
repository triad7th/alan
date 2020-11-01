import * as choreo from './choreo.js'
import * as svgs from '../../library/svgs/svgs.js'

export function reload(timeline) {
  for(const child of timeline.getChildren()) {
    child.kill();
  }
  timeline.clear();
  timeline.add(choreo.eyeblink(svgs.eye, 0.6), 0);
  timeline.add(choreo.eyeblinkbg(svgs.eyebg, 0.6), 0);
}