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

  class SmileyFace {
    constructor(x, y) {
      this.x = x;
      this.y = y; 
      this.isBlack = (x + y) % 2 == 1; 
    }
}

show() {
    let smileyColor = this.isBlack ? 0 : 250;
    fill(smileyColor);
    ellipse(this.x * cellSize + cellSize / 2, this.y * cellSize + cellSize / 2, 50); 
    fill(255-smileyColor); 
    arc(this.x * cellSize + cellSize / 2, this.y * cellSize + cellSize / 2 + 10, 25, 15, 0, PI);

    fill(255-smileyColor); 
    ellipse(this.x * cellSize + cellSize / 3.1, this.y * cellSize + cellSize / 2.5, 15); 
    ellipse(this.x * cellSize + cellSize / 1.5, this.y * cellSize + cellSize / 2.5, 15); 
    fill(smileyColor); 
    
 
  ellipse(this.x * cellSize + cellSize / 3.5, this.y * cellSize + cellSize / 2.5, 4); 
  ellipse(this.x * cellSize + cellSize / 1.6, this.y * cellSize + cellSize / 2.5, 4); 
  fill(255-smileyColor);
  ellipse(this.x * cellSize + cellSize / 2, this.y * cellSize + cellSize / 2 + 5, 10, 5);


}
