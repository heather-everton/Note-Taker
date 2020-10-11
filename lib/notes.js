const fs = require("fs");
const path = require("path");
const id = 1 

function createNewNote(body, notesArray) {
    const note = body;
    let {title, text } = body;
    if (!title || typeof title !== 'string') {
        throw new Error("Please enter a Note Title");;
      }
      if (!text || typeof text !== 'string') {
          throw new Error("Please enter a Note Text");;
      } else {
          let newNote = {title, text, id:id++}
          notesArray.push(newNote);
          fs.writeFileSync(
            path.join(__dirname, '../db/db.json'),
            JSON.stringify({notes: notesArray}, null, 2)
          );
          return newNote;
      }
}
  


module.exports = {
    createNewNote
};
  