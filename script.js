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;

// Your JS goes here

function checkerBoard() {
  let board = document.createElement("div");
  let a = true;
  for (let i = 0; i < 63; i++) {
    let color1 = Math.random() * 255;
    let color2 = Math.random() * 255;
    let color3 = Math.random() * 255;
    const square = createSquare();
    square.style.backgroundColor =
      "rgb(" + color1 + "," + color2 + "," + color3 + ")";
    board.appendChild(square);
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
