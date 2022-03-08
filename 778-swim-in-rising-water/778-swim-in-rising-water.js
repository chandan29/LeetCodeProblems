/**
 * @param {number[][]} grid
 * @return {number}
 */

var swimInWater = function(grid) {
    const H = grid.length;
  const W = H && grid[0].length;
  const pq = new MinPriorityQueue({
      compare:(a, b) => grid[a[0]][a[1]]-grid[b[0]][b[1]]
  });
  const seen = [...Array(H)].map(r => Array(W).fill(false));
  let max = 0;
  
  pq.enqueue([0,0]);
  seen[0][0] = true;
  while (true) {
    const [r, c] = pq.dequeue();
    max = Math.max(max, grid[r][c]);
    if (r === H-1 && c === W-1) {
      return max;
    }
    
    for (let [dr, dc] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
      const rr = r+dr;
      const cc = c+dc;
      if (rr < 0 || cc < 0 || rr >= H || cc >= W || seen[rr][cc]) continue;
      seen[rr][cc] = true;
      pq.enqueue([rr, cc]);
    }
  }  
};

