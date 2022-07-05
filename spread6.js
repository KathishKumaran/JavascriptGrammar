//In Object literals
const myNames = { fname: "ram", lname: "kumar" };
const bio = { ...myNames, fname: "praveen", runs: "yuvaraj" };

console.log(bio);
