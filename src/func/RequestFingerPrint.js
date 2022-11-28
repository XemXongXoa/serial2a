const { ConnectPort } = require('../config/connectPort');
const { regexIdFingerPrint } = require('../utils/StringUtils');
const RequestFingerPrint = (req, res) => {
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
    ConnectPort.gI().send(`/F/RFP`);
}
module.exports = { RequestFingerPrint };