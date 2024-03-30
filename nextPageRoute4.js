// nextPageRoute4.js
const express = require('express');
const router4 = express.Router();

router4.get('/next-page-4', (req, res) => {
    // Capture the college query parameter
    const college = req.query.college;

    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1"> <!-- Viewport meta tag -->

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
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 10px;
            }
            .choice-container {
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .choice {
                cursor: pointer;
                transition: transform 0.2s;
                width: 25%; /* Making the image 0.2 times its current size */
            }
            .choice:hover {
                transform: scale(1.05);
            }
            .continue-button {
                display: block; /* Make the button block level to occupy its own line */
                margin: 20px auto; /* Center the button horizontally with auto margins */
                background-color: white; /* White background */
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
            /* Hide the default radio button */
            .choice-radio {
                display: none;
            }
            /* Custom radio button style */
            .choice-label {
                cursor: pointer;
                border: 2px solid transparent;
                padding: 5px;
                border-radius: 5px;
            }
            /* Highlighted style for selected option */
            .choice-radio:checked + .choice-label {
                border-color: white;
            }
        
            /* Media query for devices with width less than or equal to 600px */
            @media (max-width: 600px) {
                body, .continue-button, .choice-label {
                    font-size: 100%; /* Make text 2 times bigger */
                }
                .choices {
                    gap: 5px; /* Decrease spacing by half */
                }
                .choice {
                    width: 50%; /* Make images 2 times bigger */
                }
                .continue-button {
                    padding: 10px 20px; /* Increase padding to make the button bigger */
                }
            }
        </style>
            <script>
                function selectOption(event) {
                    document.querySelectorAll('.choice-label').forEach(label => {
                        label.style.borderColor = 'transparent';
                    });
                    event.target.nextElementSibling.style.borderColor = 'white';
                    document.querySelector('.continue-button').disabled = false; // Enable the continue button
                }
                function continueToNextPage() {
                    window.location.href = '/next-page-5?college=${encodeURIComponent(college)}';
                }
            </script>
        </head>
        <body>
            <h1>how do you say Okay</h1>
            <div class="choices">
                <div class="choice-container">
                    <input type="radio" id="choice1" name="choice" value="Option 1" class="choice-radio" onclick="selectOption(event)">
                    <label for="choice1" class="choice-label"><img src="/images/IMG_7233.PNG" alt="Option 1" class="choice"></label>
                </div>
                <div class="choice-container">
                    <input type="radio" id="choice2" name="choice" value="Option 2" class="choice-radio" onclick="selectOption(event)">
                    <label for="choice2" class="choice-label"><img src="/images/IMG_7234.PNG" alt="Option 2" class="choice"></label>
                </div>
                <div class="choice-container">
                    <input type="radio" id="choice3" name="choice" value="Option 3" class="choice-radio" onclick="selectOption(event)">
                    <label for="choice3" class="choice-label"><img src="/images/IMG_7235.PNG" alt="Option 3" class="choice"></label>
                </div>
                <div class="choice-container">
                    <input type="radio" id="choice4" name="choice" value="Option 4" class="choice-radio" onclick="selectOption(event)">
                    <label for="choice4" class="choice-label"><img src="/images/IMG_7236.PNG" alt="Option 4" class="choice"></label>
                </div>
            </div>
            <button onclick="continueToNextPage()" class="continue-button" disabled>Continue</button>
        </body>
        </html>
    `);
});

module.exports = router4;
