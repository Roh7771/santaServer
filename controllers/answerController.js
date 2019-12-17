const Answer = require("./../models/answerModel");

exports.getAnswers = async (req, res) => {
  try {
    const answers = await Answer.find();
    res.status(200).json({
      status: "success",
      results: answers.length,
      data: {
        answers
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err
    });
  }
};

exports.createAnswer = async (req, res) => {
  try {
    console.log(req.body);
    const newAnswer = await Answer.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        answer: newAnswer
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err
    });
  }
};
