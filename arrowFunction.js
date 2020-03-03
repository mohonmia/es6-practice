function add(x,y){
    const sum = x + y;
    return sum;
}
const result1 = add(23,4);
console.log(result1);
const summation = function (x,y){
    const sum = x + y;
    return sum;
}
const result1 = summation(23,4);
console.log(result1);

const exm0 = () => 44;
const fResutl = exm0();
console.log(fResutl);

const exm1 = num => num * 2;
const result2 = exm1(3);
console.log(result2);

const exm2 = (x,y) => x + y;
const result3 = exm2(3,1);
console.log(result3);

const mathBig = (x,y) => {
    const sum = x + y;
    const difference = x - y;
    const result = sum + difference;
    return result;
}
const total = mathBig(3,1);
console.log(total);