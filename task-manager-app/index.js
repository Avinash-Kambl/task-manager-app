const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const { Model } = require('objection');
const knex = require('./db');
const routes = require('./routes/routes');

const app = express();
Model.knex(knex);

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use('/', routes);

app.listen(3000, () => console.log("Server running on "));
