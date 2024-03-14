let tab = 56;
for (i = 0; i <= 100; i++) {
  let table = tab * i;
  console.log("56*", i, "=", table);
}

let number = 1000;

for (i = 0; i<=1000; i++) {
  number--;
  console.log(number);
}

let rs = 1;
for (i = 0; i<= 31; i++) {
  rs = rs * 2;
  console.log(rs);
}

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log("Even Number");
  } else if (i % 3 === 0) {
    console.log("Odd number");
  } else {
    console.log(i);
  }
}
