export const palette = {dom: document.getElementById('palette')};  
export const canvas = {
  dom: document.getElementById('pos'),
  brush: {
    clickedAt: undefined,
    isPicked: false,
    isPickedBg: false,
    pickedElem: undefined,
    pickedBg: undefined,
    memory: {x: undefined, y: undefined, w: undefined, h: undefined, c: undefined}},
  cursor:  {x: undefined, y: undefined},
  viewBox: undefined
}
export const vault = document.getElementById('vault');
export const timeline = gsap.timeline({repeat: -1, repeatDelay: 3});
