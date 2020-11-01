export function eyeblink(item, duration) {
  const tl = gsap.timeline();
  tl
    .to(`.cls-${item.name} > path.svgmorph`, {duration: 0.1, attr: { d: item.act.close.d }, ease: "power4.out"}, 0)
    .to(`.cls-${item.name} > path.svgmorph`, {duration: duration, attr: { d: item.act.open.d }, ease: "power4.out"});

  tl
    .to(`.cls-${item.name} > circle.iris`, {duration: 0.1, opacity: 0, ease: "power4.out"}, 0)
    .to(`.cls-${item.name} > circle.iris`, {duration: duration / 3, opacity: 1, ease: "power4.in"}, 0.1);

  return tl;
}
/**
 * eyeblink with background color
 * @param {*} item 
 * @param {*} duration 
 */
export function eyeblinkbg(item, duration) {
  const tl = gsap.timeline();
  tl
    .to(`.cls-${item.name} > path.svgmorph`, {duration: 0.1, attr: { d: item.act.close.d }, ease: "power4.out"}, 0)
    .to(`.cls-${item.name} > path.svgmorph`, {duration: duration, attr: { d: item.act.open.d }, ease: "power4.out"});

  tl
    .to(`.cls-${item.name} > circle.iris`, {duration: 0.1, opacity: 0, ease: "power4.out"}, 0)
    .to(`.cls-${item.name} > circle.iris`, {duration: duration / 3, opacity: 1, ease: "power4.in"}, 0.1);

  return tl;
}