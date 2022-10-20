const mongoose = require('mongoose')

const Schema = mongoose.Schema

const artworkSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String
    },
    imgURL: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true,
    },
    artist: {
        type: String,
        required: true,
    }
}, { timestamps: true })



module.exports = mongoose.model('Artwork', artworkSchema,)