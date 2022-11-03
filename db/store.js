const fs = require('fs');
const util = require('util');


//andding asynchonous processes//
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);


class Store {
//read and write function
read() {
    return readFileAsync('db/db.json', 'utf8')
};
write(note) {
    return writeFileAsync('db/db.json', JSON.stringify(note))
};


}

module.exports = new Store();