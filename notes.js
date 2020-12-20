const chalk = require('chalk');
const fs = require('fs');

const addNotes = (title, body) => {
  const notes = loadNotes();

  const dublicatenote = notes.find((note) => note.title === title);

  if (!dublicatenote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse('new note added'));
  } else {
    console.log(chalk.red.inverse('note tile taken'));
  }
};
const saveNotes = (notes) => {
  const JSONdata = JSON.stringify(notes);
  fs.writeFileSync('notes.json', JSONdata);
};
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const JSONdata = dataBuffer.toString();
    return JSON.parse(JSONdata);
  } catch (e) {
    return [];
  }
};
const removeNotes = (title) => {
  const notes = loadNotes();
  const rem = notes.filter((note) => note.title !== title);

  if (notes.length > rem.length) {
    console.log(chalk.green.inverse('note is removed'));
    saveNotes(rem);
  } else {
    console.log(chalk.red.inverse('no note found!'));
  }
};
const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.blue.inverse('your notes'));
  notes.forEach((note) => {
    console.log(note.title);
  });
};
const readNotes = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red('error'));
  }
};
module.exports = {
  addNotes: addNotes,
  removeNotes: removeNotes,
  listNotes: listNotes,
  readNotes: readNotes,
};
