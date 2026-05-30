# Modules

## Modules 

- If a `.ts` file has no `export`, TypeScript treats it like a script.

- Script files share the global scope.

- So if we have 2 files say utils.ts and index.ts and we dont export them they will be treated as scripts and they will share the same global scope and they can see each other's variables / functions

  ```ts
  // utils.ts
  const x = 1;
  
  // index.ts
  const x = 2; // error
  ```

- TypeScript complains because both files are treated as part of the same global scope.

- Modules keep each file isolated.

- Code is shared only when explicitly exported and imported.

  ```ts
  // utils.ts
  export function add(x: number, y: number): number {
    return x + y;
  }
  
  // index.ts
  import { add } from "./utils";
  
  add(1, 2);
  ```

  