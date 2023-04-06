const connection = require("../config/connection");

const postNote = (userNote) => {
  const { title, body, tag } = userNote;
  const sql = {
    text:
      "INSERT INTO note (title, body) VALUES ($1,$2) RETURNING title, body;",
    values: [title, body]
  };
  return connection.query(sql);
};

module.exports = { postNote };
