const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const weatherRequest = require('./requests/weather.js');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render('test', {weather: null, error: null})
});

app.post('/',  async (req, res) => {
    const { city } = req.body;

    const {weather, error} = await weatherRequest(city);
    res.render('test', {weather, error})
});

app.listen(3000, () =>{
    console.log('server has started on port 3000...')
});