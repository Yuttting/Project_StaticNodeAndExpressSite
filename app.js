const express = require('express');
const { projects } = require('./data.json');

const app = express();

app.set('view engine', 'pug');
app.use('/static', express.static('public'));

app.get('/', (req, res)=>{
    //res.locals = data.projects;
    res.render('index', { projects });
});

app.get('/about', (req, res)=>{
    res.render('about', { projects });
})

app.get('/project/:id', (req, res)=>{
    const projectId = req.params.id;
    const project = projects.find( ({id}) => id === +projectId);
    
    if(project){
        res.render('project', {project});
    } else {
        res.sendStatus(404);
    }
});

//error handler
app.use((err, req, res, next)=>{
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
})

app.listen(3000, ()=>{
    console.log("The application is running on localhost: 3000.")
});