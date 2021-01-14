const router = require('express').Router();

//maybe not this?
const { notes } = require('../../db/db.json')

// get api/notes
router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results)
});

// post api/notes 
router.post('/notes', (req, res) => {
    //set id, how do i send id to database?
    req.body.id = notes.length.toString();

    let newNote = res.body;
    notes.push(newNote);
    return notes;
});

//delete api/notes



module.exports = router;
