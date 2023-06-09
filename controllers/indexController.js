const {validationResult} = require("express-validator");
const Word = require("../models/Word");

const getHome = async (req, res, next) => {
    const words = await Word.findAll();
    res.status(200).json(words);
};

const postAddWord = async (req, res, next) => {
    const {word, meaning} = req.body;
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        await Word.create({word, meaning});
        res.status(201).json({message: "Successfully created"});
    } else {
        res.status(400).json({message: "Invalid inputs"});
    }
};

const postDeleteWord = async (req, res, next) => {
    await Word.destroy({where: {id: req.body.id}});
    res.status(200).json({message: "successfully was deleted"});
};

const postEditWord = async (req, res, next) => {
    const {id, word, meaning} = req.body;
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        await Word.update({id, word, meaning}, {where: {id}});
        res.status(200).json({message: "successfully was edited"});
    } else {
        res.status(400).json({message: "Invalid Inputs"});
    }
};

exports.getHome = getHome;
exports.postAddWord = postAddWord;
exports.postDeleteWord = postDeleteWord;
exports.postEditWord = postEditWord;


