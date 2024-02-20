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
app.get('/lumina/summarize', function (req, res){
    res.render('lumina/landing.html', {
        response: false
    })
});

app.post('/lumina/summarize', async (req, res) => {
    const context = "you must summarize the following text in a concise way. Do not include any extraneous information or add any additional information";
    const content = req.body.input;
    const summary = await gptSummary(context, content);
    res.render('lumina/landing.html', {
        response: summary
    })
});
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});