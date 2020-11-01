export function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

export function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes
  return div.childNodes; 
}

export function pad(target, width=8, char=' ', fixed=3) {
  switch(typeof target) {
    case 'number': return target.toFixed(fixed).toString().padStart(width, char);    
    case 'string': return target.padStart(width, char);
    default: return (0).toFixed(fixed).toString().padStart(width, char);
  }
}