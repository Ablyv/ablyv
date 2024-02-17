import { keyGen } from './utils.js';
import { createJson } from './json.js';

import express from 'express';
import ejs from 'ejs';
import path from 'path';

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(path.join(path.resolve(), 'flashcards')));

app.use(express.urlencoded({ extended: true }));
app.engine('html', ejs.renderFile);

app.get('/', function (req, res) {
  res.render('layouts/index.html');
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
