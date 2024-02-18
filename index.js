import express from 'express';
const app = express();

app.get('/', (req, res) =>{
    res.send('ablyv');
})

app.listen(3000, ()=>{
    console.log('[OK] SERVER RUNNING')
});