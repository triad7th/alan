export function svg(info, type = 'palette-item') {
  // create a dom elem from svg
  const div = document.createElement('div');
  div.innerHTML = info.src.trim();
  const svg = div.querySelector('svg');
  svg.classList.add(type);
  svg.classList.add(`cls-${info.name}`);
  svg.setAttribute('name', info.name);
  return svg;
}

export function img(info, type = 'vault-item') {
  // create a dom elem from svg
  const img = document.createElement('img');
  img.classList.add(type);
  img.classList.add(`cls-${info.name}`);
  img.setAttribute('name', info.name);
  img.setAttribute('src', `${info.path}/${info.fn}`);
  return img;
}