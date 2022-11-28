const { ConnectPort } = require('../config/connectPort');
const { regexIdFingerPrint } = require('../utils/StringUtils');
const DeleteAllFingerPrint = (req, res) => {
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
    ConnectPort.gI().send(`/F/LFP`);
}
module.exports = { DeleteAllFingerPrint };