const express = require('express');
const router9 = express.Router();

router9.get('/next-page-9', (req, res) => {
    // Capture the college query parameter
    const college = req.query.college;

    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Most Attractive Major</title>
            <style>
                body {
                    background-color: black; /* Dark mode background */
                    color: white; /* White text for contrast */
                    font-family: 'Times New Roman', serif; /* Times New Roman font */
                    margin: 0;
                    padding: 20px; /* Add padding for spacing */
                }
                form {
                    display: grid;
                    gap: 10px; /* Add 10px of space between each element */
                }
                .selected {
                    font-weight: bold; /* Bold for selected option */
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
                    border-radius: 10px; /* 10px corner radius */
                    font-weight: bold; /* Bold text */
                    font-family: 'Times New Roman', serif; /* Times New Roman font */
                }
                label {
                    cursor: pointer; /* Change cursor to pointer on hover over labels */
                }
                /* Mobile styles */
                @media (max-width: 768px) {
                    body {
                        font-size: 200%; /* Double the font size */
                        padding: 40px; /* Double the padding */
                    }
                    form {
                        gap: 20px; /* Double the gap */
                    }
                    .continue-button, label {
                        padding: 20px 40px; /* Double the padding */
                        margin: 40px auto; /* Double the margin */
                        font-size: 200%; /* Double the font size */
                    }
                }
            </style>
            <script>
                // Function to update the selected option
                function updateSelection(event) {
                    // Remove the 'selected' class from all labels
                    document.querySelectorAll('label').forEach(label => {
                        label.classList.remove('selected');
                    });

                    // Add the 'selected' class to the clicked label
                    let selectedLabel = event.target.closest('label');
                    selectedLabel.classList.add('selected');
                }

                function continueToNextPage() {
                    // Include the college in the navigation to the next page
                    window.location.href = '/next-page-10?college=${encodeURIComponent(college)}';
                }
            </script>
        </head>
        <body>
            <h1>most attractive major</h1>
            <form onclick="updateSelection(event)">
                <label><input type="radio" name="major" value="cs"><span> comp sci</span></label>
                <label><input type="radio" name="major" value="cs"> computer science </label>
                <label><input type="radio" name="major" value="cs"> cs (please) </label>
                <label><input type="radio" name="major" value="cs"> other 🫦</label>
                <button type="button" class="continue-button" onclick="continueToNextPage()">Continue</button>
            </form>
        </body>
        </html>
    `);
});

module.exports = router9;