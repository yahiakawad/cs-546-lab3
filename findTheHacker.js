/* Find The Hacker */

const axios = require('axios');

async function getPeople() {
    const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
    return data // this will be the array of people
}

async function getWork() {
    const { data } = await axios.get('https://gist.githubusercontent.com/robherley/61d560338443ba2a01cde3ad0cac6492/raw/8ea1be9d6adebd4bfd6cf4cc6b02ad8c5b1ca751/work.json')
    return data // this will be the array of people
}


async function findTheHacker(ip) {
    const peoplePromise = getPeople();
    const workPromise = getWork();

    const peopleArray = await peoplePromise;
    const workArray = await workPromise;

    if (typeof (ip) !== 'string')
        throw `the ip address given is of the incorrect type`
    else {
        for (var i in workArray) {
            if (workArray[i].ip == ip) {
                for (var p in peopleArray) {
                    if (peopleArray[p].ssn == workArray[i].ssn)
                        return peopleArray[p].firstName + " " + peopleArray[p].lastName + " is the hacker!"
                }
            }
        }
        throw `this ip address does not exist in the array`
    }
}

module.exports = {
    findTheHacker
}