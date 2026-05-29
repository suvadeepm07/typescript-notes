class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greet(){
        return `Hello ${this.name}!`
    }
}

//Using our blueprint to make a real person 
const jimmy = new Person("Jimmy",25)

//Using some methods that our new object has based on the blueprint
jimmy.greet() // Hello Jimmy