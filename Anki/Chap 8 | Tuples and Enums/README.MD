# Chap 8 | Tuples and Enums

**Q1**: What is a tuple in TypeScript ? 

**Solution**:

*a fixed-length, ordered typed array.*

Syntax : `let myTuple:[number,string]`

Details:

```ts
//Creating a Tuple with its type defination 
let mytuple :[number,string]

//CAN assign it values per its specs 
mytuple=[10,"Typescript is fun!"]

//CAN'T assign it values of a diff structure ❌
mytuple=["Typescript is fun!",10]
```

**Q2**: What does an enum define in TypeScript?

**Solution**:

*a set of named constants*

Syntax:

```ts
enum Responses1 {
    no, //0
    yes , //1
    maybe, //2

}
```

Details:

```ts
//Numeric Enums 
enum Responses1 {
    no, //0
    yes , //1
    maybe, //2

}

enum Responses2 {
    no = 2, //2
    yes, //3
    maybe , //4

}

enum Responses3 {
    no =2, //2
    yes = 10, //10
    maybe = 24 , //24
}

//String Enums 
enum Responses4{
    no ="No",
    yes ='Yes',
    maybe ='Maybe'
}

//Heterogenous Enums 
enum Responses5{
    no = 0,
    yes = 1,
    maybe ="Maybe"
}

function reply(answer: Responses4) {
  if (answer === Responses4.yes) {
    return "User agreed";
  }

  if (answer === Responses4.no) {
    return "User rejected";
  }

  return "User is unsure";
}

reply(Responses4.yes);   // "User agreed"
reply(Responses4.no);    // "User rejected"
reply(Responses4.maybe); // "User is unsure"
```

