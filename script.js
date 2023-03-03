// Your JS goes here

function checkerBoard() {
  let board = document.createElement("div");
  let a = true;
  for (let i = 0; i < 63; i++) {
    if (a) {
      const square = createSquare();
      square.style.backgroundColor = "black";
      board.appendChild(square);
    } else if (!a) {
      const square = createSquare();
      square.style.backgroundColor = "red";
      board.appendChild(square);
    }
    a = !a;
  }
  return board;
}

function createSquare() {
  let square = document.createElement("div");
  square.style.width = "11.1%";
  square.style.paddingBottom = "11.1%";
  square.style.float = "left";
  return square;
}

document.body.append(checkerBoard());
