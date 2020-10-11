const router = require('express').Router();
let {
    createNewNote,
  } = require("../../lib/notes.js");
  
const notes = require('../../db/db');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    createNewNote(req.body, notes)
        .then( note => res.json(note));
});

module.exports  = router;


