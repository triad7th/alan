export function svg(info, type = 'palette-item') {
  // create a dom elem from svg
  const div = document.createElement('div');
  div.innerHTML = info.src.trim();
  const svg = div.firstChild;
  svg.classList.add(type);
  svg.classList.add(info.name);
  svg.setAttribute('name', info.name);
  return svg;
}