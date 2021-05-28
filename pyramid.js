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

function pyramidV1(n) {
  if (n <= 0) {
    return -1;
  }

  for (let i = 0; i < n; i++) {
    const totCh = n * 2 - 1;
    let str = "";
    for (let j = 0; j < totCh; j++) {
      const numOfPound = i * 2 + 1;
      const strPound = Math.floor(totCh / 2) - (numOfPound - 1) / 2;
      const stpPound = Math.floor(totCh / 2) + (numOfPound - 1) / 2;
      if (j >= strPound && j <= stpPound) {
        str += "#";
      } else {
        str += " ";
      }
    }
    console.log(str);
  }
}

pyramidV1(1);
pyramidV1(2);
pyramidV1(3);
pyramidV1(4);
pyramidV1(10);
