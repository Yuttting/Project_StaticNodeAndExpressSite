const express = require('express');
const { data } = require('./data.json');

const app = express();

app.set('view engine', 'pug');
app.use('/static', express.static('public'));

app.get('/', (req, res, next)=>{
    res.locals = data.projects;
    res.render('index', { data });
});

app.get('/about', (req, res, next)=>{
    res.render('about', { data });
})

//error handler


app.listen(3000, ()=>{
    console.log("The application is running on localhost: 3000.")
});