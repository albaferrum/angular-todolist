const express = require('express');
const path = require('path');

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs')

//app.use(express.static(publicDirectoryPath));

app.get('', (req,res)=> {
    res.render('index' , {
        title : "Weather App",
        name : 'Cem Akdemir'
    })
})

app.get('/help', (req,res) => {
    res.send(
        [
            {
            name : 'Cem',
            age : 24,
            location : 'Turkey, IZMIR'
            },
            {
            name : 'Ahmet',
            age : 26,
            location : 'Turkey, ISTANBUL'
            }
        ]);                   
})

/*
app.get('/about', (req,res) => {
    res.send('<h1><i>About Weather...</i></h1>');       ////http://localhost:3000/about
})

app.get('/weather', (req,res)=> {
    res.send({
        forecast : 'It is raining.',
        location : 'Bayrakli'
    });
})
*/

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
})