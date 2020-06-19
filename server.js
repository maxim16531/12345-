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
          // "document.getElementsByName('a')[0].style.color ='red' "   +
           //"document.getElementsByName('abc')[0].border ='1px' "   +
           "document.getElementsByName('abc')[0].border ='1px' "   +
           
             "}"+
           "</script>" + 
      "<style type='text/css'>" +
        ".abc1 {" + 
            "color:green;" + 
        "}" + 
        "</style>" + 
           "<table border='10px' name ='abc'>" +
           "<tr name='a' class ='m' bgcolor='red'  onclick='clicked()'>" +
           "<td class='abc1'>abc</td>" +
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
