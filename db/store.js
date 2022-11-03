const fs = require('fs');
const util = require('util');


//andding asynchonous processes//
const readFileAsync = util.promisify(fs.readfile);
const writeFileAsync = util.promisify(fs.writeFile);


class Store {
//read and write function
read() {
    return readFileAsync('db/db.json', 'utf8')
};
write() {
    return writeFileAsync('db/db.json', JSON.stringify(note))
};

//get notes function

//add note function

//delete note function?
}

module.exports = new Store();