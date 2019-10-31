const axios = require('axios');

  async function getPeople() {
    const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
    return data // this will be the array of people
  }

  /* gets the person's name by their index from the lexiconographically sorted array */
  async function lexIndex(index) {

    const peoplePromise = getPeople();
    const peopleArray = await peoplePromise;
    const lexSortPeopleArray = [...peopleArray].sort(function (x, y) { return x.lastName.localeCompare(y.lastName); });

    if (index < 0 || typeof (index) !== 'number' || index >= lexSortPeopleArray.length) {
      throw `this index is either undefined or an invalid value`;

    }
    else {
      return lexSortPeopleArray[index].firstName + " " + lexSortPeopleArray[index].lastName;
    }
  }

  module.exports = {
    lexIndex
}