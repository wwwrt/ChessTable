function setup() {
    createCanvas(480, 480);
    for (let i = 0; i < 16; i++) {
        // creem 16 fețe zâmbitoare cu poziții aleatoare
        let smileyFace = new SmileyFace(floor(random(8)), floor(random(8)));
        smileyFaces.push(smileyFace);
      }
}