const express = require('express');
const router3 = express.Router();

router3.get('/next-page-3', (req, res) => {
    // Capture the college query parameter
    const college = req.query.college;

    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1"> <!-- Viewport meta tag -->

            <title>Smash or Pass</title>
            <style>
                body {
                    background-color: black; /* Dark mode background */
                    color: white; /* White text for contrast */
                    padding: 20px; /* Add padding for spacing */
                    font-family: 'Times New Roman', serif; /* Times New Roman font */
                    text-align: left; /* Align text to the left */
                }
                .form-container {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start; /* Align items to the left */
                    width: fit-content; /* Fit the container's width to its content */
                    margin: 0; /* Align container to the left */
                }
                .options-container {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start; /* Align options to the left */
                }
                .selected {
                    font-weight: bold;
                }
                .continue-button {
                    display: block; /* Make the button block level to occupy its own line */
                    margin: 20px auto; /* Center the button horizontally */
                    background-color: white; /* White background for the button */
                    color: black; /* Black text for the button */
                    padding: 10px 20px; /* Padding inside the button */
                    text-decoration: none; /* Remove underline from link */
                    border: none; /* Remove border */
                    cursor: pointer; /* Change cursor to pointer on hover */
                    border-radius: 10px; /* Rounded corners */
                    font-weight: bold; /* Bold text */
                    font-family: 'Times New Roman', serif; /* Times New Roman font for the button */
                }
                .continue-button:disabled {
                    background-color: grey; /* Grey background for disabled state */
                    cursor: not-allowed; /* Change cursor to not-allowed on hover */
                }
                label {
                    cursor: pointer; /* Change cursor to pointer on hover over labels */
                    margin-bottom: 10px; /* Spacing below each label */
                    display: inline-block; /* Ensure labels are in line */
                }

                /* Media query for devices with a max-width of 768px */
                @media (max-width: 768px) {
                    body {
                        padding: 20px; /* Double the padding from the initial mobile adjustment */
                        font-size: 100%; /* Double the font size from the initial mobile adjustment */
                    }
                    .form-container, .options-container, .continue-button {
                        font-size: 100%; /* Double the font size for better readability */
                    }
                    .continue-button {
                        padding: 20px 40px; /* Double the padding inside the button */
                        margin: 40px auto; /* Double the margin around the button */
                        border-radius: 20px; /* Adjusted to maintain the visual impact of the corner radius */
                    }
                    label {
                        font-size: 200%; /* Double the font size for multiple choice options */
                        margin-bottom: 10px; /* Double the spacing below each label */
                    }
                }
            </style>
            <script>
                function updateSelection(event) {
                    document.querySelectorAll('.options-container label').forEach(label => {
                        label.classList.remove('selected');
                    });

                    let selectedLabel = event.target.closest('label');
                    selectedLabel.classList.add('selected');

                    document.querySelector('.continue-button').disabled = false;
                }

                function continueToNextPage() {
                    location.href = '/next-page-4?college=${encodeURIComponent(college)}';
                }
            </script>
        </head>
        <body>
            <div class="form-container">
                <h1>Smash or pass: apple maps guy 👀</h1>
                <div class="options-container" onclick="updateSelection(event)">
                    <label><input type="radio" name="smashPass" value="smash"> <span>s 👅 </span></label>
                    <label><input type="radio" name="smashPass" value="pass"> <span>p 😵‍💫</span></label>
                </div>
                <button type="button" class="continue-button" onclick="continueToNextPage()" disabled>Continue</button>
            </div>
        </body>
        </html>
    `);
});

module.exports = router3;
