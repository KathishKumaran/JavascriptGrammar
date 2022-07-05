let promise = new Promise(function (resolve, reject) {
  resolve("kkr");
});

promise.then(
  function (successMessage) {
    //success handler function is invoked
    console.log(successMessage);
  },
  function (errorMessage) {
    console.log(errorMessage);
  }
);
