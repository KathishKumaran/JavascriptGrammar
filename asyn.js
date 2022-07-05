async function a() {
  return "first";
}
async function b() {
  return Promise.resolve("second");
}
a().then(console.log);
b().then(console.log);
