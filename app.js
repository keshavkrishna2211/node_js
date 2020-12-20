const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');
yargs.version('1.1.0');
//adding a note
yargs.command({
  command: 'add',
  describe: 'Add a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'body property',
      demandOption: 'true',
      type: 'string',
    },
  },
  handler(argv) {
    notes.addNotes(argv.title, argv.body);
  },
});
//removing a note
yargs.command({
  command: 'remove',
  describe: 'remove a note',
  builder: {
    title: {
      describe: 'remove note',
      demandOption: 'true',
      type: 'string',
    },
  },

  handler(argv) {
    notes.removeNotes(argv.title);
  },
});
//listing a note
yargs.command({
  command: 'list',
  describe: ' listing notes',
  handler() {
    notes.listNotes();
  },
});
//read a note
yargs.command({
  command: 'read',
  describe: 'read  a note',
  builder: {
    title: {
      decribe: 'read command',
      demandOption: 'true',
      type: 'string',
    },
  },
  handler(argv) {
    notes.readNotes(argv.title);
  },
});

yargs.parse();
