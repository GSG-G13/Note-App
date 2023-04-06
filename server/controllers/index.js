const express = require("express");
const { getNoteControllers, postNoteController } = require("./noteControllers");
const router = express.Router();

router.get("/notes", getNoteControllers);
router.post("/create-note", postNoteController);

module.exports = router;
