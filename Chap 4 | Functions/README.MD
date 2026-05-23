# Functions

## Function Parameter Annotations 

- In TypeScript we can specify the type of function parameters in a function defination 

- This allows TS to enforce the types for the values being passed into our function

  ```ts
  const encourageStudent = (name:string)=>{
  
  	return `Hey , ${name} you're doing GREAT!`
  
  }
  
  //Can call this function with a string 
  encourageStudent('you')
  // --> Hey , you , you're doing GREAT!
  
  /Cant call this function with other type args
  encourageStudent(85);
  //--> TypeScript Error
  ```

- Function parameters should usually have **type annotations**.

  ```ts
  function square(num: number) {
    return num * num;
  }
  ```

- Without annotation, parameter becomes `any`.

  ```ts
  function square(num) {
    // num is any
  }
  ```

- `any` is dangerous because TypeScript will not properly warn us

-  A function can have **multiple parameters**, and each can have its own type

  ```ts
  const doSomething = (
    person: string,
    age: number,
    isFunny: boolean
  ) => {};
  ```

- Arguments must be passed in the **correct order**.

  ```ts
  doSomething("ChickenFace", 76, false); // correct
  ```

- TypeScript warns if:

  - wrong type is passed
  - too many arguments are passed
  - too few arguments are passed

## Default Parameters 

- Function parameters can have **default values**.

  ```ts
  function greet(person: string = "stranger") {
    return `Hi there, ${person}`;
  }
  ```

- syntax: `parameterName: type = defaultValue`

- Default value comes **after the type annotation**.

- You can call it with a value or without one:

  ```ts
  greet("Tony"); // ok
  greet();       // uses "stranger"
  ```

  