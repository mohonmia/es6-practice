function add(num1, num2 = 6){
    return num1 + num2;
}
const total = add(23);
console.log(total);

function createUser(name, age = 18){
    const user = {};
    user.name = name;
    user.age = age;
    return user;
}
 const result = createUser(20);
 console.log(result);