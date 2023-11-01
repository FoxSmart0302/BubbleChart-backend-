const passport = require('passport');
const express = require('express');
const { escapeHTMLMiddleware } = require('../utils');
const router = express.Router();
const postgresController = require('../controllers/postgresController');

router.post("/items", postgresController.getBubbles);

module.exports = router;