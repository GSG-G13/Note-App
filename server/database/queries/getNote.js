const connection = require('../config/connection');

const getNote = () => {
  return connection.query(`SELECT * FROM note;`);
}

module.exports = {
  getNote
};