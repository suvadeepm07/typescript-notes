# Section 1 | Introduction

## The Case For TypeScript 

- **JavaScript has quirks** that can cause bugs silently.
  - Example: `null * number` becomes `0`
  - Example: accessing a wrong property gives `undefined`, not an error
- **JavaScript was originally made for small browser scripts**, not huge modern apps with thousands of lines of code.
- Because JavaScript is used in large apps now, **small mistakes can become big bugs**.
- **TypeScript is built on top of JavaScript** to reduce these bugs.
- **TypeScript adds a type system** that checks your code and helps catch mistakes earlier.
- **TypeScript is a superset of JavaScript**, meaning:
  - All JavaScript code is valid TypeScript.
  - TypeScript adds extra rules and checks on top.

## TypeScript Overview 

- TypeScript is JavaScript with a type system.
- **TypeScript does static checking**, meaning it finds errors **before the code runs**.
- TypeScript checks code based on **types**:
  - string
  - number
  - array
  - object properties
- TypeScript is mainly for development. Final code gets **compiled into normal JavaScript**.
- TypeScript-only code like `interface`, `type`, etc. is **removed after compilation**.
- Main benefit: **catch bugs early**, like typos in object properties:
  - `shape.heigth` ❌
  - TypeScript warns: “Did you mean `height`?”
- Core idea: **TypeScript helps you write safer JavaScript.**



