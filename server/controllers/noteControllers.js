const { getNote } = require("../database/queries/getNote");
const { postNote } = require("../database/queries/postNote");

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
  console.log(userNote);

  postNote(userNote)
    .then((data) => {
      res.status(201).json({
        data: data.rows
      });
    })
    .catch((err) => console.log(err));
};

module.exports = {
  getNoteControllers,
  postNoteController
};
