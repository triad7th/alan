import { msToHMS } from './functions/functions.js';
import { Widget } from './classes/widget.js'
import { choreoMidi } from '../midi/ff_type_002.js';

var hTimecode;

$(document).ready(function() {
    init() // env    
    timeline.pause() // timeline pause
    // var widgets = Widget.widgetsFromList(['dad', 'mom', 'bro', 'sis', 'beb']);
    var widgets = Widget.widgetsFromMidi(choreoMidi);
    Widget.attach(widgets, 'scene', timeline);
    
    $("#play").click(function() {
      var timeBegin = new Date()
      if(hTimecode) clearInterval(hTimecode) // clean hTimecode
      
      timeline.restart() // run timeline
      hTimecode = setInterval(function() {
        var abst = (new Date()).getTime() - timeBegin.getTime()
        $("#timecode").text(msToHMS(abst))
      }, 10)
      $("#song")[0].load()
      $("#song")[0].play()
    });  
})

