

const os = require('os');

let processorInfo = os.cpus();
console.log(processorInfo);

console.log('Platform:' + os.platform());
console.log('Architecture:' + os.arch());
console.log('Total Memory:' + os.totalmem());
console.log('Free Memory:' + os.freemem());
console.log('Home Directory:' + os.homedir());
console.log('Temp Directory:' + os.tmpdir());
console.log('Host Name:' + os.hostname());
console.log('Network Interfaces:' + os.networkInterfaces());
console.log('Machine:' + os.machine());
console.log('Uptime:' + os.uptime());
console.log('Relest:' + os.release());
console.log('User Info:' + os.userInfo());
console.log('Type:' + os.type());
console.log('Version:' + os.version());
console.log('Endianness:' + os.endianness());
console.log('Loaddavg:' + os.loadavg());
