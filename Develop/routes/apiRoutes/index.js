const fs = require('fs');
const router = require('express').Router();

//maybe not this?
//const { notes } = require('../../db/db.json');
const { createNewNote, filterByQuery } = require('../../lib/notes');

fs.readFile("db/db.json", (err, data) => {

    if (err) throw err;
    var notes = JSON.parse(data);


// get api/notes
router.get('/notes', (req, res) => {
    res.json(notes);
});

// post api/notes 
router.post('/notes', (req, res) => {
    //set id, how do i send id to database?
    let newNote = req.body;
    notes.push(newNote);
    

    const note = createNewNote(req.body, notes)
    res.json(note)
});

//delete api/notes
});


module.exports = router;