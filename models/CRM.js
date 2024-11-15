// models/CRM.js
// model defitions of CRM

// add mongoose to enforce structure in MongoDB
const mongoose = require('mongoose');

// 1. define crm schema - tells you what the structure of your data looks like
const crmSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

// 2. compiile crmSchema into a model
// schema in an actual form that is useable
const Crm = mongoose.model('Crm', crmSchema)

// export so i can use this in other places
module.exports = Crm