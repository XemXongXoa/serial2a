const { ConnectPort } = require('../config/connectPort');
const StatusDevice = (req, res) => {
    const send = (msg) =>{
        ConnectPort.gI().clearCallback();
        res.json({
            data: msg
        });
    }
    const callback = (data) => {
        send(data);
    };
    ConnectPort.gI().setCallback(callback);
    ConnectPort.gI().send(`/FCK`);
}
module.exports = { StatusDevice };