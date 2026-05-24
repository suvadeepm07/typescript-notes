# The Typescript compiler 

## Compiling to  Javascript 

- TypeScript compiler settings live in: `tsconfig.json` 

-  Create it with: `tsc --init`

- `tsconfig.json` uses JSON syntax

  ```json
  {
    "compilerOptions": {
      "target": "es5",
      "module": "commonjs",
      "strict": true
    }
  }
  ```

- To compile a TypeScript file manually: `tsc index.ts` .This creates : `index.ts → index.js`

## Watch Mode

- Watch mode keeps running and automatically recompiles when you save changes.

  ```ba
  Change .ts file → Save → TypeScript recompiles automatically
  ```

- Commands : 

  ```bash
  tsc -w index.ts
  ```

## Working with Multiple files 

- If you have multiple `.ts` files, we do **not** need to compile each one manually.
- Running only `tsc` compiles all TypeScript files in the project folder.
- Watch mode also works for multiple files.

## Files Compiler option

- `files` is a **top-level option** in `tsconfig.json`.

- `files` tells TypeScript **exactly which `.ts` files to compile**.

  ```ts
  {
    "files": ["index.ts","farmstand.ts"],
    "compilerOptions": {
      "target": "es5",
      "module": "commonjs",
      "strict": true
    }
  }
  ```

- Without `files`, TypeScript compiles all `.ts` files it can find.

- With `files`, TypeScript only compiles the listed files.

## Include and Exclude 

- `include` and `exclude` are top-level options , not inside `compilerOptions`

- `include` tells TypeScript **which folders/files to compile**.

- `exclude` tells TypeScript **which files/folders to ignore**.

  ```ts
  {
    "include": ["src"],
    "exclude": ["src/dontTouch.ts"],
    "compilerOptions": {
      "strict": true
    }
  }
  ```

- Without `include`, TypeScript includes everything by default.

- `exclude` removes files that would otherwise be included.

- Important: `exclude` normally excludes `node_modules` by default.

## Outdir option

- `outDir` controls where compiled JavaScript files go.

- Without `outDir`, `.js` files are created beside `.ts` files

- With `outDir: "dist"`, compiled files go into `dist`.

  ```ts
  {
    "compilerOptions": {
      "outDir": "dist"
    }
  }
  ```

## Target Option

- `target` controls which JavaScript version TypeScript compiles into.

  ```ts
  {
    "compilerOptions": {
      "target": "ES2015"
    }
  }
  ```

## Strict Mode 

- `strict` enables stronger TypeScript checking.

  ```ts
  {
    "compilerOptions": {
      "strict": true
    }
  }
  ```

- `strict: true` turns on multiple checks, including:
  - `noImplicitAny` prevents untyped parameters from becoming `any`.
  - `strictNullChecks` stops `null` and `undefined` from being assigned unless explicitly allowed.