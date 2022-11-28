const { ConnectPort } = require('./config/connectPort');
const dotenv = require('dotenv');
const { Open } = require('./func/Open');
const { Close } = require('./func/Close');
const { RequestFingerPrint } = require('./func/RequestFingerPrint');
const { CreateFingerPrint } = require('./func/CreateFingerPrint');
const { DeleteAllFingerPrint } = require('./func/DeleteAllFingerPrint');
const { CountUser } = require('./func/CountUser');
const { StatusDevice } = require('./func/StatusDevice');
const express = require('express')
const cors = require('cors')
const app = express()
dotenv.config();
ConnectPort.gI();
app.use(cors(corsConfig))
app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
})
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// mở ô
app.post('/open', Open);
// đóng ô
app.post('/close', Close);
// yêu cầu lấy vân tay
app.get('/fingerprint',RequestFingerPrint)
// đăng ký vân tay mới
app.post('/fingerprint',CreateFingerPrint)
// xóa toàn bộ vân tay
app.delete('/fingerprint',DeleteAllFingerPrint)
// đếm user
app.get('/count', CountUser)
// trạng thái thiết bị
app.get('/status',StatusDevice)
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})
