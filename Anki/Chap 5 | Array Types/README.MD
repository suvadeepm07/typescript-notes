# Chap 5 | Array Types 

**Q1**: How can we type a 1D Array in TS ? 

**Solution**:

*use `Type[]`, e.g. `number[]` or `Point[]`.*

Details:

- Arrays can be typed using a type annotation followed by empty array   brackets like number[] for an array of numbers (Note: these arrays only  allow data of that one type inside them)

  ```ts
  //string array
  let names :string[]=["hello","world"]
  //number array
  let ages :number[]= [24,32,19,29]
  ```

- Arrays can also use custom object types.

  ```ts
  type Point = {
    x: number;
    y: number;
  };
  const coords: Point[] = [];
  coords.push({ x: 23, y: 8 }); // ok
  coords.push({ y: 8 });        // error
  ```

**Q2**:How do you type a multi-dimensional array in TypeScript?

**Solution**:

*add one `[]` per nesting level, e.g. `string[][]`.*

Details:

- Multi-dimensional arrays are arrays inside arrays.

- Core Idea : Add one `[]` for each array nesting level

- Examples:

  ```ts
  const board: string[][] = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["X", "O", "X"]
  ]
  const demo: number[][][] = [[[1, 2, 3]]];
  ```

  

