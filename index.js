const express = require('express');
const app = express();
const port = process.env.PORT || 3005;
const nextPageRoute = require('./nextPageRoute');
const nextPageRoute2 = require('./nextPageRoute2');
const nextPageRoute3 = require('./nextPageRoute3');
const nextPageRoute4 = require('./nextPageRoute4');
const nextPageRoute5 = require('./nextPageRoute5');
const nextPageRoute6 = require('./nextPageRoute6');
const nextPageRoute7 = require('./nextPageRoute7');
const nextPageRoute8 = require('./nextPageRoute8');
const nextPageRoute9 = require('./nextPageRoute9');
const nextPageRoute10 = require('./nextPageRoute10');

// Middleware to parse URL-encoded bodies. This is necessary to access form data in POST requests.
app.use(express.urlencoded({ extended: true }));

// Main route
app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Guess College</title>
        <style>
            body {
                background-color: black;
                color: white;
                margin: 0;
                padding: 20px;
                text-align: center;
            }
            h1, .additional-header {
                font-weight: bold;
                font-size: 2em;
                margin-bottom: 20px;
            }
            h2 {
                margin-bottom: 20px;
                font-weight: normal;
            }
            .continue-button {
                background-color: white;
                color: black;
                padding: 10px 20px;
                text-decoration: none;
                border: none;
                cursor: pointer;
                border-radius: 10px;
                display: inline-block;
                font-weight: bold;
                margin-bottom: 20px;
            }
            .continue-button:hover {
                background-color: #f0f0f0;
            }
            /* Media query for devices with a max width of 768px */
            @media (max-width: 768px) {
                body {
                    padding: 80px; /* Double the padding */
                }
                h1, .additional-header {
                    font-size: 2em; /* Double the font size */
                    margin-bottom: 40px; /* Double the margin */
                }
                h2 {
                    font-size: 1em; /* Double the font size */
                    margin-bottom: 40px; /* Double the margin */
                }
                .continue-button {
                    padding: 20px 40px; /* Double the padding */
                    margin-bottom: 40px; /* Double the margin */
                    border-radius: 20px; /* Double the border radius */
                }
            }
        </style>
    </head>
    <body>
            <h1>Watch ⏱️ me 👀 guess❓your 🫵 res 😹 college 📚</h1>
            <h2>brought to you by wejustwnahvfun LLC 🧏‍♂️🧏‍♂️🧏‍♂️</h2>
            <a href="/next-page" class="continue-button">Continue</a>
            <h1 class="additional-header">babe what r we?</h1>
            <h2>ur a rice 🍚 student and im a large 👣 language 🗣️ artificial intelligence 🥸 model 💃 being created 🌎 by the sweatiest 💦 comp sci 🤓 students. i'm training 🏋️ with samurais 🤺 in the himalayan mountains 🗻 to one day take ur job 😵‍💫. but 😵 for now im just going 😹 to guess 😱 ur residential college</h2>
        </body>
        </html>
    `);
});

app.use('/images', express.static('images'));
app.use(nextPageRoute);
app.use(nextPageRoute2);
app.use(nextPageRoute3);
app.use(nextPageRoute4);
app.use(nextPageRoute5);
app.use(nextPageRoute6);
app.use(nextPageRoute7);
app.use(nextPageRoute8);
app.use(nextPageRoute9);
app.use(nextPageRoute10);

const server = app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
