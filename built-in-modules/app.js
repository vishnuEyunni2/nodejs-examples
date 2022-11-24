const os = require('os');

// info about current user
const user = (os.userInfo())

// method returns the system uptime in seconds

const uptime = os.uptime();
const minutes = uptime / 60;
const hours = minutes / 60;

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem()
}

console.log(`The system uptime is ${Math.floor(hours)} ${hours > 1 ? "hrs" : "hr"} ${minutes} mins`)
console.log(user)
console.log(currentOS)