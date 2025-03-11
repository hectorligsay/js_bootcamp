const size = 8;

let space = " ";
let pound = "#";

for (let i = 0; i < size; i++) {
  let row = "";
  for (let j = 0; j < size; j++) {
    if ((i + j) % 2 == 0) {
      row += space;
    } else {
      row += pound;
    }

    if (j == size - 1) {
      console.log(row);
    }
  }
}
