import * as md from './modules/md.js'
import {canvas, palette, vault, timeline} from './constants.js'

// for shares
const shares = {
  canvas: canvas,
  palette: palette,  
  vault: vault,
  timeline: timeline
};

$(document).ready(function() {     
  md.vault.load(shares);  
  md.palette.load(shares);
  md.canvas.init(shares);  
});
