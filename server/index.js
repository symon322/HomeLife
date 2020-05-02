const express = require('express');

const app = express();
const path = require('path');

const PORT = process.env.PORT || 80;

app.get('/', (req, response) => {
<<<<<<< HEAD
    response.end(`
    <h1>Home Hey Ho lets go</h1>
    <div>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
        </ul>
    </div>
    `);
=======
    response.sendFile(path.join(__dirname, '../app/index.html'));
>>>>>>> b6f624a7b27367224adc9393df2b52c75a7ad7e8
});

app.get('/createEvent', (req, response) => {
    response.end(`
        <h1>About</h1>
        <div>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </div>
    `);
});

app.listen(PORT, () => {
    console.log('Server has been started...');
})

