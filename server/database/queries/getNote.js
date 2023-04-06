const connection = require("../config/connection");

const getNote = () => {
  return connection.query(
    `SELECT * FROM note LEFT JOIN tags on note.tag_id = tags.id;`
  );
};

module.exports = {
  getNote,
};
