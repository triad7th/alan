import { msToHMS } from './functions.js';
import * as fam from './family.js'

var hTimecode;

$(document).ready(function() {
    init() // env    
    timeline.pause() // timeline pause

    fam.locate() // family locate
    fam.choreo() // set choreography 
    
    $("#play").click(function() {
      var timeBegin = new Date()
      if (hTimecode) clearInterval(hTimecode) // clean hTimecode
      
      timeline.restart() // run timeline
      hTimecode = setInterval(function() {
        var abst = (new Date()).getTime() - timeBegin.getTime()
        $("#timecode").text(msToHMS(abst))
      }, 10)
      $("#song")[0].load()
      $("#song")[0].play()
    });  
})

