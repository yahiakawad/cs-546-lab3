/* Lab 3 -- Yehia Awad */

const getByIndex = require("./getPersonByIndex.js");
const getById = require("./getPersonById.js");
const lexIndex = require("./lexIndex.js");
const firstNameMetrics = require("./firstNameMetrics.js");
const shouldTheyGoOutside = require("./shouldTheyGoOutside.js");
const whereDoTheyWork = require("./whereDoTheyWork.js");
const hacker = require("./findTheHacker.js");

const axios = require('axios');

async function main (){
    console.log("Get By Index Tests");
    let test1 = await getByIndex.getPersonByIndex(42) // Returns: "Brew Peat"
    console.log(test1);
    // let test2 = await getByIndex.getPersonByIndex(-1) // Throws Error
    // let test3 = await getByIndex.getPersonByIndex(1000) // Throws Error
    // let test4 = await getByIndex.getPersonByIndex() // Throws Error

    console.log("Get by ID Tests");
    let test5 = await getById.getPersonById(35);
    console.log(test5);
    // let test6 = await getById.getPersonById();
    // let test7 = await getById.getPersonById("hello");
    // let test8 = await getById.getPersonById(10000);

    console.log("Lex Index Tests")
    let test9 = await lexIndex.lexIndex(2) // Returns: "Dermot Abberley"
    console.log(test9);
    // let test10 = await lexIndex.lexIndex(-1) // Throws Error
    // let test11 = await lexIndex.lexIndex(1000) // Throws Error
    // let test12 = await lexIndex.lexIndex() // Throws Error

    console.log("First Name Metrics Test");
    let metrics = await firstNameMetrics.firstNameMetrics();
    console.log(metrics);
    
    console.log("Should they go outside Test");
    let test13 = await shouldTheyGoOutside.shouldTheyGoOutside("Scotty", "Barajaz") // Returns "Yes, Scotty should go outside."
    let test14 = await shouldTheyGoOutside.shouldTheyGoOutside("Calli", "Ondrasek") // Returns "No, Calli should not go outside."
    console.log(test13 + "\n" + test14);
    // let test15 = await shouldTheyGoOutside.shouldTheyGoOutside() // Throws Error
    // let test16 = await shouldTheyGoOutside.shouldTheyGoOutside("Bob") // Throws Error
    // let test17 = await shouldTheyGoOutside.shouldTheyGoOutside("Bob", "Smith") // Throws Error

    console.log("Where Do They Work");
    let test18 = await whereDoTheyWork.whereDoTheyWork("Demetra", "Durrand") // Returns: "Demetra Durrand - Nuclear Power Engineer at Buzzshare. They will be fired."
    let test19 = await whereDoTheyWork.whereDoTheyWork("Hank", "Tarling") // Returns: "Hank Tarling - Technical Writer at Babbleblab. They will not be fired."
    console.log(test18 + "\n" + test19);
    // let test20 = await whereDoTheyWork.whereDoTheyWork() // Throws Error
    // let test21 = await whereDoTheyWork.whereDoTheyWork("Bob") // Throws Error
    // let test22 = await whereDoTheyWork.whereDoTheyWork("Bob", "Smith") // Throws Error

    console.log("Find The Hacker");
    let test23 = await hacker.findTheHacker("79.222.167.180") // Returns: "Robert Herley is the hacker!"
    console.log(test23);
    // let test24 = await hacker.findTheHacker("foobar") // Throws Error
    // let test25 = await hacker.findTheHacker() // Throws Error

}

main().catch(err => {
    console.log(err);
  });