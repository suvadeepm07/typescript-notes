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
```

```ts
const thomas: Person = {
  first: "Thomas",
  last: "Hardy"
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

- Interfaces can define **methods**, not just properties.

```ts
interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  sayHi: () => string;
}
```

- This means `sayHi` must be a function that:
  - takes no parameters
  - returns a string

```ts
const thomas: Person = {
  id: 123,
  first: "Thomas",
  last: "Hardy",
  sayHi: () => {
    return "Hello";
  }
};
```

- This is wrong because `sayHi` must be a method, not a string.

```ts
sayHi: "hello" // error
```

- If the interface says the method takes no arguments, you cannot define it with arguments.

```ts
sayHi: (name: string) => "Hello" // error
```

- Alternate method syntax:

```ts
interface Person {
  sayHi(): string;
}
```

- Both are valid:

```ts
sayHi: () => string;
```

```ts
sayHi(): string;
```

- Interface methods can also define **parameter types**.

```ts
interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}
```

- This means every `Product` must have:
  - `name` as string
  - `price` as number
  - `applyDiscount` method
  - `applyDiscount` must accept a number
  - `applyDiscount` must return a number

```ts
const shoes: Product = {
  name: "Blue Suede Shoes",
  price: 100,
  applyDiscount(amount: number): number {
    const newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return newPrice;
  }
};
```

- The parameter name in the interface does **not** have to match the real method parameter name.

```ts
interface Product {
  applyDiscount(discount: number): number;
}
```

```ts
applyDiscount(amount: number): number {
  return 60;
}
```

This is okay because the **type matters**, not the parameter name.

- Wrong parameter type gives error.

```ts
applyDiscount(amount: string): number {
  return 60;
}
```

- Wrong return type also gives error.

```ts
applyDiscount(amount: number): string {
  return "60";
}
```

- Interfaces disappear after TypeScript compiles to JavaScript.

## Types vs Interfaces 

- Interfaces can be **reopened**.

```ts
interface Person {
  name: string;
}

interface Person {
  age: number;
}
```

- TypeScript combines both declarations.

```ts
const person: Person = {
  name: "Thomas",
  age: 30
};
```

- This is called **declaration merging**.

- Example:

```ts
interface Dog {
  name: string;
  age: number;
}

interface Dog {
  breed: string;
  bark(): string;
}
```

- Now `Dog` requires **all properties** from both interface declarations.

```ts
const elton: Dog = {
  name: "Elton",
  age: 0.5,
  breed: "Australian Shepherd",
  bark() {
    return "WOOF WOOF!";
  }
};
```

- This is unique to interfaces.

- Useful when you want to add properties to an existing interface, especially from another file or library.

## Extending Interfaces 

- Interfaces can **extend** other interfaces.

```ts
interface Dog {
  name: string;
  age: number;
  breed: string;
  bark(): string;
}
```

- `extends` means the new interface gets all properties/methods from the old interface.

```ts
interface ServiceDog extends Dog {
  job: "drug sniffer" | "bomb" | "guide dog";
}
```

- `ServiceDog` now requires everything from `Dog` plus `job`.

```ts
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

- The extra property can also use a literal union type.

```ts
job: "drug sniffer" | "bomb" | "guide dog";
```

- Interfaces can extend **multiple interfaces**.

```ts
interface ServiceDog extends Dog, Worker {
  job: string;
}
```

## Multiple Interfaces 

- An interface can extend **multiple interfaces**.

```ts
interface Human {
  name: string;
}

interface Employee {
  readonly id: number;
  email: string;
}
```

- Use commas when extending multiple interfaces.

```ts
interface Engineer extends Human, Employee {
  level: string;
  languages: string[];
}
```

- `Engineer` now requires everything from:
  - `Human`
  - `Employee`
  - its own properties

```ts
const pierre: Engineer = {
  name: "Pierre",
  id: 123,
  email: "pierre@gmail.com",
  level: "senior",
  languages: ["JS", "Python"]
};
```

- `readonly` still works when inherited.

```ts
pierre.id = 999; // error
```

- Be careful: interfaces with the same name merge.  
  If `Person` already exists, writing another `interface Person` adds to it instead of replacing it.

## Interfaces vs Types

## Very Important Points

- Interfaces and type aliases often look similar, but they have key differences.

---

## 1. Interfaces only describe object shapes

```ts
interface Person {
  name: string;
  age: number;
}
```

- Interfaces are mainly for describing objects.

- You cannot use an interface for literal unions like this:

```ts
// Not possible with interface
type Color = "red" | "blue";
```

---

## 2. Type aliases can describe any type

```ts
type Color = "red" | "blue";
```

```ts
type ID = string | number;
```

```ts
type Point = {
  x: number;
  y: number;
};
```

- A `type` alias can describe:
  - object types
  - union types
  - literal types
  - function types
  - primitive aliases

---

## 3. Interfaces can be reopened

```ts
interface Chicken {
  breed: string;
}

interface Chicken {
  eggsPerWeek: number;
}
```

- TypeScript merges both interfaces.

```ts
const hen: Chicken = {
  breed: "Silkie",
  eggsPerWeek: 4
};
```

---

## 4. Type aliases cannot be reopened

```ts
type Chicken = {
  breed: string;
};

type Chicken = {
  eggsPerWeek: number;
}; // error
```

- You cannot declare the same `type` twice.

---

## 5. Interfaces use `extends`

```ts
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}
```

- `Dog` gets everything from `Animal`.

---

## 6. Type aliases use intersections

```ts
type Animal = {
  name: string;
};

type Dog = Animal & {
  breed: string;
};
```

- This works, but looks less clean than `extends`.

---

## Interface vs Type Alias

| Feature            | Interface   | Type Alias         |
| ------------------ | ----------- | ------------------ |
| Object shape       | ✅ Yes       | ✅ Yes              |
| Union types        | ❌ No        | ✅ Yes              |
| Literal types      | ❌ No        | ✅ Yes              |
| Can be reopened    | ✅ Yes       | ❌ No               |
| Can extend/inherit | ✅ `extends` | ✅ `&` intersection |
| Best for objects   | ✅ Usually   | ✅ Also possible    |

---

