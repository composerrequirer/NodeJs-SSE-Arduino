let { SerialPort } = require('serialport');
let port = new SerialPort({
    path: "COM3",
    baudRate: 9600,
    autoOpen: true
});
module.exports = async (req, res) => {
    // Setting sse:
    res.set({
        'Cache-Control': 'no-cache',
        'Content-Type': 'text/event-stream',
        'Connection': 'keep-alive',
    });
    // res.flushHeaders();
    res.flushHeaders();
    // Tell the client to retry every 10 seconds if connectivity is lost
    res.write('retry: 10000\n\n');
    // From here we can send sse events with res.write(...);
    port.on('data', (stringTemp) => {
        res.write(`data: ${stringTemp.toString()} \n\n`);
    });
};
