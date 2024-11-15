// write in terminal:
// install package.json : npm init -y
// install mongoose & dotenv: npm i mongoose dotenv

const prompt = require('prompt-sync')();

const dotenv = require('dotenv'); // importing dotenv
dotenv.config();

const mongoose = require('mongoose'); // import mongoose
console.log(process.env.MONGODB_URI);

const Crm = require('./models/CRM.js'); // import CRM model
// console.log(Crm)
// connect to mongoose
const connect = async () => {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connect to MongoDB');
}



// ---------------------------------- create variables ---------------------------------- //
// set up crmData function that I can update later with cust info
const crmData = {
    name: null,
    age: 0,
}

// set up name age and id varaibles
const name = () => {
    const custName = prompt('What is your name? ');
    crmData.name = custName;
    // console.log(crmData.name)
    age();
}

const age = () => {
    const custAge = prompt('What is your age? ');
    crmData.age = custAge;
    createCust();
}

const printUsers = async () => {
    // const userlist = getallusers
    // userlist.forEach print user.id + user.name
}



// ---------------------------------- create functions for menu options ---------------------------------- //
// create functions for each menu option
// create customer function
const createCust = async () => {
    connect();
    const newCust = await Crm.create({name: crmData.name, age: crmData.age});
    console.log('User saved:', newCust);
}

// view all customers function
const view = async () => {
    connect();
    printUsers();
    // code below attempted with using notes (not using for this purpose)
    // const foundCRM = await Crm.findById(crmData.id);
    // console.log(foundCRM);
}


// update a customer function
// const update = async () => { await CRM.findByIdAndUpdate(
//     '',
//     { name: crmData.name, age: crmData.age},
//     { new:}
// )
// }
const updateUser = async () => {
    printUsers();
    const selectUser = prompt('What user ID would you like to update?')
    // update functionality: findByIdAndUpdate
}


// delete a customer function
// const deleteCust = async () => { await CRM.findByIdAndDelete('',
//     { name: crmData.name, age: crmData.age}
// )}


// quit app
// const end = 

// ---------------------------------- main menu functionality ---------------------------------- //
const mainMenu = () => {
    // connect()
    console.log(`Welcome to the CRM!\n
        What would you like to do? \n
        1. Create a customer \n
        2. View all customers \n
        3. Update a customer \n
        4. Delete a customer \n
        5. Quit \n`);
    selection = prompt('What would you like to do? Choose a number and press enter.');
    if (selection === `1`) {
        name();
        mainMenu();
    }
    else if (selection === `2`) {
        view();
        mainMenu();
    }
    else if (selection == `3`) {
        update();
        mainMenu();
    }
    else if (selection == `4`) {
        deleteCust();
        mainMenu();
    }
    else if (selection == `5`) {
        end();
    }
    else {
        mainMenu();
    }
}
    
// run mainMenu
mainMenu();

