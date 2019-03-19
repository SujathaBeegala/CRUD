var express = require('express');
var app = express();
var port = 3000;
var bodyParser = require('body-parser');

var register = require('./controllers/register.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.get('/', register.index);
app.post('/', register.postregister);
app.get('/info', register.information);

app.get('/employee/:id/edit', register.geteditemployee);
app.post('/employee/:id/edit', register.posteditemployee);
app.post('/employee/:id/delete', register.postdeleteemployee);


app.listen(port, () => {
    console.log('server is running at', port)
});
