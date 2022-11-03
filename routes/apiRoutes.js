const router = require('express').Router();
const store = require('../db/store')
//reading db json converting into an array and how to view each note: API Rounte Section//
//going to db/db.json files
router.get("/notes", function(req, res) {
    // readFileAsync("./db/db.json", "utf8").then(function(data) {
      //  notes = [].concat(JSON.parse(data))
   // })

});

//push everything into an array, this allows user to overwrite previous notes and make a new file
router.post("/notes", function(req, res) {
  
 store.read().then((result)=>  {
    const noteFromDb = JSON.parse(result);
    const newNote = req.body;
    noteFromDb.push(newNote);
    return noteFromDb;
    }).then(note=>{
        store.write(note);
        res.send(note)
    })
    
});
 


 

module.exports = router;