/* Should They Go Outside */

const axios = require('axios');

async function getPeople() {
    const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
    return data // this will be the array of people
}

async function getWeather() {
    const { data } = await axios.get('https://gist.githubusercontent.com/robherley/1b950dc4fbe9d5209de4a0be7d503801/raw/eee79bf85970b8b2b80771a66182aa488f1d7f29/weather.json')
    return data // this will be the array of people
}

const peoplePromise = getPeople();
const weatherPromise = getWeather();

/* returns a string that states whether or not the person should go outside based on the weather.json */
async function shouldTheyGoOutside(firstName, lastName) {
    const peopleArray = await peoplePromise;
    const weatherArray = await weatherPromise;
    /*Sorted Array by lastName*/
    const lexSortPeopleArray = [...peopleArray].sort(function (x, y) { return x.lastName.localeCompare(y.lastName); });

    if (typeof (firstName) === 'string' && typeof (lastName === 'string') && arguments.length === 2) {
        var person = binarySearch(lexSortPeopleArray, firstName, lastName);

        for (var w in weatherArray) {
            if (weatherArray[w].zip == person.zip) {
                if (weatherArray[w].temp >= 34)
                    return "Yes, " + firstName + " should go outside";
                else
                    return "No, " + firstName + " should not go outside";
            }
        }
    }

    else {
        throw `please check parameters are of correct type (string) and have 2 values (firstName, lastName) and try again`
    }
}

function binarySearch(sortedArr, value1, value2) {
    let start = 0;
    let end = sortedArr.length - 1;

    while (start <= end) {

        let mid = Math.floor((start + end) / 2);

        if ((sortedArr[mid].lastName.localeCompare(value2) === 0)) {
            if ((sortedArr[mid].firstName.localeCompare(value1) === 0)) {
                return sortedArr[mid];
            }
        }

        else if (sortedArr[mid].lastName.localeCompare(value2) > 0) {
            end = mid - 1;
        }

        else if (sortedArr[mid].lastName.localeCompare(value2) < 0) {
            start = mid + 1
        }

    }
    throw `this person is not in the list`
}

module.exports = {
    shouldTheyGoOutside,
    binarySearch
}