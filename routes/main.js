const express = require('express');

const mainController = require('../controllers/main')

const router = express.Router();

router.get('/data', mainController.getData);

router.post('/data',mainController.postData);

router.get('/data/:productId', mainController.getSingleData);

//router.delete('/data/:productId', )

router.patch('/data/:productId', mainController.patchData);

module.exports = router;