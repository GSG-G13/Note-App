const { getNote } = require('../database/queries/getNote');

const getNoteControllers = (req, res) => {
  getNote()

    .then((result)=> {
      
      console.log(result)
      res.json(result.rows)
    }
      )
    .then(()=> res.redirect('/'))
    .catch(() => { console.log("server error") });

}

module.exports={
  getNoteControllers
}