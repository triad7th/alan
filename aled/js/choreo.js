export function eyeblink(item, duration) {
  const tl = gsap.timeline();
  tl
    .to(`.${item.name} > path.svgmorph`, {duration: 0.1, attr: { d: item.act.close.d }, ease: "power4.out"}, 0)
    .to(`.${item.name} > path.svgmorph`, {duration: duration, attr: { d: item.act.open.d }, ease: "power4.out"});

  tl
    .to(`.${item.name} > circle.iris`, {duration: 0.1, opacity: 0, ease: "power4.out"}, 0)
    .to(`.${item.name} > circle.iris`, {duration: duration / 3, opacity: 1, ease: "power4.in"}, 0.1);

  return tl;
}