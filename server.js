const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost/poll', { useNewUrlParser: true, useUnifiedTopology: true });

const pollSchema = new mongoose.Schema({
    option: String,
    votes: { type: Number, default: 0 }
});

const Poll = mongoose.model('Poll', pollSchema);

const options = ['mario', 'scratch', 'emulator', 'redesign'];

app.get('/poll/results', async (req, res) => {
    const results = {};
    for (const option of options) {
        const poll = await Poll.findOne({ option });
        results[option] = poll ? poll.votes : 0;
    }
    res.json(results);
});

app.post('/poll/vote', async (req, res) => {
    const { option } = req.body;
    if (!options.includes(option)) {
        return res.json({ success: false, message: 'Invalid option' });
    }

    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    const hasVoted = await Poll.findOne({ ip });
    if (hasVoted) {
        return res.json({ success: false, message: 'You have already voted' });
    }

    await Poll.updateOne({ option }, { $inc: { votes: 1 } }, { upsert: true });
    await new Poll({ ip, option }).save();

    const results = {};
    for (const opt of options) {
        const poll = await Poll.findOne({ option: opt });
        results[opt] = poll ? poll.votes : 0;
    }

    res.json({ success: true, results });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
