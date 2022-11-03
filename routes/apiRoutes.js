const router = require('express').Router()
//reading db json converting into an array and how to view each note: API Rounte Section//
//going to db/db.json files
router.get("/api/notes", function(req, res) {
    // readFileAsync("./db/db.json", "utf8").then(function(data) {
      //  notes = [].concat(JSON.parse(data))
   // })
});

//push everything into an array, this allows user to overwrite previous notes and make a new file
router.post("/api/notes", function(req, res) {
    const note = req.body;
});



module.exports = router;