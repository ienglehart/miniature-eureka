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
    //set id
    req.body.id = animals.length.toString();

    const newNote = createNewNote(req.body, notes);
    res.json(note);
});

//delete api/notes



module.exports = router;
