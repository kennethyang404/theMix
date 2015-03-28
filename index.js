var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendFile('index.html');
});

io.on('connection', function(socket){
  socket.on('animationNum', function(num){
  	console.log(num);
    io.emit('animationNum', num);
  });
});

http.listen(process.env.PORT || 3000, function(){
  console.log('listening on *:3000');
});
