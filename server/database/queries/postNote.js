const connection = require("../config/connection");

const postNote = (userNote) => {
  const { title, body, tag } = userNote;
  const sql = {
    text: "INSERT INTO note (title, body, tag_id) VALUES ($1,$2, $3)",
    values: [title, body, tag],
  };
  return connection.query(sql);
};

const getPostNote = () => {
  const sql = {
    text:
      "select note.title,note.body,tags.name from note join tags on tags.id = note.tag_id",
  };
  return connection.query(sql);
};

module.exports = { postNote, getPostNote };
