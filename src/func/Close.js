const { ConnectPort } = require('../config/connectPort');
const Close = (req, res) => {
    const {hang,cot,tang} = req.body;
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
    ConnectPort.gI().send(`/M/LOK/H${hang}/C${cot}/T${tang}`);
}
module.exports = { Close };