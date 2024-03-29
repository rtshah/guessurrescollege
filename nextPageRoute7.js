const express = require('express');
const router7 = express.Router();

router7.get('/next-page-7', (req, res) => {
    // Capture the college query parameter
    const college = req.query.college;

    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Choices</title>
            <style>
                body {
                    background-color: black; /* Dark mode background */
                    color: white; /* White text for contrast */
                    font-family: 'Times New Roman', serif; /* Times New Roman font */
                    margin: 0;
                    padding: 20px;
                }
                .options-container {
                    text-align: left; /* Left-align the options */
                    margin-left: auto;
                    margin-right: auto;
                    width: fit-content;
                    margin-bottom: 10px; /* Add spacing between options container and button */
                }
                .selected {
                    font-weight: bold; /* Bold for selected option */
                }
                .button-container {
                    text-align: center; /* Center-align the continue button */
                    margin-bottom: 10px; /* Add spacing between button and info text */
                }
                .continue-button {
                    background-color: white; /* White background for the button */
                    color: black; /* Black text for the button */
                    padding: 10px 20px; /* Padding inside the button */
                    text-decoration: none; /* Remove underline from link */
                    border: none; /* Remove border */
                    cursor: pointer; /* Change cursor to pointer on hover */
                    border-radius: 10px; /* Rounded corners */
                    font-weight: bold; /* Bold text */
                    font-family: 'Times New Roman', serif; /* Times New Roman font for the button */
                    margin-bottom: 10px; /* Add spacing below the button */
                }
                .continue-button:disabled {
                    background-color: grey; /* Grey background for disabled state */
                    cursor: not-allowed; /* Not-allowed cursor on hover */
                }
                label {
                    cursor: pointer; /* Change cursor to pointer on hover over labels */
                    display: block; /* Ensure each label is on its own line */
                    margin-bottom: 10px; /* Spacing below each label */
                }
                .info-text {
                    color: white; /* White text for the information text */
                    margin-top: 20px; /* Spacing above the text */
                    text-align: left; /* Align info text to the left */
                }

                /* Media query for devices with a width of less than 768px */
                @media (max-width: 768px) {
                    body {
                        font-size: 200%; /* Double the font size */
                        padding: 40px; /* Double the padding */
                    }
                    .options-container, .button-container, .info-text {
                        margin-bottom: 20px; /* Double the margin-bottom */
                    }
                    .continue-button, label {
                        padding: 20px 40px; /* Double the padding */
                        margin-bottom: 20px; /* Double the margin-bottom */
                        font-size: 200%; /* Double the font size */
                    }
                }
            </style>
            <script>
                function updateSelection(event) {
                    document.querySelectorAll('.options-container label').forEach(label => {
                        label.classList.remove('selected');
                    });

                    const selectedLabel = event.target.closest('label');
                    selectedLabel.classList.add('selected');
                    document.querySelector('.continue-button').disabled = false; // Enable the continue button
                }

                function continueToNextPage() {
                    window.location.href = '/next-page-8?college=${encodeURIComponent(college)}';
                }
            </script>
        </head>
        <body>
            <div class="options-container" onclick="updateSelection(event)">
                <label><input type="radio" name="choice" value="luv-sosa"> these bitchez luv sosa (woman tend to appreciate the company of 'sosa')</label>
                <label><input type="radio" name="choice" value="raris-rovas"> let them know then raris and rovas (refers to Ferrari, an Italian luxury sports car manufacturer and Range Rover, a popular model of the predominantly four-wheel drive, off-road vehicles, owned by mnc Jaguar-Land Rover)</label>
                <label><input type="radio" name="choice" value="cobra"> hitem with tha cobra, now that boy slumped over (cobra refers to chief keefs extensive snake charming abilities. the cobra is likely hyperbole for the black rat snake which induces drowsiness after bites)</label>
                <label><input type="radio" name="choice" value="all-for-sosa"> they do it all for sosa (wet campus is a weekend away, all thanks to sosa)</label>
            </div>
            <div class="button-container">
                <button type="button" class="continue-button" onclick="continueToNextPage()" disabled>Continue</button>
            </div>
            <p class="info-text">
                As a large language model trained by two Rice students coming down from a 600mg caffeine buzz at 4am, I do make some mistakes. If you detect any errors, please reach out to wejustwnahvfun LLC at scottrixner@comp140.edu
            </p>
        </body>
        </html>
    `);
});

module.exports = router7;
