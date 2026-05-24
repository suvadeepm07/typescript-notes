// A Type alias 
type Person ={
    name:string ;
    age:number
}

const sayHappyBirthday =(person:Person)=>{
    return `Hey ${person.name} congrats on turning ${person.age}!`
}

sayHappyBirthday({name:"Jerry",age:42})