const router = require('express').Router()
//reading db json converting into an array and how to view each note: API Rounte Section//
//check file path with tutor!! make sure I am writing this correctly should this say api slash notes??//
router.get("/api/notes", function(req, res) {
    // readFileAsync("./db/db.json", "utf8").then(function(data) {
      //  notes = [].concat(JSON.parse(data))
   // })
});

//push everything into an array, this allows user to overwrite previous notes and make a new file
router.post("/api/notes", function(req, res) {
    const note = req.body;
});
//    // readFileAsync("./db/db.json", "utf8").then(function(data) {
//         const notes = [].concat(JSON.parse(data));
//         note.id = notes.legnth +1
//         notes.push(note);
//         return notes
//     }).then(function(notes) {
//         writeFileAsync("./db/db.json", JSON.stringify(notes))
//         res.json(note);
//     })
// });

//attempting the delete command for extra credit!!
//app.delete("./public/notes/:id", function(req, res) {
 //   const scribbleDelete = parseInt(req.params.id);
 //   readFileAsync("./db/db.json", "utf8").then(function(data) {
  //      const notes = [].concat(JSON.parse(data));
  //      const scribbleNewNoteData = []
 //       for (let i = 0, i <note.legnth; i++) {
 //           if(scribbleDelete ! == notes[i].id) {
 //               scribbleNewNoteData.push(notes[i])
 //           }
 //       }
 //       return scribbleNewNoteData
 //   }).them(function(notes) {
//        writeFileAsync("./db/dn.json", JSON.stringify(notes))
 //       res.send('Your have created a masterpiece SUCCESS!!');
 //   })
//});


module.exports = router;