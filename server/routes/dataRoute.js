const express = require('express');

const router = express.Router();

const mealsController = require('../controllers/dataController')

router.use(express.json())


router.get('/list', mealsController.handleListMeals)

module.exports = router