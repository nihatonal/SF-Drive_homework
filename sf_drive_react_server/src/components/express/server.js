const express = require('express');
const parser = require('body-parser');
const mongoose = require('mongoose');

const {usersRouter} = require('./user-router');

const app = express();

mongoose.connect('mongodb://localhost/skillfactory', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connection to MongoDB has been established'));

function loggerMiddleware(req, res, next) {
    console.log(`[${req.method}] - ${req.url}`);
    next();
};

app.use(loggerMiddleware);

app.use('/users', usersRouter);
app.use(parser.json());

app.get('/', (req, res) =>{
    res.statusCode = 418;
    res.setHeader('X-Custom-Header', 'skillfactory')
    res.send('I have received your GET request');
});

function authMiddleware(req, res, next) {
    if(req.headers['authorization'] !== undefined) {
        next();
    } else {
        res.statusCode = 401;
        res.send('Error! You need to authorize');
    }
};

app.post('/', authMiddleware, (req, res) =>{
    console.log(req.url);
    console.log(req.headers);
    res.send('I have received your POST request');
});

app.put('/', (req, res) =>{
    res.send('I have received your PUT request');
});
app.delete('/', (req, res) =>{
    res.send('I have received your DELETE request');
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const sorting = req.query.sorting;
    res.send(`You have received data on user #${id} with ${sorting} sorting`);
})

app.listen(8000, () => {
    console.log('Server is listening on port 8000');
});


