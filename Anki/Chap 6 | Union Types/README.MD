# Chap 6 | Union Types

**Q1**:How do you type a value that may be one of several types in TypeScript?

**Solution**:

*use a union with `|`, e.g. `number | string`*

Details :

```ts
let age: number | string = 21;
age = 23;    // ok
age = "24";  // ok

type Point = {
  x: number;
  y: number;
};

type Loc = {
  latitude: number;
  longitude: number;
};

let coordinates: Point | Loc;

function printAge(age: number | string): void {
  console.log(`You are ${age} years old`);
}

//This means stuff can be number or string
const stuff: (number | string)[] = [];
stuff.push(1);      // ok
stuff.push("hello"); // ok
stuff.push(true);   // erro
```

**Q2**: What is a Literal Type ? 

**Solution**:

***Literal type** means a value must be one exact value*

Details: 

```ts
let zero: 0 = 0;
zero = 2; // error
```

