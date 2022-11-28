const { ConnectPort } = require('../config/connectPort');
const { regexIdFingerPrint } = require('../utils/StringUtils');
const RequestQRCode = (req, res) => {
    const send = (msg) =>{
        ConnectPort.gI().clearCallback();
        res.json({
            data: msg.replace("/RQR/", "").replace("/CPL", "")
        });
    }
    const callback = (data) => {
        send(data);
    };
    ConnectPort.gI().setCallback(callback);
    ConnectPort.gI().send(`/BQR`);
}
module.exports = { RequestQRCode };