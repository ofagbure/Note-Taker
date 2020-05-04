const util = require("util");
const fs = require("fs");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

let lastId = 0;

const API = {

   
    read() {
        return readFileAsync("db/db.json", "utf8");
    },

    
    write(note) {
        return writeFileAsync("db/db.json", JSON.stringify(note));
    },

    getNotes() {
        return this.read().then(notes => {
            let parsedNotes;

            try {
                parsedNotes = [].concat(JSON.parse(notes));
            } catch (err) {
                parsedNotes = [];
            }

            return parsedNotes;
        });
    },

    addNote(note) {
    
        const newNote = {title, text, id: ++this.lastId};

        
        return this.getNotes()
            .then(notes => [...notes, newNote])
            .then(updatedNotes => this.write(updatedNotes))
            .then(() => newNote);
    },

    removeNote(id) {

        return this.getNotes()
            .then(notes => notes.filter(note => note.id !== parseInt(id)))
            .then(filteredNotes => this.write(filteredNotes));
    }
};

module.exports = API;