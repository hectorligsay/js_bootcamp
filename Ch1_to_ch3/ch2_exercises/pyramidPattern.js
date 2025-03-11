const levels = 4;
let space = " ";
let pound = "#";
let pyramid = "";

for (let row = 0; row < levels; row++) {
  // using -1 means that the number of spaces decreases
  spaceNumber = levels - row - 1;
  // using +1 means the number of pounds increases
  poundNumber = 2 * row + 1;

  for (let s = 0; s < spaceNumber; s++) {
    pyramid += space;
  }

  for (let p = 0; p < poundNumber; p++) {
    pyramid += pound;
  }

  console.log(pyramid);
  pyramid = "";
}
