/* FirstName Metrics */

const axios = require('axios');

async function getPeople() {
    const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
    return data // this will be the array of people
}


/* returns an object with all the first name metrics */
async function firstNameMetrics() {
    const peoplePromise = getPeople();
    const peopleArray = await peoplePromise;

    var metrics = {
        totalLetters: 0,
        totalVowels: 0,
        totalConsonants: 0,
        longestName: "",
        shortestName: "",
    }

    var longest = 0;
    var shortest = peopleArray[0].firstName.length;

    for (var p in peopleArray) {
        metrics.totalLetters += peopleArray[p].firstName.length;

        //finding the longestName
        if (peopleArray[p].firstName.length > longest) {
            longest = peopleArray[p].firstName.length;
            metrics.longestName = peopleArray[p].firstName;
        }

        //finding the shortestName
        if (shortest > peopleArray[p].firstName.length) {
            shortest = peopleArray[p].firstName.length;
            metrics.shortestName = peopleArray[p].firstName;
        }

        //letter metrics
        for (c of peopleArray[p].firstName.toLowerCase()) {
            if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u')
                metrics.totalVowels++;
            else {
                metrics.totalConsonants++;
            }
        }
    }
    return metrics;
}

module.exports = {
    firstNameMetrics
}