const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");
class ConnectPort {
  static instance = null;
  static gI() {
    if (this.instance == null) {
      this.instance = new ConnectPort();
    }
    return this.instance;
  }
  setCallback(callback) {
	this.callback = callback;
  }

  clearCallback() {
	this.callback = () => {};
  }
  constructor() {
	this.callback = () => {};
    this.port = new SerialPort(
      { path: process.env.COMPORT, baudRate: Number(process.env.BAUDRATE) },
      (err) => {
        if (err) {
          console.log(err);
        }
      }
    );
	this.parser = this.port.pipe(new ReadlineParser({
		delimiter: '\r\n'
	}));
	this.parser.on('data',(data)=>{
		this.callback(data);
	})
  }
  send(data) {
	this.port.write(data);
  }
}
module.exports = { ConnectPort };
