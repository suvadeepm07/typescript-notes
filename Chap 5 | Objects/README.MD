# Object Types

## Objects

- Objects can be typed by declaring what the object should look like in the annotation 
- Accessing a property that isnt defined or performing operations without keeping types in mind will throw errors 

```ts
// A function with an object type parameter 
const printName =(name:{first:string;last:string})=>{
    return `Name : ${name.first}${name.last}`
}

printName({first:"Will",last:"Ferrell"})
```

