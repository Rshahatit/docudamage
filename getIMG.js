var request = require("request");
var options = { method: 'POST',
  url: 'http://10.3.19.225:8080/ccapi/ver100/shooting/control/shutterbutton/manual',
  headers: 
   { 'cache-control': 'no-cache',
     Connection: 'keep-alive',
     'Content-Length': '39',
     'Accept-Encoding': 'gzip, deflate',
     Host: '10.3.19.225:8080',
     'Postman-Token': '37e76572-fc92-41b2-9983-ea37a6261510,68868d15-dc6b-4e6f-b5c3-3c6f89add253',
     'Cache-Control': 'no-cache',
     Accept: '*/*',
     'User-Agent': 'PostmanRuntime/7.20.1',
     'Content-Type': 'text/plain' },
  body: '{\n"action" : "full_press",\n"af": true\n}' };

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  console.log(body);
});

var options = { method: 'POST',
  url: 'http://10.3.19.225:8080/ccapi/ver100/shooting/control/shutterbutton/manual',
  qs: { action: 'release', af: 'true' },
  headers: 
   { 'cache-control': 'no-cache',
     Connection: 'keep-alive',
     'Content-Length': '37',
     'Accept-Encoding': 'gzip, deflate',
     Host: '10.3.19.225:8080',
     'Postman-Token': 'bb39574a-d6ca-4953-8d41-01754931bc7a,a804da8e-3bb1-4eec-b0bd-785e693bba49',
     'Cache-Control': 'no-cache',
     Accept: '*/*',
     'User-Agent': 'PostmanRuntime/7.20.1',
     'Content-Type': 'text/plain' },
  body: '{\n"action" : "release",\n"af": false\n}' };

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  console.log(body);
});

var options = { method: 'GET',
  url: 'http://10.3.19.225:8080/ccapi/ver100/contents/sd/100CANON',
  headers: 
   { 'cache-control': 'no-cache',
     Connection: 'keep-alive',
     'Accept-Encoding': 'gzip, deflate',
     Host: '10.3.19.225:8080',
     'Postman-Token': 'a5195864-8f6a-4b24-af03-176a45861ab6,7ed635fd-7fa9-495c-8975-71f8da7bdf44',
     'Cache-Control': 'no-cache',
     Accept: '*/*',
     'User-Agent': 'PostmanRuntime/7.20.1' } };
function parse_last_image(body){
    body = JSON.parse(body);
    var last_img = body["url"][(body["url"].length-1)];
    console.log(last_img);
}


setTimeout(function () {
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        parse_last_image(body);
      });
}, 3000);

