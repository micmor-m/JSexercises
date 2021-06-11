// A function that accepts an integer N > 0 and return a N x N spiral matrix

function spiral(n) {
  const spiralArr = [];
  //Create spiralArr with all null
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
    startRow++;
    // Loop last column
    for (let i = startRow; i < endRow; i++) {
      spiralArr[i][endColumn] = value;
      value++;
    }
    endColumn--;
    // Loop last row
    for (let i = endColumn; i >= startColumn; i--) {
      spiralArr[endRow - 1][i] = value;
      value++;
    }
    endRow--;
    // Loop first column
    for (let i = endRow - 1; i >= startRow; i--) {
      spiralArr[i][startColumn] = value;
      value++;
    }
    startColumn++;
  }

  return spiralArr;
}

console.log(spiral(10));
