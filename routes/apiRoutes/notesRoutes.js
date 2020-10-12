const router = require('express').Router();

const {
    createNewNote,
  } = require("../../lib/notes.js");
  
const { notes } = require('../../db/db');

router.get('/notes', (req, res) => {
    res.json(notes);
});


router.post('/notes', (req, res) => {
    const note = createNewNote(req.body, notes);
    res.json(note);
});
  
module.exports  = router;


