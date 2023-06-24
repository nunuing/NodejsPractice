ㅏvar http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;      //url을 분석하는 부분
  var pathname = url.parse(_url, true).pathname;

  if(pathname === '/'){
    if(queryData.id === undefined){
      fs.readFile(`data/${queryData.id}`, 'utf-8', function (err, description) {    //(err, description) 함수 전달인자가 아니라 반환값
        var title = 'Welcome';
        var description = 'Hello, Node.js';
        var template = `
        <!doctype html>
        <html>
        <head>
          <title>WEB1 - ${title}</title>
          <meta charset="utf-8">
        </head>
        <body>
          <h1><a href="/">WEB</a></h1>
          <ul>
            <li><a href="/?id=HTML">HTML</a></li>
            <li><a href="/?id=CSS">CSS</a></li>
            <li><a href="/?id=JavaScript">JavaScript</a></li>
          </ul>
          <h2>${title}</h2>
          <p>${description}</p>
        </body>
        </html>
        `;  
        response.writeHead(200);    //200 : 성공적으로 접속에 성공했다를 전달
        response.end(template);
      });
    }else{
    fs.readFile(`data/${queryData.id}`, 'utf-8', function (err, description) {
      var title = queryData.id;
      var template = `
      <!doctype html>
      <html>
      <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1><a href="/">WEB</a></h1>
        <ul>
          <li><a href="/?id=HTML">HTML</a></li>
          <li><a href="/?id=CSS">CSS</a></li>
          <li><a href="/?id=JavaScript">JavaScript</a></li>
        </ul>
        <h2>${title}</h2>
        <p>${description}</p>
      </body>
      </html>
      `;  
      response.writeHead(200);    //200 : 성공적으로 접속에 성공했다를 전달
      response.end(template);
    });
  }}
  else{
      response.writeHead(404);
      response.end('Not found');
  }
  
});
app.listen(3000);