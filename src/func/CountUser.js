const { ConnectPort } = require('../config/connectPort');
const { regexIdFingerPrint } = require('../utils/StringUtils');
const CountUser = (req, res) => {
    const send = (msg) =>{
        ConnectPort.gI().clearCallback();
        res.json({
            data: regexIdFingerPrint(msg)
        });
    }
    const callback = (data) => {
        send(data);
    };
    ConnectPort.gI().setCallback(callback);
    ConnectPort.gI().send(`/F/CFP`);
}
module.exports = { CountUser };