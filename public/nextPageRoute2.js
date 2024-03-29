const express = require('express');
const router2 = express.Router();

router2.get('/next-page-2', (req, res) => {
    // Capture the college query parameter
    const college = req.query.college;

    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Study Floor</title>
            <style>
                /* Style for the selected label */
                .selected {
                    font-weight: bold;
                }
                /* Style for the continue button */
                .continue-button {
                    display: block; /* Make the button block level to occupy its own line */
                    margin: 15px auto; /* Center the button horizontally with auto margins */
                    background-color: white; /* White background for dark mode */
                    color: black; /* Black text for dark mode */
                    padding: 10px 20px; /* Padding inside the button */
                    text-decoration: none; /* Remove underline from link */
                    border: none; /* Remove border */
                    cursor: pointer; /* Change cursor to pointer on hover */
                    border-radius: 10px; /* Rounded corners */
                    font-weight: bold; /* Make the text bold */
                    font-family: 'Times New Roman', serif; /* Set the font to Times New Roman */
                }
                body {
                    background-color: black; /* Black background for dark mode */
                    color: white; /* White text for dark mode */
                    padding: 10px; /* Horizontal and vertical padding */
                }
                form {
                    display: grid;
                    grid-row-gap: 5px; /* Vertical spacing between form elements */
                }
                label {
                    display: block; /* Ensure labels are block level for margin to work */
                    margin: 5px 0; /* Vertical spacing */
                }
                /* Disabled button style */
                .continue-button:disabled {
                    background-color: grey; /* Grey background for disabled state */
                    cursor: not-allowed; /* Change cursor to not-allowed on hover */
                }
            </style>
            <script>
                // Function to update the selected option, enable continue button, and handle "5-6" animation
                function updateSelection(event) {
                    // Enable the continue button when an option is selected
                    document.querySelector('.continue-button').disabled = false;

                    // Remove the 'selected' class from all labels and add to the clicked one
                    document.querySelectorAll('label').forEach(label => {
                        label.classList.remove('selected');
                    });

                    let selectedLabel;
                    if (event.target.tagName === 'LABEL') {
                        selectedLabel = event.target;
                    } else {
                        selectedLabel = event.target.closest('label');
                    }
                    selectedLabel.classList.add('selected');

                    // Temporarily change "5-6" to "lol dork" when selected
                    if (selectedLabel.querySelector('input').value === '5-6') {
                        selectedLabel.querySelector('span').textContent = 'lol dork';
                        setTimeout(() => {
                            selectedLabel.querySelector('span').textContent = '5-6';
                        }, 2000); // 2 second delay before changing back
                    }
                }

                function continueToNextPage() {
                    const queryParams = new URLSearchParams(window.location.search);
                    queryParams.set('college', '${college}'); // Set the college query parameter
                    window.location.href = '/next-page-3?' + queryParams.toString(); // Redirect with the query parameters
                }
            </script>
        </head>
        <body>
            <h1>which ❌ fondy floor do you study on</h1>
            <form onclick="updateSelection(event)">
                <label><input type="radio" name="fondyFloor" value="5-6"><span> 5-6</span></label><br>
                <label><input type="radio" name="fondyFloor" value="2-4"> 2-4</label><br>
                <label><input type="radio" name="fondyFloor" value="1-basement"> 1 or basement</label><br>
                <label><input type="radio" name="fondyFloor" value="whats-fondy"> whats fondy??</label><br>
                <button type="button" class="continue-button" onclick="continueToNextPage()" disabled>Continue</button>
            </form>
        </body>
        </html>
    `);
});

module.exports = router2;
