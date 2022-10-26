const Artwork = require('../models/artworkModel')
const mongoose = require('mongoose')

// get all artworks
const getArtworks = async (req, res) => {
    const artworks = await Artwork.find({}).sort({createAt: -1})

    res.status(200).json(artworks)
}

// get a single artwork 
const getArtwork = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'this is not the artwork you are looking for'})
    }

    const artwork = await Artwork.findById(id)

    if (!artwork) {
        return res.status(404).json({error: 'this is not the artwork you are looking for'})
    }

    res.status(200).json(artwork)
}

// create new artwork
const createArtwork = async (req, res) => {
    const { title, desc, imgURL, size, artist } = req.body
    //add doc to DB
    try {
        const artwork = await Artwork.create({ title, desc, imgURL, size, artist })
        res.status(200).json(artwork)
    } catch (error) {
        res.status(400).json({ error: error.message})
    }
}

// delete an artwork
const deleteArtwork = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'This is not the artwork you are looking for' })
    }

    const artwork = await Artwork.findOneAndDelete({ _id: id })

    if (!artwork) {
        return res.status(404).json({ error: 'This is not the artwork you are looking for' })
    }

    res.status(200).json(artwork)
}

// update an artwork
const updateArtwork = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'This is not the artwork you are looking for' })
    }

    const artwork = await Artwork.findByIdAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!artwork) {
        return res.status(404).json({ error: 'This is not the artwork you are looking for' })
    }

    res.status(200).json(artwork)
}

module.exports = {
    getArtworks,
    getArtwork,
    createArtwork,
    deleteArtwork,
    updateArtwork
}