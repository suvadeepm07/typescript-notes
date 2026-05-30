# Chap 9 | Interfaces vs types

## Where its used ? 

- interfaces mainly describe object shapes .Type aliases can describe any type 

  ```ts
  interface Person {
    name: string;
    age: number;
  }
  
  type Color = "red" | "blue";
  
  type ID = string | number;
  
  type Point = {
    x: number;
    y: number;
  };
  ```

## Can it be reopened ? 

- Interfaces can be declared more than once .TS merges them together 

  ```ts
  interface Chicken {
    breed: string;
  }
  
  interface Chicken {
    eggsPerWeek: number;
  }
  
  const hen: Chicken = {
  breed: "Silkie",
    eggsPerWeek: 4,
  };
  ```

- Type aliases cannot be declared twice with the same name.Once a type alias is created, you cannot reopen it later.

  ```ts
  type Chicken = {
    breed: string;
  };
  
  type Chicken = {
    eggsPerWeek: number;
  }; // error
  ```

## Inheritance 

- Interfaces can inherit from other interfaces using `extends`.

  ```ts
  interface Animal {
    name: string;
  }
  
  interface Dog extends Animal {
    breed: string;
  }
  ```

- Final `Dog` shape:

  - `name` as `string`
  - `breed` as `string`

- Type aliases combine types using `&`

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

