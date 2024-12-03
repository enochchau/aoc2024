let fs = require("fs");
let readline = require("readline");

let h = fs.createReadStream("./inputs/d2.txt");
let rl = readline.createInterface({
  input: h,
});

(async () => {
  let solution = 0;
  for await (let line of rl) {
    let a = line
      .split(" ")
      .filter((v) => !!v)
      .map((v) => parseInt(v));
    let safe = true;
    let lastDiff = 0;
    for (let i = 0; i < a.length - 1; i++) {
      let c = a[i];
      let n = a[i + 1];
      let diff = c - n;
      let abs = Math.abs(diff);
      if (
        !(
          abs >= 1 &&
          abs <= 3 &&
          ((diff < 0 && lastDiff < 0) || (diff > 0 && lastDiff > 0) || i === 0)
        )
      ) {
        safe = false;
        break;
      }
      lastDiff = diff;
    }
    if (safe) {
      solution++;
    }
  }
  console.log(solution);
})();
