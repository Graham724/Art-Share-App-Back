const router = require('express').Router()

const {
    getArtworks,
    getArtwork,
    createArtwork,
    deleteArtwork,
    updateArtwork
} = require('../controllers/artworkController')

// GET all Artworks
router.get('/', getArtworks)

// GET a single Artwork
router.get('/:id', getArtwork)

// POST new Artwork
router.post('/', createArtwork)

// DELETE a Artwork
router.delete('/:id', deleteArtwork)

// UPDATE a Artwork
router.patch('/:id', updateArtwork)

module.exports = router