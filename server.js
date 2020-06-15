// берём Express
var express = require('express');

// создаём Express-приложение
var app = express();

// создаём маршрут для главной страницы
// http://localhost:8080/
app.use(express.static('img'));
app.get('/', function(req, res) {
  res.send('Hello');
});

app.get('/abc', function(req, res) {
  res.send("<script>" + 
           "function clicked(){"  +
           // "alert('hello')" +
           "document.getElementsByName('a').bgcolor='blue'" +
             "}"+
           "</script>" + 
      "<style type='text/css'>" +
        ".abc {" + 
            "color:green;" + 
        "}" + 
        "</style>" + 
           "<table>" +
           "<tr name='a' onclick='clicked()'>" +
           "<td class='abc'>abc</td>" +
           "<td type='button'>123</td>" +
           "</tr>" +
           "<tr>" +
           "<td>456</td>" +
           "<td ><img src='image.jpg'></td>" +
           "</tr>" +
           "</table>");
});
// запускаем сервер на порту 8080
app.listen(8080);
// отправляем сообщение
console.log('Сервер стартовал!');
