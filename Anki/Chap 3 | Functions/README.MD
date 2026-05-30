#  Chap 3 | Functions

**Q1**:Write an arrow function with typed params and explicit return type in TS.

**Solution**:

```ts
const addNums =(x:number,y:number):number=>{
  return x+y
}
addNums(5,5) // --> 10
```

**Q2**: If a function parameter does not have type annotations then what will be the type of the parameter ?

**Solution**:

- `any`

**Q3**: What is the TypeScript syntax for a default parameter?

**Solution**:

*name: type = value*

Details : 

```ts
function greet(person: string = "stranger") {
  return `Hi there, ${person}`;
}
```

**Q4**: Can TS infer the type returned by a function

**Solution**:

*yes*

**Q5**: Why are we getting an error ?

```ts
const numbers = [1,2,3]
numbers.forEach(num=>{
  return num.toUpperCase()
  //Error! .toUpperCase() doesn't work for numbers
})
```

**Solution**:

*TS can automatically infer the types of anonymous functions*

**Q6**: In TS, what return type marks a function that returns nothing?

**Solution**:

*void*

**Q7**: When should the return type of a function be never in TS ?

**Solution**:

- always throws an exception
- function that  never finishes execution

Details : 

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

