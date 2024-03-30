const express = require('express');
const router2 = express.Router();

router2.get('/next-page-2', (req, res) => {
    const college = req.query.college;

    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1"> <!-- Viewport meta tag -->
            <title>Study Floor</title>
            <style>
                .selected { font-weight: bold; }
                .continue-button {
                    display: block;
                    margin: 15px auto;
                    background-color: white;
                    color: black;
                    padding: 10px 20px;
                    text-decoration: none;
                    border: none;
                    cursor: pointer;
                    border-radius: 10px;
                    font-weight: bold;
                    font-family: 'Times New Roman', serif;
                }
                body {
                    background-color: black;
                    color: white;
                    padding: 10px;
                }
                form {
                    display: grid;
                    grid-row-gap: 5px;
                }
                label {
                    display: block;
                    margin: 5px 0;
                }
                .continue-button:disabled {
                    background-color: grey;
                    cursor: not-allowed;
                }
                /* Media query for devices with a width of less than 768px */
                @media (max-width: 768px) {
                    body, button, input, span {
                        font-size: 200%;
                    }
                    h1 {
                        font-size: 100%;
                    }
                    label, label span {
                        font-size: 75%;
                        margin: 10px 0;
                    }
                    .continue-button, form {
                        padding: 20px 40px;
                    }
                    .continue-button {
                        font-size: 100%;
                        padding: 10px 20px;
                        margin: 30px auto;
                    }
                    form {
                        grid-row-gap: 10px;
                    }
                }
            </style>
            <script>
                function updateSelection(event) {
                    document.querySelector('.continue-button').disabled = false;
                    document.querySelectorAll('label').forEach(label => {
                        label.classList.remove('selected');
                        // Ensure no inline font size styles are set
                        label.style.fontSize = ''; 
                    });
                    let selectedLabel = event.target.tagName === 'LABEL' ? event.target : event.target.closest('label');
                    selectedLabel.classList.add('selected');
                    if (selectedLabel.querySelector('input').value === '5-6') {
                        selectedLabel.querySelector('span').textContent = 'lol dork';
                        setTimeout(() => {
                            selectedLabel.querySelector('span').textContent = '5-6';
                        }, 2000);
                    }
                }
                function continueToNextPage() {
                    const queryParams = new URLSearchParams(window.location.search);
                    queryParams.set('college', '${college}');
                    window.location.href = '/next-page-3?' + queryParams.toString();
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