// A function that accepts an integer N > 0 and return a N x N spiral matrix

function spiral(n) {
  const spiralArr = [];
  // const singleArr = [];
  // // Create singleArray with all 0
  // for (let i = 0; i < n; i++) {
  //   singleArr.push(0);
  // }
  //Create spiralArr with all 0
  for (let i = 0; i < n; i++) {
    spiralArr.push([]);
  }

  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n;
  let value = 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    // Loop first row
    for (let i = startColumn; i <= endColumn; i++) {
      spiralArr[startRow][i] = value;
      value++;
    }
    if (value > n * n) {
      return spiralArr;
    }
    startRow++;
    // Loop last column
    for (let i = startRow; i < endRow; i++) {
      spiralArr[i][endColumn] = value;
      value++;
    }
    if (value > n * n) {
      return spiralArr;
    }
    endColumn--;
    // Loop last row
    for (let i = endColumn; i >= startColumn; i--) {
      spiralArr[endRow - 1][i] = value;
      value++;
    }
    if (value > n * n) {
      return spiralArr;
    }
    endRow--;
    // Loop first column
    for (let i = endRow - 1; i >= startRow; i--) {
      spiralArr[i][startColumn] = value;
      value++;
    }
    if (value > n * n) {
      return spiralArr;
    }
    startColumn++;
  }

  return spiralArr;
}

console.log(spiral(10));
