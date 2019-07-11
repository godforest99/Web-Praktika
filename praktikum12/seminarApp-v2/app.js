const exp = require('express');
const ejs = require('ejs');
const path = require('path');
const index = require('./routes/index.js');
const seminare = require('./routes/seminare.js');
const detailseiteSeminar = require('./routes/detailseiteSeminar.js');
const detailseiteSeminarleiter = require('./routes/detailseiteSeminarleiter.js');
const seminarformular = require('./routes/seminarformular.js');
const error404 = require('./routes/404.js');


const app = exp();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(exp.static(__dirname+'/public'));
app.get('/', index);
app.get('/Dashboard.html', index);
app.get('/seminarliste', seminare);
app.get('/seminardetail', detailseiteSeminar);
app.get('/seminarleiter', detailseiteSeminarleiter);
app.get('/seminarneu', seminarformular);
app.get(error404);
app.listen(8040, function(){
    console.log("Lausche auf Port 8040");
});