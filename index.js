const express = require('express');
const ejs = require('ejs');

const gptSummary = require('./gpt');

const app = express();

const port = process.env.PORT || 3000;

console.log("test console is active");

app.use(express.urlencoded({ extended: true }));
app.use('/static/', express.static("./static"));
app.engine('html', ejs.renderFile);

app.get('/', function (req, res) {
    res.render('index.html');
});


/* ---- LUMINA ROUTING ---- */
app.get('/lumina', function (req, res){
    res.render('lumina/landing.html', {
        response: false
    })
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});