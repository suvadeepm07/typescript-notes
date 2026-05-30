# Chap 3 | Functions 

## Function Parameter Annotation 

- In TypeScript we can specify the type of function parameters in a function defination

  ```ts
  const encourageStudent = (name:string)=>{
  
  	return `Hey , ${name} you're doing GREAT!`
  
  }
  
  //Can call this function with a string 
  encourageStudent('you')
  // --> Hey , you , you're doing GREAT!
  
  /Can't call this function with other type args
  encourageStudent(85);
  //--> TypeScript Error
  ```

- If a function parameter does not have type annotations then parameter becomes `any`

  ```ts
  function square(num) {
    // num is any
  }
  ```

## Default Parameters 

- Function parameters can have **default values**.

  ```ts
  function greet(person: string = "stranger") {
    return `Hi there, ${person}`;
  }
  ```

- syntax: `parameterName: type = defaultValue`

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

- TS can automatically infer the types of anonymous functions

  ```ts
  const numbers = [1,2,3]
  //Contextual typing on an arrow function
  numbers.forEach(num=>{
    return num.toUpperCase()
    //Error! .toUpperCase() doesn't work for numbers
  })
  ```

## Void 

- void is a return type for functions that dont return anything

- TS can infer this type fairly well but sometimes it is preferred to annotate a function with a void return explicitly

  ```ts
  const annoyUser =(num:number):void => {
  	for(let i=0;i<num;i++){
  		alert("HIIII!")
  	}
  }
  ```

## Never

- The never type represents values that NEVER occur .We might use it to  annotate a function that **always throws an exception** or a **function that  never finishes execution**

  ```ts
  // A function that doesn't finish running 
  const neverStop =():never => {
      while(true){
          console.log("I'm still going!");
          
      }
  }
  
  //A function that throws an exception
  const giveError =(msg:string):never=>{
      throw new Error(msg)
  }
  ```

  







# Anki

**Q1**:Write an arrow function with typed params and explicit return type in TS.

**Solution**:

```ts
const addNums =(x:number,y:number):number=>{
  return x+y
}
addNums(5,5)
// --> 10
```

**Q2**: If a function parameter does not have type annotations then what will be the type of the parameter ? 

**Solution**: 

- `any`

**Q3**: What is the TypeScript syntax for a default parameter?

**Solution**:

`name: type = value`

```ts
function greet(person: string = "stranger") {
  return `Hi there, ${person}`;
}
```

**Q4**: Can TS infer the type returned by a function 

**Solution**:

- Yes 

**Q5**: Why are we getting an error ? 

```ts
const numbers = [1,2,3]
numbers.forEach(num=>{
  return num.toUpperCase()
  //Error! .toUpperCase() doesn't work for numbers
})
```

**Solution**:

- TS can automatically infer the types of anonymous functions

**Q6**: In TS, what return type marks a function that returns nothing?

**Solution**:

- Void

**Q7**: When should the return type of a function be never in TS ? 

**Solution**:

- always throws an exception
- function that  never finishes execution

```ts
// A function that doesn't finish running 
const neverStop =():never => {
    while(true){
        console.log("I'm still going!");
        
    }
}

//A function that throws an exception
const giveError =(msg:string):never=>{
    throw new Error(msg)
}
```







