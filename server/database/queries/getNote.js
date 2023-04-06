const connection = require("../config/connection");

const getNote = () => {
  return connection.query(
    `SELECT * FROM note INNER JOIN tags on note.id = tags.note_id;`
  );
};

module.exports = {
  getNote
};
