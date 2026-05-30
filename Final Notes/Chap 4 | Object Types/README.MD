# Object Types

## Objects 

- Object types define the required shape of an object.

  ```ts
  const printName = (name: { first: string; last: string }) => {
    return `Name: ${name.first} ${name.last}`;
  };
  ```

- Excess Properties on objects

  - Direct object literal = extra properties cause error.

    ```ts
    printName({ first: "Mick", last: "Jagger", age: 473 }); // error
    ```

  - Variable object = extra properties are allowed.

    ```ts
    const singer = {
      first: "Mick",
      last: "Jagger",
      age: 473
    };
    
    printName(singer); // ok
    ```

## Type Alias 

- instead of writing out object types in an annotation we can declare them seperately in a type alias which is simply the desired shape of the   object

- This allows us to make our code more readable and even reuse the type elsewhere in our code

  ```ts
  // A Type alias 
  type Person ={
      name:string ;
      age:number
  }
  
  const sayHappyBirthday =(person:Person)=>{
      return `Hey ${person.name} congrats on turning ${person.age}!`
  }
  
  sayHappyBirthday({name:"Jerry",age:42})
  
  
  ```

## Optional Properties 

- Object properties are **required by default**.

- Use `?` to make a property **optional**.

  ```ts
  type Point = {
    x: number;
    y: number;
    z?: number;
  };
  ```

- Now `z` can exist or be missing.

  ```ts
  const point1: Point = { x: 1, y: 3, z: 9 }; // ok
  const point2: Point = { x: 1, y: 3 };       // ok
  ```

## Readonly modifier 

- `readonly` makes an object property **not changeable after creation**.

  ```ts
  type User = {
    readonly id: number;
    username: string;
  };
  ```

- We can set the `id` when creating the object

  ```ts
  const user: User = {
    id: 123,
    username: "catgurl"
  };
  ```

- But we cannot change it later

  ```ts
  user.id = 999; // Error
  ```

## Intersection Type 

- **Intersection type** combines multiple types using `&`.

- The final type must contain properties from **all combined types**.

- Example 

  ```ts
  type Circle = { radius: number };
  type Colorful = { color: string };
  
  type ColorfulCircle = Circle & Colorful;
  const happyFace: ColorfulCircle = {
    radius: 4,
    color: "yellow"
  };
  ```

  











# Anki 

**Q1**: Write the type alias Person 

```
const sayHappyBirthday =(person:Person)=>{
    return `Hey ${person.name} congrats on turning ${person.age}!`
}

sayHappyBirthday({name:"Jerry",age:42})
```

**Solution**:

- type alias can declare the  desired shape of the  object

  ```ts
  // A Type alias 
  type Person ={
      name:string ;
      age:number
  }
  
  const sayHappyBirthday =(person:Person)=>{
      return `Hey ${person.name} congrats on turning ${person.age}!`
  }
  
  sayHappyBirthday({name:"Jerry",age:42})
  ```

**Q2**: How can we make a object property optional in a type alias 

**Solution**:

- Object properties are **required by default**.

- Use `?` to make a property **optional**.

  ```ts
  type Point = {
    x: number;
    y: number;
    z?: number;
  };
  ```

- Now `z` can exist or be missing.

  ```ts
  const point1: Point = { x: 1, y: 3, z: 9 }; // ok
  const point2: Point = { x: 1, y: 3 };       // ok
  ```

**Q3**: What does the `readonly` modifier do to an object property on a type alias ? 

**Solution**:

- `readonly` makes an object property **not changeable after creation**.

  ```ts
  type User = {
    readonly id: number;
    username: string;
  };
  ```

- We can set the `id` when creating the object

  ```ts
  const user: User = {
    id: 123,
    username: "catgurl"
  };
  ```

- But we cannot change it later

  ```ts
  user.id = 999; // Error
  ```

**Q4**:What does Intersection Type do ? 

**Solution**:

- **Intersection type** combines multiple types using `&`.

- The final type must contain properties from **all combined types**.

- Example:

  ```
  type Circle = { radius: number };
  type Colorful = { color: string };
  
  type ColorfulCircle = Circle & Colorful;
  const happyFace: ColorfulCircle = {
    radius: 4,
    color: "yellow"
  };
  ```

  