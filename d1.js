let fs = require("fs");
let readline = require("readline");

let h = fs.createReadStream("./inputs/d1.txt");
let rl = readline.createInterface({
  input: h,
});

(async () => {
  let a1 = [];
  let a2 = [];
  for await (let line of rl) {
    let [, m1, m2] = line.match(/(\d*)\s*(\d*)/);
    a1.push(parseInt(m1));
    a2.push(parseInt(m2));
  }

  // a1.sort();
  // a2.sort();
  // let solution = 0;
  // for (let i = 0; i < a1.length; i++) {
  //   let v = Math.max(a1[i], a2[i]) - Math.min(a1[i], a2[i]);
  //   solution += v;
  // }
  // console.log(solution);

  let m2 = {};
  for (let n of a2) {
    if (m2[n]) {
      m2[n] += 1
    } else {
      m2[n] = 1;
    }
  }

  let solution = 0;
  for(let n of a1) {
    solution += n * (m2[n] ?? 0)
  }
  console.log(solution)
})();
