import { msToHMS } from './helpers/midiHelpers.js';
import { Scene } from './classes/scene.js';
import { sequence } from '../sequences/seq.js';

var hTimecode;

$(document).ready(function() {
    init(); // env    
    var scene = new Scene(sequence);
    timeline.add(scene.timeline, 0);
    timeline.pause();
    
    $("#play").click(function() {
      var timeBegin = new Date()
      if(hTimecode) clearInterval(hTimecode) // clean hTimecode
      
      scene.timeline.restart();
      timeline.restart() // run timeline
      hTimecode = setInterval(function() {
        var abst = (new Date()).getTime() - timeBegin.getTime()
        $("#timecode").text(msToHMS(abst))
      }, 10)
      $("#song")[0].load()
      $("#song")[0].play()
    });  
})

