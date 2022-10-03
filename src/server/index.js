import express from 'express';

const app = express();

app.get('/', function (req, res, next) {
	var random = Math.random() * (10 - 1) + 1;
  if (random >5) next('route')

  else next;

}, function (req, res, next) {
	res.send('first');
})

app.get('/', function (req, res, next) {
  res.send('second!');

});

app.listen(8000, () => console.log('Listening on port 8000!'));
