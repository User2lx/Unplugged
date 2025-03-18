const WebSocketServer = require('ws').Server;
const wss = new WebSocketServer({ port: 3000 });

const users = {
    'ricki': '012',
    'Kristopher': '2012',
    'Ramzy': '747',
    'Kyler': '312'
};

const roles = {
    'ricki': 'owner',
    'Kristopher': 'owner',
    'Ramzy': 'user',
    'Kyler': 'user'
};

let clients = [];

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        const msg = JSON.parse(message);

        if (msg.type === 'login') {
            const { username, password } = msg;
            if (users ▋
