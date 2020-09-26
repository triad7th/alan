import { msToHMS } from './functions.js';
import { midi } from '../midi/ff_type_001.js'

var hTimecode;
var idx=0;
var msgs = midi[1].track_msgs

function createImage(fn) {
  var img=document.createElement('img');
  img.src=fn
  return img
}

$(document).ready(function() {
  // Transport
  $("#transport").text(midi[1].track_msgs[0].ABST);
  // Images
  var dad = {
    elem: $("#dad")[0],
    ctx: $("#dad")[0].getContext("2d"),
    img: createImage('image/dad.png')
  }
  dad.ctx.drawImage(dad.img, 0, 0);
  var mom = {
    elem: $("#mom")[0],
    ctx: $("#mom")[0].getContext("2d"),
    img: createImage('image/mom.png')
  }
  mom.ctx.drawImage(mom.img, 0, 0);

  // Song Play
  $("#play").click(function() {
    // Timecode
    var timeBegin = new Date();  
    if (hTimecode) {
      clearInterval(hTimecode);
      idx=0;
    }
    hTimecode = setInterval(function() {
      var abst = (new Date()).getTime() - timeBegin.getTime();
      if (abst >= msgs[idx].ABST * 1000)
      {
        // $("#transport").text(msToHMS(msgs[idx].ABST * 1000));
        $("#transport").text(msgs[idx].MBT);
        switch(msgs[idx].note)
        {
          case "A#4":
            $("#dad").css("background-color", "");
            $("#tick")[0].play();
            break;  
          case "G#3":
            $("#dad").css("background-color", "Red");
            $("#tick")[0].play();
            break;
          case "G#4":
            $("#dad").css("background-color", "Blue");
            $("#tick")[0].play();
            break;
          default:
            $("#dad").css("background-color", "");
            break;
        }
        idx++;
      }
      $("#timecode").text(msToHMS(abst));
    }, 10)
    $("#song")[0].load();
    $("#song")[0].play();
  });  
});