# Typescript Compiler

## Compiling to Javascript

- TypeScript compiler settings live in:

```txt
tsconfig.json
```

- Create it with:

```bash
tsc --init
```

- `tsconfig.json` contains many compiler options, but we only need the important ones.

- It uses JSON syntax:

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true
  }
}
```

- To compile a TypeScript file manually:

```bash
tsc index.ts
```

- This creates:

```txt
index.ts → index.js
```

- In the TypeScript Playground, compilation happens automatically.

- In VS Code/local projects, you run `tsc` yourself.

## Watch mode

- `tsc -w` runs TypeScript in **watch mode**.

```bash
tsc -w index.ts
```

- Same command, longer version:

```bash
tsc --watch index.ts
```

- Watch mode keeps running and automatically recompiles when you save changes.

```txt
Change .ts file → Save → TypeScript recompiles automatically
```

- It also shows TypeScript errors in the terminal.

- Stop watch mode with:

```bash
Ctrl + C
```

## Working with multiple files

- If you have multiple `.ts` files, you do **not** need to compile each one manually.

```bash
tsc
```

- Running only `tsc` compiles all TypeScript files in the project folder.

```txt
index.ts → index.js
farmstand.ts → farmstand.js
```

- If you specify a file, only that file is compiled.

```bash
tsc farmstand.ts
```

- Watch mode also works for multiple files.

```bash
tsc -w
```

- Now TypeScript watches all `.ts` files and recompiles when any of them changes.

```txt
Change any .ts file → Save → TypeScript recompiles
```

## Files Compiler option

- `files` tells TypeScript **exactly which `.ts` files to compile**.

```json
{
  "files": ["index.ts", "farmstand.ts"]
}
```

- `files` is a **top-level option** in `tsconfig.json`.

```json
{
  "files": ["index.ts"],
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true
  }
}
```

- Do **not** put `files` inside `compilerOptions`.

```json
{
  "compilerOptions": {
    "files": ["index.ts"]
  }
}
```

This is wrong.

- Without `files`, TypeScript compiles all `.ts` files it can find.

- With `files`, TypeScript only compiles the listed files.

```txt
index.ts ✅
farmstand.ts ✅
DontTouch.ts ❌ ignored
```

## Include and Exclude

- `include` tells TypeScript **which folders/files to compile**.

```json
{
  "include": ["src"]
}
```

- `exclude` tells TypeScript **which files/folders to ignore**.

```json
{
  "include": ["src"],
  "exclude": ["src/dontTouch.ts"]
}
```

- Both are **top-level options**, not inside `compilerOptions`.

```json
{
  "include": ["src"],
  "exclude": ["src/dontTouch.ts"],
  "compilerOptions": {
    "strict": true
  }
}
```

- Without `include`, TypeScript includes everything by default.

```txt
Default include = all .ts files
```

- `exclude` removes files that would otherwise be included.

```txt
include src ✅
exclude src/dontTouch.ts ❌
```

- Important: `exclude` normally excludes `node_modules` by default.

```json
{
  "exclude": ["node_modules"]
}
```

## Outdir option

- `outDir` controls where compiled JavaScript files go.

```json
{
  "compilerOptions": {
    "outDir": "dist"
  }
}
```

- Without `outDir`, `.js` files are created beside `.ts` files.

```txt
src/farmstand.ts
src/farmstand.js
```

- With `outDir: "dist"`, compiled files go into `dist`.

```txt
src/farmstand.ts → dist/farmstand.js
```

- Common project structure:

```txt
src  = TypeScript source files
dist = compiled JavaScript files
```

## Target Option

- `target` controls which JavaScript version TypeScript compiles into.

```json
{
  "compilerOptions": {
    "target": "ES2015"
  }
}
```

- Example:

```txt
target: "ES5"     → older JavaScript output
target: "ES2015"  → modern JavaScript output
```

- If `target` is `ES5`, TypeScript converts modern syntax like arrow functions into older syntax.

```ts
const printProduct = () => {};
```

May compile to:

```js
var printProduct = function () {};
```

- If `target` is `ES2015`, arrow functions and `const` can stay in the output.

- Common options:

```txt
ES5
ES2015 / ES6
ES2016
ES2020
ESNext
```

## Strict Option



- `strict` enables stronger TypeScript checking.

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

- `strict: true` turns on multiple checks, including:

```txt
noImplicitAny
strictNullChecks
```

- `noImplicitAny` prevents untyped parameters from becoming `any`.

```ts
function doThing(thing) {
  console.log(thing);
}
```

With strict mode on, this gives an error.

```ts
function doThing(thing: string): void {
  console.log(thing);
}
```

- `strictNullChecks` stops `null` and `undefined` from being assigned unless explicitly allowed.

```ts
let users: string[] = ["Tony", "Sarah"];

users = null; // error
```

- If `null` is allowed, say it clearly.

```ts
let users: string[] | null = ["Tony", "Sarah"];

users = null; // ok
```

