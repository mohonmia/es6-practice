const numers1 = [2,31,42,42,52,55,12,56];
const numers2 = [23,512,56,23,67,35,31];
const numers3 = [56,30,29,034,532,59];

// const allNumbers = numers1.concat(numers2).concat(numers3);
// console.log(allNumbers);

const allNumbers = [...numers1,...numers2,...numers3];
console.log(typeof allNumbers);

const maxNumber = [23,53,123];
const result = Math.max(...maxNumber);
console.log(result);