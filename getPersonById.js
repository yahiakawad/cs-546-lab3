/* Get Person By ID */

const axios = require('axios');

async function getPeople() {
    const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
    return data // this will be the array of people
}

/* gets the person's name by their id number. Since the array is sorted and starts with id = 1 just subtract one from the id */
async function getPersonById(id) {

    const peoplePromise = getPeople();
    const peopleArray = await peoplePromise;

    if (id < 1 || typeof (id) !== 'number' || id > peopleArray.length) {
        throw `this id is either undefined or an invalid value`;
    }
    else {
        return peopleArray[id - 1].firstName + " " + peopleArray[id - 1].lastName;
    }
}

module.exports = {
    getPersonById
}