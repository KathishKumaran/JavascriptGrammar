function eventLoop() {
  console.log("Start");

  setTimeout(function cb() {
    console.log("First");
  });

  console.log("Message");

  setTimeout(function cb1() {
    console.log("Second");
  }, 0);

  console.log("End");
}
eventLoop();
