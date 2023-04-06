const { getNote } = require("../database/queries/getNote");
const { postNote, getPostNote } = require("../database/queries/postNote");

const getNoteControllers = (req, res) => {
  getNote()
    .then((result) => {
      res.json(result.rows);
    })
    .catch((err) => {
      console.log(err);
    });
};

const postNoteController = (req, res) => {
  const userNote = req.body;

  postNote(userNote);
  getPostNote().then((result) => {res.status(201).json(result.rows)});
};

module.exports = {
  getNoteControllers,
  postNoteController,
};
