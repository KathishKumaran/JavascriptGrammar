let a = "ramkumar";
for (value of a) console.log(value);

let b = [1, 2, 4, 57];
for (value of b) console.log(value);

let c = { x: 1, y: 2, z: 3 };
for (key of Object.keys(c)) console.log(key);
for (value of Object.values(c)) console.log(value);
for (entry of Object.entries(c)) console.log(entry);

// for(value of c)
// console.log(value); //Error
