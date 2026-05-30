# Chap 4 | Object Types

**Q1**: Write the type alias Person

```ts
const sayHappyBirthday =(person:Person)=>{
    return `Hey ${person.name} congrats on turning ${person.age}!`
}

sayHappyBirthday({name:"Jerry",age:42})
```

**Solution**:

*type alias can declare the  desired shape of an object*

```ts
type Person ={
    name:string ;
    age:number
}
```

Details:

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

*Use `?` to make a property **optional**.*

Details: 

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

**Q3**: What does the `readonly` modifier do to an object property on a type alias ?

**Solution**:

*`readonly` makes an object property **not changeable after creation**.*

Details: 

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

**Q4**:What does Intersection Type(&) do ?

**Solution**:

***Intersection type** combines multiple types using `&`. The final type must contain properties from **all combined types**.*

Details:

```ts
type Circle = { radius: number };
type Colorful = { color: string };

type ColorfulCircle = Circle & Colorful;
const happyFace: ColorfulCircle = {
  radius: 4,
  color: "yellow"
};
```

