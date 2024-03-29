// nextPageRoute6.js
const express = require('express');
const router6 = express.Router();

router6.get('/next-page-6', (req, res) => {
    // Capture the college query parameter
    const college = req.query.college;

    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>servery</title>
            <style>
                body {
                    background-color: black; /* Dark mode background */
                    color: white; /* White text for contrast */
                    font-family: 'Times New Roman', serif; /* Times New Roman font */
                    margin: 0;
                    padding: 20px;
                    text-align: center;
                }
                .options-container {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start; /* Align items to the start (left) */
                    gap: 10px; /* Spacing between options */
                }
                label {
                    cursor: pointer; /* Change cursor to pointer on hover */
                    display: block; /* Ensure each label is on its own line */
                }
                .selected {
                    font-weight: bold; /* Only bold the text for selected label */
                }
                /* Style for the continue button */
                .continue-button {
                    margin-top: 20px; /* Spacing above the continue button */
                    background-color: white; /* White background */
                    color: black; /* Black text */
                    padding: 10px 20px;
                    text-decoration: none;
                    border: none;
                    cursor: pointer;
                    font-family: 'Times New Roman', serif;
                    font-weight: bold;
                    border-radius: 10px; /* Rounded corners for the button */
                }
                .continue-button:disabled {
                    background-color: grey;
                    cursor: not-allowed;
                }
                /* Media query for mobile devices */
                @media (max-width: 768px) {
                    body {
                        font-size: 200%; /* Increase font size */
                        padding: 40px; /* Increase padding */
                    }
                    .options-container {
                        gap: 20px; /* Increase spacing between options */
                    }
                    label {
                        font-size: 200%; /* Increase font size for better readability */
                    }
                    .continue-button {
                        margin-top: 40px; /* Increase spacing above the button */
                        padding: 20px 40px; /* Increase padding for a larger button */
                        font-size: 200%; /* Increase font size for the text inside the button */
                    }
                }
            </style>
            <script>
                function updateSelection(event) {
                    const labels = document.querySelectorAll('.options-container label');
                    labels.forEach(label => label.classList.remove('selected'));
                    
                    const selectedLabel = event.target.closest('label');
                    selectedLabel.classList.add('selected');
                    document.querySelector('.continue-button').disabled = false; // Enable the continue button
                }

                function continueToNextPage() {
                    window.location.href = '/next-page-7?college=${encodeURIComponent(college)}';
                }
            </script>
        </head>
        <body>
            <h1>favorite serve💅ry. no, bake⛽️r kitchen doesnt count</h1>
            <div class="options-container" onclick="updateSelection(event)">
                <label><input type="radio" name="servery" value="north"><span> north</span></label>
                <label><input type="radio" name="servery" value="west"> west</label>
                <label><input type="radio" name="servery" value="south"> south</label>
                <label><input type="radio" name="servery" value="siebel"> siebel?</label>
            </div>
            <button type="button" class="continue-button" onclick="continueToNextPage()" disabled>Continue</button>
        </body>
        </html>
    `);
});

module.exports = router6;