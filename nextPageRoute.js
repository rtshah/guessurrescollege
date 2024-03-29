const express = require('express');
const router = express.Router();
const getStudentInfo = require('./idchecker'); // Ensure this is the correct path to your module

const { initializeApp } = require('firebase/app');
const { getDatabase, ref, push, set } = require('firebase/database');

const firebaseConfig = {
    apiKey: "AIzaSyDV725TGCOpSG1ouhAkpB9pCgl1xRI_xXY",
    authDomain: "collegeguesser.firebaseapp.com",
    databaseURL: "https://collegeguesser-default-rtdb.firebaseio.com",
    projectId: "collegeguesser",
    storageBucket: "collegeguesser.appspot.com",
    messagingSenderId: "1048432852421",
    appId: "1:1048432852421:web:0ff522c7efca425fdbdfac",
    measurementId: "G-H3818S64RG"
};

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

router.get('/next-page', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Next Page</title>
            <style>
                body {
                    background-color: black;
                    color: white;
                    font-family: 'Times New Roman', serif;
                    margin: 0;
                    padding: 20px;
                    text-align: center;
                }
                h1 {
                    font-weight: bold;
                    font-size: 2em;
                    margin-bottom: 20px; /* Added for spacing */
                }
                .input-group {
                    display: inline-flex; /* Aligns the input field and suffix side by side */
                    margin-bottom: 20px; /* Added for spacing below the input group */
                }
                .email-input {
                    padding: 10px;
                    border-radius: 20px 0 0 20px; /* Rounded corners on the left side */
                    border: 1px solid #fff;
                    color: #333;
                    background-color: #fff;
                }
                .email-suffix {
                    padding: 10px;
                    background-color: #fff; /* Matches the input background */
                    border: 1px solid #fff; /* Matches the input border */
                    border-radius: 0 20px 20px 0; /* Rounded corners on the right side */
                    color: #333; /* Matches the input text color */
                }
                .continue-button {
                    background-color: white;
                    color: black;
                    padding: 10px 20px;
                    text-decoration: none;
                    border: none;
                    cursor: pointer;
                    border-radius: 10px;
                    display: block; /* Ensures the button is on its own line */
                    font-weight: bold;
                    font-family: 'Times New Roman', serif; /* Sets the font to Times New Roman */
                    margin: 20px auto; /* Centers the button and adds spacing */
                }
                .continue-button:hover {
                    background-color: #f0f0f0;
                }

                /* Mobile styles */
                @media (max-width: 768px) {
                    body {
                        padding: 40px; /* Double the padding */
                    }
                    h1 {
                        font-size: 4em; /* Double the font size */
                        margin-bottom: 40px; /* Double the margin */
                    }
                    .input-group, .email-input, .email-suffix, .continue-button {
                        font-size: 200%; /* Double the font size for input and button */
                    }
                    .email-input, .email-suffix {
                        padding: 20px; /* Double the padding */
                        border-radius: 40px 0 0 40px; /* Double the border-radius for left side */
                    }
                    .email-suffix {
                        border-radius: 0 40px 40px 0; /* Double the border-radius for right side */
                    }
                    .continue-button {
                        padding: 20px 40px; /* Double the padding */
                        border-radius: 20px; /* Double the border-radius */
                        margin: 40px auto; /* Double the margin */
                    }
                }
            </style>
        </head>
        <body>
            <h1>But 🤨 first ☝️ ur rice 🍚 email 👅 because i hv to verify ✅ ur a student 📚 (my parents 🫃are too broke 🤣 to pay for non 💔 rice ppl to use our server 🚱)</h1>
            <form action="/submit-netid" method="POST">
                <div class="input-group">
                    <input type="text" name="netId" class="email-input" placeholder="netId" required>
                    <span class="email-suffix">@rice.edu</span>
                </div>
                <button type="submit" class="continue-button">Continue</button>
            </form>
        </body>
        </html>
    `);
});

router.post('/submit-netid', async (req, res) => {
    const userNetId = req.body.netId;
    const studentInfo = await getStudentInfo(userNetId);

    console.log(`Received netId: ${userNetId}`);
    console.log(`Name: ${studentInfo.name} | College: ${studentInfo.college}`);

    if (studentInfo.name === 'Name not found' && studentInfo.college === 'College not found') {
        res.send(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Invalid NetID</title>
                <script>
                    alert('u 🫵 cant ❌ fool 😱 me 🤓 use ur real 🥶 netID');
                    window.location.href = '/next-page'; // Redirect back to the form
                </script>
            </head>
            <body>
                <noscript>
                    JavaScript is required for proper functionality of this alert and redirection.
                    <a href="/next-page">Try Again</a>
                </noscript>
            </body>
            </html>
        `);
    } else {
        const netIdRef = ref(database, 'netIds');
        push(netIdRef, {
            netId: userNetId,
            name: studentInfo.name,
            college: studentInfo.college,
            timestamp: new Date().toISOString()
        }).then(() => {
            console.log('NetID and college saved to database successfully');
            res.redirect(`/next-page-2?college=${encodeURIComponent(studentInfo.college)}`);
        }).catch((error) => {
            console.error('Error saving NetID and college to database:', error);
            res.status(500).send('There was an error processing your request.');
        });
    }
});

module.exports = router;