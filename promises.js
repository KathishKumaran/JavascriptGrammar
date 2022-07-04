let promise = new Promise(function (resolve, reject) {
    const x = "kkr";
    const y = "kkr";
    if (x === y) {
      resolve();
    } else {
      reject();
    }
  });
  promise
    .then(function () {
      console.log("Success, You are a kkr");
    })
    .catch(function () {
      console.log("Some error has occurred");
    });
  