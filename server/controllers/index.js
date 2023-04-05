const express = require('express');
const { getNoteControllers }= require('./noteControllers');
const router = express.Router();

router.get('/notes', getNoteControllers)

module.exports=router