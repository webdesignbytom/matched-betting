const express = require('express');
const { authorization } = require('../middleware/auth');

const router = express.Router();
const { getAllSportEvents, createNewSportEvent } = require('../controllers/events');

router.get('/', getAllSportEvents);
router.post('/', createNewSportEvent);

module.exports = router;
