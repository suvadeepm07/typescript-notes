# Chap 8 | Interfaces

**Q1**: What are interfaces ? 

**Solution**:

*interfaces are used to create reusable , modular types that describe the **shapes of objects***

Details:

```ts
//An interface
interface Person{
    name:string;
    age:number;
}

//Use the type alias in the annotation
const sayHappyBirthday =(person:Person)=>{
    return `Hey ${person.name} , congrats on turning ${person.age}`
}

sayHappyBirthday({name:"Jerry",age:42})
```

**Q2**: Explain the readonly and optional interface properties ? 

**Solution**:

| Property | What it does ?                                               |
| -------- | ------------------------------------------------------------ |
| optional | The property may exist or may not exist                      |
| readonly | readonly property can be set during creation but it cannot be changed later |

**Q3**: What is declaration merging ? 

**Solution**: 

*Interfaces can be **reopened**.This is called **declaration merging**.*

Details : 

```ts
interface Person {
  name: string;
}

interface Person {
  age: number;
}

//TS combines both declarations 
const person: Person = {
  name: "Thomas",
  age: 30
};
```

**Q4**:In TypeScript, what does `interface B extends A` mean?

*extends means the new interface gets all properties/methods from the old interface plus its own properties/methods*

**Q5**:How can an interface extend multiple interfaces ? 

**Solution**: 

- An interface can extend multiple interfaces using comma

Details: 

```ts
interface Human {
  name: string;
}

interface Employee {
  readonly id: number;
  email: string;
}
interface Engineer extends Human, Employee {
  level: string;
  languages: string[];
}
const pierre: Engineer = {
  name: "Pierre",
  id: 123,
  email: "pierre@gmail.com",
  level: "senior",
  languages: ["JS", "Python"]
};
```

