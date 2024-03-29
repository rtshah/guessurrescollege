// idchecker.js
const axios = require('axios');
const cheerio = require('cheerio');

async function getStudentInfo(netId) {
    const url = `https://search.rice.edu/?q=${netId}`;
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);

        const nameElement = $('a.name');
        const name = nameElement.length ? nameElement.text().trim() : 'Name not found';

        const collegeElement = $('a[href^="/people/college/"]');
        const college = collegeElement.length ? collegeElement.text().trim() : 'College not found';

        return { name, college };  // Return the result as an object
    } catch (error) {
        console.error('An error occurred:', error.message);
        return { name: 'Error', college: 'Error' };  // Return error info
    }
}

module.exports = getStudentInfo;  // Export the function