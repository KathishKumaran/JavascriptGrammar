let count = 0;
let interval = setInterval(function () {
  count += 1;

  if (count === 5) {
    clearInterval(interval);
  }
  console.log("Hello World");
}, 2000);
