function setup() {
    createCanvas(480, 480);
    for (let i = 0; i < 16; i++) {
        // creem 16 fețe zâmbitoare cu poziții aleatoare
        let smileyFace = new SmileyFace(floor(random(8)), floor(random(8)));
        smileyFaces.push(smileyFace);
      }
}

function draw() {
    background(255); 
    drawChessboard();
    for (let i = 0; i < smileyFaces.length; i++) {
      smileyFaces[i].show(); 
    }
  }

  function drawChessboard() {
    let colors = [255, 200]; 
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        let colorIndex = (i + j) % 2; 
        fill(colors[colorIndex]);
        rect(i * cellSize, j * cellSize, cellSize, cellSize);
      }
    }
  }