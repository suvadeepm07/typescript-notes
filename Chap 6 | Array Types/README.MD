# Arrays

## Array Types

- Arrays can be typed using a type annotation followed by empty array brackets like number[] for an array of numbers (Note: these arrays only allow data of that one type inside them)

  ```ts
  //using brackets
  //string array
  let names :string[]=["hello","world"]
  //number array
  let ages :number[]= [24,32,19,29]
  
  //An alternate syntax
  //string array
  let names2:Array<string>=["hello", "world"]
  //number array
  let ages2 :Array<number> =[24,32,19,29]
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

## Multi Dimensional Array 

- Multi-dimensional arrays are arrays inside arrays.

- 2D string array:

  ```ts
  const board: string[][] = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["X", "O", "X"]
  ]
  ```

- `string[]` means one array of strings.

- `string[][]` means array of string arrays.

- 3D number array:

  ```ts
  const demo: number[][][] = [[[1, 2, 3]]];
  ```

- Core Idea : Add one `[]` for each array nesting level.



