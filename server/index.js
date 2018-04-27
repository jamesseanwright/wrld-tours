'use strict';

const PORT = 8001;

const express = require('express');
const expressHandlebars = require('express-handlebars');
const path = require('path');
const apiRouter = require('./apiRouter');
const tripsRouter = require('./tripsRouter');

const app = express();

app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
    layoutsDir: path.resolve(__dirname, 'views', 'layouts'),
    helpers: {
        json: data => JSON.stringify(data),
    },
}));

app.set('view engine', 'handlebars');
app.set('views', path.resolve(__dirname, 'views'));

app.use(express.static(path.resolve(__dirname, '..', 'dist')));
app.use('/trips', tripsRouter);
app.use('/api', apiRouter);
app.get('/', (req, res) => res.redirect(301, '/trips'));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
