/* Where Do They Work */

const axios = require('axios');

async function getPeople() {
    const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
    return data // this will be the array of people
}

async function getWork() {
    const { data } = await axios.get('https://gist.githubusercontent.com/robherley/61d560338443ba2a01cde3ad0cac6492/raw/8ea1be9d6adebd4bfd6cf4cc6b02ad8c5b1ca751/work.json')
    return data // this will be the array of people
}

async function whereDoTheyWork(firstName, lastName) {
    const peoplePromise = getPeople();
    const workPromise = getWork();

    const peopleArray = await peoplePromise;
    const workArray = await workPromise;

    /*Sorted Array by lastName*/
    const lexSortPeopleArray = [...peopleArray].sort(function (x, y) { return x.lastName.localeCompare(y.lastName); });

    if (typeof (firstName) === 'string' && typeof (lastName === 'string') && arguments.length === 2) {
        var person = binarySearch(lexSortPeopleArray, firstName, lastName);

        for (var w in workArray) {
            if (workArray[w].ssn == person.ssn) {
                if (workArray[w].willBeFired == true)
                    return person.firstName + " " + person.lastName + " - " + workArray[w].jobTitle + " at " + workArray[w].company + ". They will be fired";
                else
                    return person.firstName + " " + person.lastName + " - " + workArray[w].jobTitle + " at " + workArray[w].company + ". They will not be fired";
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
    whereDoTheyWork,
    binarySearch
}