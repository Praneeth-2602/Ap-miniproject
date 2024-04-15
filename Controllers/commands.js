import { Scoreboard as scoreBoard } from '../Models/mongoose.js';
import { User as user } from '../Models/mongoose.js';

async function storeScore(req, res) {
    try {
        if (req.body && req.body.playerName && req.body.score && req.body.type) {
            await scoreBoard.create({
                playerName: req.body.playerName,
                score: req.body.score,
                type: req.body.type
            });
            res.send({ success: true });
        } else {
            res.send({ success: false });
        }
    } catch (error) {
        res.send({ success: false });
        console.log(error);
    }
}

async function displayPokeScore(req, res) {
    try {
        const scores = await scoreBoard.find({type:"pokemon"}).sort({ score: -1 }).limit(10);
        res.send(scores);
    } catch (error) {
        res.send({ success: false });
        console.log(error);
    }
}

async function displayTriviaScore(req, res) {
    try {
        const scores = await scoreBoard.find({type:"trivia"}).sort({ score: -1 }).limit(10);
        res.send(scores);
    } catch (error) {
        res.send({ success: false });
        console.log(error);
    }
}

async function createUser(req, res) {
    try {
        if (req.body && req.body.username && req.body.password) {
            await user.create({
                username: req.body.username,
                password: req.body.password,
            });
            res.send({ success: true });
        } else {
            res.send({ success: false });
        }
    } catch (error) {
        res.send({ success: false });
        console.log(error);
    }
}

async function verifyLogin(req, res) {
    try {
        if (req.body && req.body.username && req.body.password) {
            const userExists = await user.findOne({ username: req.body.username, password: req.body.password });
            if (userExists) {
                res.send({ success: true });
            } else {
                res.send({ success: false });
            }
        }
    }
    catch (error) {
        res.send({ success: false });
        console.log(error);
    }
}

export { storeScore, displayPokeScore, displayTriviaScore, createUser, verifyLogin };