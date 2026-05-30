# Interfaces

## Interfaces 

- Interfaces serve almost the exact same purpose as type aliases

- We can use them to create reusable , modular types that describe the **shapes of objects**

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

  

## Readonly and Optional Interface Properties 

- Interfaces can have **optional properties** using `?`.

  ```ts
  interface Person {
    first: string;
    last: string;
    nickname?: string;
  }
  ```

- `nickname` may exist or may be missing.

  ```ts
  const thomas: Person = {
    first: "Thomas",
    last: "Hardy",
    nickname: "Tom"
  };
  
  const alex: Person = {
    first: "Alex",
    last: "Jones"
  };
  ```

- Interfaces can also use `readonly`.

  ```ts
  interface Person {
    readonly id: number;
    first: string;
    last: string;
    nickname?: string;
  }
  ```

- `readonly` property can be set during creation.

  ```ts
  const thomas: Person = {
    id: 123,
    first: "Thomas",
    last: "Hardy"
  };
  ```

- But it cannot be changed later.

  ```ts
  thomas.id = 999; // error
  ```

## Interface Methods 

- Interfaces can define **methods** also, not just properties.

  ```ts
  interface Person {
    sayHi: () => string;
  }
  
  const thomas: Person = {
    sayHi: () => "Hello",
  };
  ```

- Two Valid Method Syntaxes 

  ```ts
  interface Person1 {
    sayHi: () => string;
  }
  interface Person2 {
    sayHi(): string;
  }
  ```

## Reopening Interfaces 

- Interfaces can be **reopened**.This is called **declaration merging**.

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

- This is unique to interfaces. 

## Extending Interfaces 

- Interfaces can **extend** other interfaces.

- `extends` means the new interface gets all properties/methods from the old interface.

  

  ```ts
  interface Dog {
    name: string;
    age: number;
    breed: string;
    bark(): string;
  }
  //extends means the new interface gets all //properties/methods from the old interface.
  interface ServiceDog extends Dog {
    job: "drug sniffer" | "bomb" | "guide dog";
  }
  
  //ServiceDog now requires everything from Dog plus //job.
  const chewy: ServiceDog = {
    name: "Chewy",
    age: 4.5,
    breed: "Labrador",
    bark() {
      return "Bark";
    },
    job: "guide dog"
  };
  
  ```

## Multiple Interfaces

- An interface can extend **multiple interfaces**.Use commas when extending multiple interfaces.

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

  

## Interfaces vs Types

### Interfaces 

- Interfaces mainly describe **object shapes**.

  ```ts
  interface Person {
    name: string;
    age: number;
  }
  ```

- This means a `Person` object must have:

  - `name` as `string`
  - `age` as `number`

- Interfaces are **not used for literal unions**.

  ```ts
  // Not possible with interface
  type Color = "red" | "blue";
  ```

### Type Aliases 

- Type aliases can describe **any type**.

  ```ts
  type Color = "red" | "blue";
  
  type ID = string | number;
  
  type Point = {
    x: number;
    y: number;
  };
  ```

- Type aliases can describe:

  - Object types
  - Union types
  - Literal types
  - Function types
  - Primitive aliases

### Interfaces can be reopened 

- Interfaces can be declared more than once

- TypeScript merges them together.

  ```ts
  interface Chicken {
    breed: string;
  }
  
  interface Chicken {
    eggsPerWeek: number;
  }
  ```

- Final `Chicken` shape becomes:

  - `breed` as `string`
  - `eggsPerWeek` as `number`

```ts
const hen: Chicken = {
breed: "Silkie",
  eggsPerWeek: 4,
};
```
###   Type Aliases Cannot be Reopened 

- Type aliases cannot be declared twice with the same name.

  ```ts
  type Chicken = {
    breed: string;
  };
  
  type Chicken = {
    eggsPerWeek: number;
  }; // error
  ```

- Once a type alias is created, you cannot reopen it later.

### Interfaces Use `extends`

- Interfaces can inherit from other interfaces using `extends`.

  ```ts
  interface Animal {
    name: string;
  }
  
  interface Dog extends Animal {
    breed: string;
  }
  ```

- `Dog` gets everything from `Animal`.

- Final `Dog` shape:

  - `name` as `string`
  - `breed` as `string`

### Type Aliases Use Intersections

- Type aliases combine types using `&`.

  ```ts
  type Animal = {
    name: string;
  };
  
  type Dog = Animal & {
    breed: string;
  };
  ```

- Final `Dog` shape:

  - `name` as `string`
  - `breed` as `string`

- This works, but `extends` usually looks cleaner for object inheritance.

### Interface vs Type Alias Table 

| Feature            | Interface   | Type Alias         |
| ------------------ | ----------- | ------------------ |
| Object shape       | ✅ Yes       | ✅ Yes              |
| Union types        | ❌ No        | ✅ Yes              |
| Literal types      | ❌ No        | ✅ Yes              |
| Can be reopened    | ✅ Yes       | ❌ No               |
| Can extend/inherit | ✅ `extends` | ✅ `&` intersection |
| Best for objects   | ✅ Usually   | ✅ Also possible    |