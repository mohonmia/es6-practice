class Parent{
    constructor(){
        this.fatherName = "Zaker Ahamed";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name
    }
    getFullName(){
        return this.name + " " +this.fatherName;
    }
}

const baby1 = new Child("mohon");
const baby2 = new Child("mia");
console.log(baby1.getFullName());
console.log(baby2.getFullName());