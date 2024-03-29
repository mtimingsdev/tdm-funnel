var express = require('express');
var app = express();

require('dotenv').config()

app.set('port', (process.env.PORT || 3462));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/public');
app.use(express.static('public'));



const spawn = require('child_process').spawn;
// open default browser
spawn('open', ['http://tdmfunnel.com']);
console.log('running on http://tdmfunnel.com');

const open = require('open');

open('http://tdmfunnel.com');

app.get('/', function(request, response) {
  var env = process.env.APP_ENV;
  if (env == 'staging') {
    var envName = 'staging' 
  } else if (env == 'production') {
    var envName = 'production'
  } else {
    var envName = 'review app'
  }



  response.render('index.html', { env: envName});
});

app.listen(app.get('port'), function() {
  console.log("Node app running at localhost:" + app.get('port'));
});

module.exports = app
