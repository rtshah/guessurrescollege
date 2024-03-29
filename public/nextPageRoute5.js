// nextPageRoute5.js
const express = require('express');
const router5 = express.Router();

router5.get('/next-page-5', (req, res) => {
    // Capture the college query parameter
    const college = req.query.college;

    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Multiple Choice</title>
            <style>
                body {
                    background-color: black; /* Dark mode background */
                    color: white; /* White text for contrast */
                    font-family: 'Times New Roman', serif; /* Times New Roman font for body */
                    margin: 0;
                    padding: 20px;
                    text-align: center;
                }
                .choices {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 20px; /* Spacing before the continue button */
                }
                .choice, .homebodie-text {
                    cursor: pointer;
                    transition: transform 0.2s;
                    max-width: 30%; /* Adjusting the image size */
                    border: 2px solid transparent; /* Default no border */
                    border-radius: 5px; /* Rounded corners for the selection box */
                    margin-bottom: 5px; /* Spacing below the image or text */
                }
                .choice:hover, .homebodie-text:hover {
                    transform: scale(1.05);
                }
                .choice:active, .homebodie-text:active {
                    border: 2px solid white; /* Highlight selected option */
                }
                .continue-button {
                    display: block; /* Make the button block level to occupy its own line */
                    margin: 20px auto; /* Center the button horizontally with auto margins */
                    background-color: white; /* White background for the button */
                    color: black; /* Black text for the button */
                    padding: 10px 20px; /* Padding inside the button */
                    text-decoration: none; /* Remove underline from link */
                    border: none; /* Remove border */
                    cursor: pointer; /* Change cursor to pointer on hover */
                    font-weight: bold; /* Bold text */
                    font-family: 'Times New Roman', serif; /* Times New Roman font */
                    border-radius: 10px; /* Rounded corners */
                }
                .continue-button:disabled {
                    background-color: grey; /* Grey background when disabled */
                    cursor: not-allowed; /* Not-allowed cursor on hover when disabled */
                }
                .hidden-radio {
                    display: none; /* Hide the radio input */
                }
            </style>
            <script>
                function selectOption(choice) {
                    document.querySelectorAll('.choice').forEach(choice => {
                        choice.style.border = '2px solid transparent'; // Reset the border
                    });
                    document.querySelector('.homebodie-text').style.border = '2px solid transparent'; // Reset the border for text
                    choice.style.border = '2px solid white'; // Highlight the selected choice

                    document.querySelector('.continue-button').disabled = false; // Enable the continue button
                    document.querySelector('#homebodie-radio').checked = false; // Uncheck the radio button for text
                }
                function selectTextOption() {
                    // Enable the continue button when text option is selected
                    document.querySelectorAll('.choice').forEach(choice => {
                        choice.style.border = '2px solid transparent'; // Reset the border
                    });

                    const textOption = document.querySelector('.homebodie-text');
                    textOption.style.border = '2px solid white'; // Highlight the selected text option

                    document.querySelector('.continue-button').disabled = false; // Enable the continue button
                    document.querySelector('#homebodie-radio').checked = true; // Check the associated radio input
                }
                function continueToNextPage() {
                    window.location.href = '/next-page-6?college=${encodeURIComponent(college)}';
                }
            </script>
        </head>
        <body>
            <h1>where would you be on a friday night 🌝🪩💃</h1>
            <div class="choices">
                <img src="/images/1.png" alt="Option 1" class="choice" onclick="selectOption(this)">
                <img src="/images/2.png" alt="Option 2" class="choice" onclick="selectOption(this)">
                <img src="/images/3.png" alt="Option 3" class="choice" onclick="selectOption(this)">
                <input type="radio" id="homebodie-radio" name="choice" value="homebodie" class="hidden-radio">
                <label for="homebodie-radio" onclick="selectTextOption()">
                    <span class="homebodie-text">nope none imma homebodie 😴</span>
                </label>
            </div>
            <button onclick="continueToNextPage()" class="continue-button" disabled>Continue</button>
        </body>
        </html>
    `);
});

module.exports = router5;