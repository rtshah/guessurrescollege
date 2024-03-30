const express = require('express');
const router8 = express.Router();

router8.get('/next-page-8', (req, res) => {
    const college = req.query.college;

    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1"> <!-- Viewport meta tag -->

            <title>Location Choice</title>
            <style>
                body {
                    background-color: black; /* Dark mode background */
                    color: white; /* White text for contrast */
                    font-family: 'Times New Roman', serif; /* Times New Roman font */
                    margin: 0;
                    padding: 10px; /* Reduced padding */
                    text-align: center;
                }
                .choices {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 10px; /* Reduced gap between options */
                }
                .choice {
                    cursor: pointer;
                    transition: transform 0.2s;
                    padding: 8px; /* Reduced padding for closer elements */
                    margin: auto; /* Center content */
                }
                .choice:hover {
                    transform: scale(1.05);
                }
                .choice.selected {
                    font-weight: bold; /* Make the text bold when selected */
                    border: 2px solid white; /* White border for selected option */
                    box-sizing: border-box; /* Include border in the element's total width and height */
                }
                .image-box {
                    width: 100%; /* Full width of the container */
                    height: auto; /* Height adjusted automatically to maintain aspect ratio */
                }
                .image-box img {
                    width: 50%; /* Scaled down to 50% of its original size */
                    height: auto; /* Height adjusted automatically to maintain aspect ratio */
                    object-fit: contain; /* Ensure the whole image fits within the box */
                    display: block; /* Display as block to remove bottom space */
                    margin: auto; /* Center-align the image */
                }
                .smaller-image img {
                    width: 25%; /* Smaller width for top images */
                }
                .continue-button {
                    display: block; /* Make the button block level to occupy its own line */
                    margin: 10px auto; /* Reduced margin for closer elements */
                    background-color: white; /* White background for the button */
                    color: black; /* Black text for the button */
                    padding: 10px 20px; /* Padding inside the button */
                    text-decoration: none; /* Remove underline from link */
                    border: none; /* Remove border */
                    cursor: pointer; /* Change cursor to pointer on hover */
                    border-radius: 10px; /* Rounded corners for the button */
                    font-weight: bold; /* Bold text for the button */
                    font-family: 'Times New Roman', serif; /* Times New Roman font for the button */
                }

                /* Media query for mobile devices */
                @media (max-width: 600px) {
                    body {
                        padding: 20px; /* Increase padding */
                    }
                    .choice, .continue-button {
                        padding: 8px; /* Double the padding */
                        font-size: 100%; /* Double the font size */
                    }
                    .choices {
                        gap: 20px; /* Double the gap */
                    }
                    .image-box img, .smaller-image img {
                        width: 100%; /* Increase image size */
                    }
                }
            </style>
            <script>
                function selectOption(event) {
                    // Remove the 'selected' class and border from all choices
                    document.querySelectorAll('.choice').forEach(choice => {
                        choice.classList.remove('selected');
                        choice.style.border = 'none';
                    });

                    // Add the 'selected' class and white border to the clicked choice
                    const selectedChoice = event.currentTarget;
                    selectedChoice.classList.add('selected');
                    selectedChoice.style.border = '2px solid white';
                }
                
                function continueToNextPage() {
                    // Redirect to the next page, including the college parameter
                    window.location.href = '/next-page-9?college=' + encodeURIComponent('${college}');
                }
            </script>
        </head>
        <body>
            <h1>where would i most likely find 🧐🕵️‍♂️ you (tricky 🥶 because i isn't 🤓 a being 😹, yet 😱)</h1>
            <div class="choices">
                <div class="choice smaller-image" onclick="selectOption(event)">
                    <span>brochstein</span>
                    <div class="image-box"><img src="/images/broch.jpeg" alt="Brochstein"></div>
                </div>
                <div class="choice smaller-image" onclick="selectOption(event)">
                    <span>fondy</span>
                    <div class="image-box"><img src="/images/fondy.webp" alt="Fondren Library"></div>
                </div>
                <div class="choice" onclick="selectOption(event)">
                    <span>rec</span>
                    <div class="image-box"><img src="/images/gym.jpeg" alt="Rec Center"></div>
                </div>
                <div class="choice" onclick="selectOption(event)">
                    <span>oconner</span>
                    <div class="image-box"><img src="/images/smelly.jpeg" alt="O'Conner"></div>
                </div>
            </div>
            <button class="continue-button" onclick="continueToNextPage()">Continue</button>
        </body>
        </html>
    `);
});

module.exports = router8;
