const url = require('url');
const fs = require('fs');

function handler(req, res) {
  const urlPath = url.parse(req.url).path;
  switch (urlPath) {
    case '/test': {      
      res.end(JSON.stringify({ msg: 'hello, JSON world!'}));
    }
    break;
    case '/list': {
      res.end(JSON.stringify(
        fs.readdirSync('./library/images')
        .filter(x => x.match(/.*\.(svg|png|jpg)$/)), 0, 2
      ));
    }
    break;
    default: {
      const path = './library/images';
      const name = ((urlPath.match(/\/(?<name>.*)\.(?<ext>svg|png|jpg)$/) || {}).groups || {}).name;
      const ext = ((urlPath.match(/\/(?<name>.*)\.(?<ext>svg|png|jpg)$/) || {}).groups || {}).ext;
      if (name) {
        if (fs.existsSync(`${path}/${name}.${ext}.json`)) {
          // when json file exists
          res.end(JSON.stringify({
            exists: fs.existsSync(`${path}${urlPath}`),
            json: true,
            msg: 'json file exists! check the dom',
            path: fs.existsSync(`${path}${urlPath}`) ? path : undefined,
            fn: fs.existsSync(`${path}${urlPath}`) ? urlPath.replace(/^\//, '') : undefined,
            name : JSON.parse(fs.readFileSync(`${path}/${name}.${ext}.json`, 'UTF8')).name,
            dom: JSON.parse(fs.readFileSync(`${path}/${name}.${ext}.json`, 'UTF8')).dom
          })); 
        } else {
          // only image file exists
          res.end(JSON.stringify({
            exists: fs.existsSync(`${path}${urlPath}`),
            json: false,
            meta: 'no json file exsits, getting svg data from the image file',
            path: fs.existsSync(`${path}${urlPath}`) ? path : undefined,
            fn: fs.existsSync(`${path}${urlPath}`) ? urlPath.replace(/^\//, '') : undefined,
            svg: fs.existsSync(`${path}${urlPath}`) ? 
              fs.readFileSync(`${path}${urlPath}`, 'UTF8') : undefined
          })); 
        }        
      } else {
        res.end(JSON.stringify({
          response: 'error: no name found!'
        }));
      }      
    }
    break;
  }
}

module.exports = { handler }