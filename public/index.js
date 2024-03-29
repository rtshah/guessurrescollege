const express = require('express');
const app = express();
const port = 3001;
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
const functions = require('firebase-functions');


// Middleware to parse URL-encoded bodies. This is necessary to access form data in POST requests.
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// Main route
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Guess College</title>
            <style>
                body {
                    background-color: black; /* Dark mode background */
                    color: white; /* Light mode text for contrast */
                    margin: 0;
                    padding: 20px;
                    text-align: center; /* Center-align content */
                }
                h1, .additional-header {
                    font-weight: bold; /* Make main headers bold */
                    font-size: 2em; /* Larger font size for main header */
                    margin-bottom: 20px; /* Add 20px spacing below each header */
                }
                h2 {
                    margin-bottom: 20px; /* Add 20px spacing below subheaders */
                    font-weight: normal; /* Subheaders are not bold */
                }
                .continue-button {
                    background-color: white; /* Button background */
                    color: black; /* Button text color */
                    padding: 10px 20px; /* Padding inside the button */
                    text-decoration: none;
                    border: none; /* Remove border */
                    cursor: pointer; /* Change cursor to pointer on hover */
                    border-radius: 10px; /* Rounded corners */
                    display: inline-block; /* Necessary for margins to work */
                    font-weight: bold; /* Make button text bold */
                    margin-bottom: 20px; /* Add spacing below the button */
                }
                .continue-button:hover {
                    background-color: #f0f0f0; /* Lighter background on hover */
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



app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));


exports.app = functions.https.onRequest(app);