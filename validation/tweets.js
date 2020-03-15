const Validator = require('validator');
const validText  = require('./valid-text');

module.exports = function validateTweetInput(date) {
    let errors = {};

    data.text = validText(data.text) ? data.text : "";

    if(!Validator.islength(data.text, {min:5, max:140})){
        errors.text = 'Tweet must be between 5 & 140 characters'
    }

    if(Validator.isEmpty(data.text)){
        errors.text = 'Text feild is required'
    }

    return{
        errors,
        isValid: Object.keys(errors) === 0
    }
}