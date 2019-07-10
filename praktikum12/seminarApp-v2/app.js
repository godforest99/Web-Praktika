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
 
app.get('/', index);
app.get('/Dashboard.html', index);
app.get('/Seminare.html', seminare);
app.get('/DetailseiteSeminar.html', detailseiteSeminar);
app.get('/DetailseiteSeminarleiter.html', detailseiteSeminarleiter);
app.get('/Seminarformular.html', seminarformular);
app.get(error404);
app.listen(8040, function(){
    console.log("Lausche auf Port 8040");
});