# Type Declarations

##  Type Declarations

- Type declaration files end with: `.d.ts`

- They contain **only type information**, not runnable JavaScript code.

  ```bash
  .ts    = actual TypeScript code
  .d.ts  = type declarations only
  ```

- `.d.ts` files exist to understand types for things like console , document ,DOM methods , third party libraries 

- Declaration Files usually contain:interfaces ,types , class declarations , function signatures

- Some JavaScript libraries do **not** include their own TypeScript declaration files while some Javascript libraries have there own TypeScript declaration files , lodash does not have the type declaration files whereas axios has its type declaration files

- If a JS library has no built-in TypeScript types, install its type declarations using `@types/library-name`.** 