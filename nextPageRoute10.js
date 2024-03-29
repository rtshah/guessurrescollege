const express = require('express');
const router10 = express.Router();

router10.get('/next-page-10', (req, res) => {
  const college = req.query.college ? decodeURIComponent(req.query.college) : null;

  // Generate a random accuracy percentage between 80.00 and 99.99 with two decimal places
  const accuracyPercentage = (Math.random() * (99.99 - 80.00) + 80.00).toFixed(2);

  if (college) {
    res.send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>College Information</title>
        <style>
          body {
            background-color: #000000; /* True black background */
            color: #E0E0E0; /* Light text color for readability */
            font-family: 'Times New Roman', serif; /* Times New Roman font */
            margin: 0;
            padding: 20px;
            text-align: center; /* Center-align everything */
          }
          h1 {
            color: #FFFFFF; /* Even lighter color for headers */
          }
          p {
            font-size: 2em; /* Same size as h1 */
            font-weight: bold; /* Make text bold */
          }
          .accuracy-text {
            font-size: 1em; /* Smaller font size than the header */
          }
          /* Media query for devices with a width of less than 768px */
          @media (max-width: 768px) {
            body {
              padding: 40px; /* 2x larger padding */
            }
            h1, p {
              font-size: 4em; /* 2x larger font size for h1 and p */
            }
            .accuracy-text {
              font-size: 2em; /* 2x larger font size for accuracy text */
            }
          }
        </style>
      </head>
      <body>
        <h1>after 🦷 careful 😮 deliberation 😰 i have decided 😤 ur res college 🤤 is:</h1>
        <p>${college}</p> <!-- Display the college here in bold and the same size as h1 -->
        <p class="accuracy-text">i 👁️ was told 🗣️ i could be 😮 kenything 😁 but 😡 my creators 🤨 were too tired 😴 and called it a night 🛏️ before making me perfect 💫 i’m  ${accuracyPercentage}% sure that i'm correct 😰. please 🛐 be understanding 😱 if I messed up 🥶</p>
      </body>
      </html>
    `);
  } else {
    res.send('No college information found. Please go back and submit your netId.');
  }
});

module.exports = router10;