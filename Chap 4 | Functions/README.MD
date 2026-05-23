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


## Function Return Types 

- We can specify the type returned by a function .Even though TS can ofter infer this it is preferred to use explicit annotations

  ```ts
  const addNums =(x:number,y:number):number=>{
    return x+y
  }
  addNums(5,5)
  // --> 10
  ```

## Anonymous Functions 

- TS can infer how an unnamed function is going to be called , it can automatically infer its parameters types 				

```ts
const numbers = [1,2,3]
//Contextual typing on an arrow function
numbers.forEach(num=>{
  return num.toUpperCase()
  //Error! .toUpperCase() doesn't work for numbers
})
```

## Void 

- void is a return type for functions that dont return anything .It means just that this function is void of any data 

- TS can infer this type fairly well but sometimes it may want us to annotate a function with a void return explicitly 

  ```  
  const annoyUser =(num:number):void => {
  	for(let i=0;i<num;i++){
  		alert("HIIII!")
  	}
  }
  ```

## Never 

- The never type represents values that NEVER occur .We might use it to annotate a function that always throws an exception or a function that never finishes execution 
- Don't confuse with void - void returns undefined or null which is technically still a type of value .With never a function doesn't even finish executing 		

```ts
// A function that doesn't finish running 
const neverStop =():never => {
    while(true){
        console.log("I'm still going!");
        
    }
}

//A function that throws an exception
const giveError =(msg:string)=>{
    throw new Error(msg)
}
```

