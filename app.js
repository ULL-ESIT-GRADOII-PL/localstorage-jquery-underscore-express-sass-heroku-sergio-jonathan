var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('port', (process.env.PORT || 1624));

app.use(express.static(__dirname + '/assets'));

app.get('/', function (req, res) {
  res.render('index', {title: 'Analizador CSV'});
});

app.listen(app.get('port'), function () {
  console.log('Example app listening on port ' + app.get('port') + '!');
});
