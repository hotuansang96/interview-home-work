var path = require('path');
var express = require('express');

var app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/build/index.html')) 
})

app.set('port', process.env.PORT || 8080);

var server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});