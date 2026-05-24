# Tuples and Enums

## Tuples 

- Tuples are a special type exclusive to TypeScript (they don't exist in JS)

- Tuples are arrays of fixed lengths and ordered with specific types -like super rigid arrays

  ```ts
  //Creating a Tuple with its type defination 
  let mytuple :[number,string]
  
  //CAN assign it values per its specs 
  mytuple=[10,"Typescript is fun!"]
  
  //CAN'T assign it values of a diff structure ❌
  mytuple=["Typescript is fun!",10]
  ```

- Tuples can contain **mixed types** in a fixed order.

  ```ts
  type HTTPResponse = [number, string];
  ```

- Order matters.

  ```ts
  const goodRes: HTTPResponse = [200, "OK"]; // ok
  const badRes: HTTPResponse = ["OK", 200]; // error
  ```

- Length matters during creation.		

```ts
const res: HTTPResponse = [404, "Not Found", "extra"]; // error
```

- Tuple items keep their expected type.

  ```ts
  goodRes[0] = "200"; // error
  ```

- Limitation: TypeScript may still allow `push()` after creation.

  ```TS
  goodRes.push(123); // allowed, but weird
  ```

## Enums 

- Enums allow us to defined a set of named constants .We can give these constants numeric or string values 

# TypeScript Enums — Compilation Notes

## 1. Most TypeScript Syntax Disappears After Compilation

Most TypeScript-only syntax is removed when TypeScript compiles to JavaScript.

Example:

```ts
const name: string = "Suvadeep";
```

Compiled JavaScript:

```js
const name = "Suvadeep";
```

The type annotation:

```ts
: string
```

does not exist in the final JavaScript.

---

## 2. Enums Are Different

Enums are different from most TypeScript features.

A normal `enum` does **not** disappear after compilation.

It creates extra JavaScript code.

Example:

```ts
enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED
}
```

This produces JavaScript code behind the scenes.

TypeScript creates something like a JavaScript object for the enum.

---

## 3. Normal Enum Creates Runtime JavaScript Code

When we write:

```ts
enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED
}
```

TypeScript gives each enum member a number by default:

```ts
PENDING = 0
SHIPPED = 1
DELIVERED = 2
RETURNED = 3
```

So this:

```ts
const order = {
  orderNumber: 123,
  status: OrderStatus.PENDING
};
```

uses the enum object in the compiled JavaScript.

Behind the scenes:

```ts
OrderStatus.PENDING
```

means:

```ts
0
```

---

## 4. Why Some Developers Dislike Normal Enums

Normal enums add extra JavaScript code.

That means they are not just type-level helpers.

They affect the final JavaScript output.

Some developers dislike this because:

- it adds extra code
- it creates an object in JavaScript
- it “pollutes” the final JavaScript output
- TypeScript usually tries to stay close to JavaScript

---

## 5. `const enum`

TypeScript also has `const enum`.

Syntax:

```ts
const enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED
}
```

Important:

```ts
const enum
```

is not the same as declaring a normal `const` variable.

The `const` keyword changes how the enum compiles.

---

## 6. What `const enum` Does

A `const enum` gets removed from the final JavaScript.

Instead of creating an enum object, TypeScript replaces enum references with their actual values.

Example:

```ts
const enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED
}

const order = {
  orderNumber: 123,
  status: OrderStatus.PENDING
};
```

Compiled result behaves like:

```js
const order = {
  orderNumber: 123,
  status: 0
};
```

So:

```ts
OrderStatus.PENDING
```

gets replaced with:

```ts
0
```

---

## 7. Normal Enum vs Const Enum

### Normal Enum

```ts
enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED
}
```

Creates extra JavaScript code.

It creates an enum object behind the scenes.

---

### Const Enum

```ts
const enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED
}
```

Does not create an enum object.

The values are directly inserted into the compiled JavaScript.

---

## 8. Why Use Enums?

Enums are useful for organizing fixed named constants.

Example:

```ts
enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED
}
```

This is more readable than using raw numbers:

```ts
status: 0
```

Better:

```ts
status: OrderStatus.PENDING
```

---

## 9. Main Benefit of Enums

The biggest benefit is:

- readable names
- organized constants
- autocomplete from TypeScript

Example:

```ts
OrderStatus.PENDING
OrderStatus.SHIPPED
OrderStatus.DELIVERED
OrderStatus.RETURNED
```

You get autocomplete instead of manually typing strings or numbers.

---

## 10. Enum Alternatives

Some developers prefer simple objects instead of enums.

Example:

```ts
const OrderStatus = {
  PENDING: 0,
  SHIPPED: 1,
  DELIVERED: 2,
  RETURNED: 3
};
```

This avoids some enum-related debate.

---

## 11. Key Warning

Enums are not used everywhere.

Some developers like them.

Some developers avoid them.

They are useful to understand because you may see them in TypeScript codebases.

---

## Final Core Idea

Normal enums create JavaScript code.

`const enum` gets erased and replaces enum references with direct values.

Enums are mainly useful for named constants and autocomplete.