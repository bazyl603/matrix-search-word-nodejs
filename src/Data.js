class Data {
  data = [];
  R = 0;
  C = 0;
  constructor(data, num) {
    data.forEach(v => {
      this.data.push(v.split('', num));
    });
    this.R = num;
    this.C = num;
  }

  getData() {
    return this.data;
  }

  search2D(grid, row, col, word) {
    // For searching in all 8 direction
    let x = [-1, -1, -1, 0, 0, 1, 1, 1];
    let y = [-1, 0, 1, -1, 1, -1, 0, 1];

    if (grid[row][col] != word[0])
      return false;

    let len = word.length;
    for (let dir = 0; dir < 8; dir++) {

      let k, rd = row + x[dir],
        cd = col + y[dir];


      for (k = 1; k < len; k++) {

        if (rd >= this.R || rd < 0 || cd >= this.C || cd < 0)
          break;


        if (grid[rd][cd] != word[k])
          break;


        rd += x[dir];
        cd += y[dir];
      }

      if (k == len)
        return true;
    }
    return false;
  }
  patternSearch(word) {
    for (let row = 0; row < this.R; row++) {
      for (let col = 0; col < this.C; col++) {
        if (this.search2D(this.data, row, col, word))
          return `search in row: ${row} and col: ${col}`;
      }
    }
  }
}

module.exports = Data;