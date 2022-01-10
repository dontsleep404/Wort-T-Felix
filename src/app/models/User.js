const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');



const Schema = mongoose.Schema;


const Course = new Schema({
    
});

  

module.exports = mongoose.model('Course', Course);