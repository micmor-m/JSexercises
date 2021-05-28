function pyramid(n) {
  if (n <= 0) {
    return -1;
  }

  for (let i = 0; i < n; i++) {
    console.log(
      `'${" ".repeat(n - i - 1)}${"#".repeat((i + 1) * 2 - 1)}${" ".repeat(
        n - i - 1
      )}'`
    );
  }
}

pyramid(1);
pyramid(2);
pyramid(3);
pyramid(4);
pyramid(10);
