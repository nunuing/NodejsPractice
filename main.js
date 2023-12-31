var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;      //url을 분석하는 부분
  var pathname = url.parse(_url, true).pathname;

  if (pathname === '/') {
    if (queryData.id === undefined) {
      fs.readdir('./data', function (error, filelist) {
        var title = 'Welcome';
        var description = 'Hello, Node.js';
        var list = '<ul>';
        var i = 0;
        while (i < filelist.length) {
          list += `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
          i++;
        }
        list = list + '</ul>';
        var template = `
        <!doctype html>
        <html>
        <head>
          <title>WEB1 - ${title}</title>
          <meta charset="utf-8">
        </head>
        <body>
          <h1><a href="/">WEB</a></h1>
          ${list}
          <h2>${title}</h2>
          <p>${description}</p>
        </body>
        </html>
        `;
        response.writeHead(200);    //200 : 성공적으로 접속에 성공했다를 전달
        response.end(template);
      });
    } else {
      fs.readdir('./data', function (error, filelist) {
        var title = 'Welcome';
        var description = 'Hello, Node.js';
        var list = '<ul>';
        var i = 0;
        while (i < filelist.length) {
          list += `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
          i++;
        }
        list = list + '</ul>';
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
        ${list}
        <h2>${title}</h2>
        <p>${description}</p>
      </body>
      </html>
      `;
          response.writeHead(200);    //200 : 성공적으로 접속에 성공했다를 전달
          response.end(template);
        });
      });
    }
  }
  else {
    response.writeHead(404);
    response.end('Not found');
  }

});
app.listen(3000);