const path = require('path');
const router = require('express').Router;
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

//router.get("./", function(req, res) {
 //   res.sendFile(path.join(__dirname, "../public/index.html"));
//});

router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

//make sure this is the right code to export file
module.exports = router;