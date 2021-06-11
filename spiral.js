// A function that accepts an integer N > 0 and return a N x N spiral matrix

function spiral(n){
  const spiralArr= [];
  const singleArr = [];
  // Create singleArray with all 0
  for (let i = 0; i < n; i++) {
    singleArr.push(0)
  }
  //Create spiralArr with all 0
  for (let i = 0; i < n; i++) {
    spiralArr.push([...singleArr])
  }
  
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0; 
  let endRow = n;
  let value = 1;

  while(startColumn <= endColumn && startRow <= endRow){
    // Loop first row
    for (let i = startColumn; i <= endColumn; i++){
      spiralArr[startRow][i] = value
      value++;
    }
    startRow++;
    console.log(spiralArr)
    console.log("Outside", value)
    // Loop last column
    for (let i = startRow; i < endRow; i++){
      console.log("Inside", value)
      spiralArr[i][endColumn] = value
      value++;
    }
    endColumn--;
    endRow--;
    console.log(spiralArr)
    // Loop last row
    for (let i = endColumn; i >= startColumn; i--){
      spiralArr[endRow][i] = value
      value++;
    }
    endRow--;
    console.log("startColumn", startColumn);
    console.log(spiralArr)
    // Loop first column
    for (let i = endRow ; i >= startRow; i--){
      spiralArr[i][startColumn] = value
      value++;
    }
    startColumn++;
  }

 return spiralArr;
}


console.log(spiral(4))