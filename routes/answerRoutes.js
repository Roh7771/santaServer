const express = require('express');
const answerController = require('./../controllers/answerController')

const router = express.Router();

router
  .route('/')
  .get(answerController.getAnswers)
  .post(answerController.createAnswer);

module.exports = router;