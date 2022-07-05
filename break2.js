let a = 0;
outer: for (i = 0; i < 5; i++) {
  inner: for (j = 0; j < 5; j++) {
    a++;
    if (i == 2) break inner;
  }
}
console.log(a);
