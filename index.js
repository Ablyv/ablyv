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

app.get('/products', (req, res) =>{
    res.render('product.html');
});

app.get('/game', (req, res) =>{
    res.render('game.html');
});

app.get('/game/api', (req, res) =>{
  res.header("Content-Type",'application/json');
  const __dirname = path.resolve();
  res.sendFile(path.join(__dirname, `reqs.json`));
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

app.get('/lumina/impromptu/prompts', async (req, res) =>{
    res.render('lumina/prompts.html')
});

app.get('/lumina/api/impromptu/prompts', async (req, res) =>{
    res.header("Content-Type",'application/json');
    const context = "Pretend you must give three impromptu speaking prompts for a NSDA speech tournament";
    const content =
        "Give 3 prompts please\n" +
        "                Do not include any explanations, only provide a  RFC8259 compliant JSON response  following this format without deviation MUST BE without new lines.\n" +
        "            [{\n" +
        "                \"prompts\": [\"first prompt here\", \"second prompt here\", \"third prompt\"]\n" +
        "            }]";

    const summary = await gptSummary(context, content);

    res.send(summary);
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});
