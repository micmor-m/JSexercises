function steps(n) {
  if (n <= 0) {
    return -1;
  }

  for (let i = 0; i < n; i++) {
    console.log(`'${"#".repeat(i + 1)}${" ".repeat(n - i - 1)}'`);
  }
}

steps(1);
steps(2);
steps(3);
steps(4);
