// const countVowel = (word)=> {
//   let count = 0;
//   for (const char of word) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//       console.log(char);
//     }
//   }
//   console.log(count);
// }
// countVowel("aeiou");

// let num = [1, 2, 3, 4, 5, 6, 7];

// num.forEach((num, ind) => {
//   let result = num * num;
//   console.log(result, ind);
// });

// let marks = [89, 99, 92, 56, 14, 63, 95];

// const choose = marks.filter((h) => {
//   return h > 90;
// });
// console.log(choose);

// function makeArr(vel) {
//   let arr = [];
//   let newArr = arr.push(vel);
//   console.log(newArr[vel]);
// }
// makeArr("pawan");
let aar = [];

function makeArr(n) {
  for (let i = 1; i < n + 1; i++) {
    aar[i] = i;
  }
  return console.log(aar);
}
makeArr(5);
let sum = aar.reduce((res, curr) => {
  return res + curr;
});

console.log(sum);
