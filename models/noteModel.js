const mongoose = require("mongoose");

const notesSchema = {
    title: String,
    content: String
}

const Note = mongoose.model("susu", notesSchema);

module.exports = Note;