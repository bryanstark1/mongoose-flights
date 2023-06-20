const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights')

// All routes start with /flights

// GET /flights
router.get('/', flightsCtrl.index);
// GET /flights/new
router.get('/new', flightsCtrl.new);

module.exports = router;
