const url = require('url');
const fs = require('fs');
const { parse } = require('querystring');

function collectRequestData(request, callback) {
  //const FORM_URLENCODED = 'application/x-www-form-urlencoded';
  //if(request.headers['content-type'] === FORM_URLENCODED) {
{
    let body = '';
    request.on('data', chunk => {
        body += chunk.toString();
    });
    request.on('end', () => {
        callback(body);
    });
  }  
}

function handler(req, res) {
  const urlPath = url.parse(req.url).path;
  collectRequestData(req, result => {
    const body = JSON.parse(result);
    console.log(body);
    switch (urlPath) {    
      default: {
        const path = './library/images';
        const name = ((urlPath.match(/\/(?<name>.*)\.(?<ext>svg|png|jpg)$/) || {}).groups || {}).name;
        const ext = ((urlPath.match(/\/(?<name>.*)\.(?<ext>svg|png|jpg)$/) || {}).groups || {}).ext;
        if (name) {
          if (fs.existsSync(`${path}/${name}.${ext}.json`)) {
            // when json file exists
            fs.writeFileSync(`${path}/${name}.${ext}.json`, JSON.stringify(body, 3, 2));
            res.end(JSON.stringify({
              response: true,              
              overwritten: true,
              msg: `POST: ${path}/${name}.${ext}.json is overwritten!`
            })); 
          } else {
            // only image file exists
            fs.writeFileSync(`${path}/${name}.${ext}.json`, JSON.stringify(body, 3, 2));
            res.end(JSON.stringify({
              response: true,              
              overwritten: false,
              msg: `POST: ${path}/${name}.${ext}.json is newly created!`
            })); 
          }        
        } else {
          res.end(JSON.stringify({
            response: false,
            msg: 'error: no name found!'
          }));
        }      
      }
      break;
    }
  });
  
}

module.exports = { handler };