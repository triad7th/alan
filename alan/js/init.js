const fps = 60
const timeline = new gsap.timeline()
const params = new URL(location).searchParams

// Init
function init() {
  if (params.get('render') != null) {
    timeline.pause()
  }
  if (params.get('transparent') != null) {
    document.documentElement.classList.add('is-transparent')
  }
}

// This function tells renderer about basic information about the video.
function getInfo() {
  return {
    fps,
    numberOfFrames: timeline.duration() * fps,
  }
}
  
  // This function will be called before rendering each frame of the video.
function seekToFrame(frame) {
  timeline.seek(frame / fps)
}

var test = 1