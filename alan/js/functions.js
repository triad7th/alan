Number.prototype.pad = function(size) {
    var s = String(this);
    while (s.length < (size || 2)) {s = "0" + s;}
    return s;
  }


function msToHMS(ms) {
    // 1- Convert to seconds:
    var seconds = ms / 1000;
    // 2- Extract hours:
    var hours = parseInt( seconds / 3600 ); // 3,600 seconds in 1 hour
    seconds = seconds % 3600; // seconds remaining after extracting hours
    // 3- Extract minutes:
    var minutes = parseInt( seconds / 60 ); // 60 seconds in 1 minute
    // 4- Keep only seconds not extracted to minutes:
    seconds = seconds % 60;
    var milliseconds = parseInt((seconds - parseInt(seconds)) * 1000);
    seconds = parseInt(seconds)
    return `${hours.pad(2)}:${minutes.pad(2)}:${seconds.pad(2)}.${milliseconds.pad(3)}`
}

export { msToHMS }