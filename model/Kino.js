const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    /* 
        type: turi
        default: odatiy holi
        required: hatolik_validator
        unique: takrorlanmasin
    
    */
        title: {
            type: String,
            required: false,
            default: 'nomi' ,
            // unique: true,
        },
        author: {
            type: String
        },
        published:{
            type: Boolean,
            default: false
        },
        comment:[
            {message: String}
        ],
        publishedTime: {
            type: Date,
            default: Date.now
        }

});

module.exports = mongoose.model('kino', Schema);

