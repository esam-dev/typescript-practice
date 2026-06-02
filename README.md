<div align="center">
  <img src="https://miro.medium.com/0*b0KCXiImMbXAimrH.png" alt="TypeScript" width="96" />
  <h1>typescript-practice</h1>
 
  <p>A structured, week-long curriculum for learning TypeScript fundamentals — designed as a foundation for React development.</p>
  <p>
    <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white" />
    <img alt="Node" src="https://img.shields.io/badge/Node.js-18%2B-339933?style=flat-square&logo=node.js&logoColor=white" />
    <img alt="ts-node" src="https://img.shields.io/badge/ts--node-enabled-3178C6?style=flat-square" />
    <img alt="Strict Mode" src="https://img.shields.io/badge/strict-true-success?style=flat-square" />
    <img alt="License" src="https://img.shields.io/badge/license-MIT-blue?style=flat-square" />
    <img alt="Status" src="https://img.shields.io/badge/status-in%20progress-yellow?style=flat-square" />
  </p>
</div>
---
 
## Overview
 
This repository tracks my progress through a self-directed TypeScript curriculum. Each directory corresponds to one day of study, containing exercises and personal notes. The goal is to build a solid type-system foundation before moving on to React with TypeScript.
 
The curriculum covers core language features progressively — from primitive types and interfaces on day one, through generics and async patterns by the end of the week.
 
---
 
## Curriculum
 
| Day | Topic | Concepts | Status |
|-----|-------|----------|--------|
| [01](./dia-01-primitivos/) | Primitives & Environment | `string`, `number`, `boolean`, `null`, `undefined`, strict mode | Pending |
| [02](./dia-02-interfaces/) | Objects & Type Modeling | `interface`, `type`, arrays, tuples, `readonly`, optional properties | Pending |
| [03](./dia-03-funciones/) | Functions & Type Narrowing | Union types, literal types, `typeof`, `instanceof`, type guards | Pending |
| [04](./dia-04-genericos/) | Generics & Utility Types | `<T>`, constraints, `Partial`, `Pick`, `Omit`, `Record`, `ReturnType` | Pending |
| [05](./dia-05-async/) | Classes, Enums & Async | Access modifiers, `enum`, `Promise<T>`, typed `fetch`, `async/await` | Pending |
| [06](./dia-06-modulos/) | Modules & Configuration | `import/export`, `tsconfig.json`, `@types`, error handling with `unknown` | Pending |
| [07](./dia-07-proyecto/) | Capstone Project | End-to-end typed app consuming a public REST API | Pending |
 
Update each status to `Complete` as you finish each day.
 
---
 
## Getting Started
 
### Prerequisites
 
- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher
### Installation
 
```bash
git clone https://github.com/esam-dev/typescript-practice.git
cd typescript-practice
npm install
```
 
### Running exercises
 
```bash
# Run a specific day's exercises directly (no compilation step needed)
npx ts-node dia-01-primitivos/ejercicios.ts
 
# Type-check the entire project without emitting files
npm run check
 
# Compile all files to JavaScript
npm run build
```
 
---
 
## Project Structure
 
```
typescript-practice/
├── README.md
├── tsconfig.json
├── package.json
├── .gitignore
├── dia-01-primitivos/
│   ├── ejercicios.ts
│   └── notas.md
├── dia-02-interfaces/
│   ├── ejercicios.ts
│   └── notas.md
├── dia-03-funciones/
│   ├── ejercicios.ts
│   └── notas.md
├── dia-04-genericos/
│   ├── ejercicios.ts
│   └── notas.md
├── dia-05-async/
│   ├── ejercicios.ts
│   └── notas.md
├── dia-06-modulos/
│   ├── ejercicios.ts
│   ├── notas.md
│   └── types/
│       └── index.ts
└── dia-07-proyecto/
    ├── README.md
    └── src/
        ├── types.ts
        ├── api.ts
        └── index.ts
```
 
---
 
## Configuration
 
### `tsconfig.json`
 
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "CommonJS",
    "outDir": "./dist",
    "rootDir": "./",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "exclude": ["node_modules", "dist"]
}
```
 
`strict: true` enforces the full suite of TypeScript's type-safety checks. This is the setting used in production codebases and is required from day one.
 
### `package.json` scripts
 
```json
{
  "scripts": {
    "check": "tsc --noEmit",
    "build": "tsc"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "ts-node": "^10.0.0",
    "@types/node": "^20.0.0"
  }
}
```
 
### `.gitignore`
 
```
node_modules/
dist/
*.js
```
 
---
 
## Resources
 
| Resource | Description |
|----------|-------------|
| [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) | Official language reference |
| [TypeScript Playground](https://www.typescriptlang.org/play) | In-browser editor with instant type feedback |
| [Total TypeScript](https://www.totaltypescript.com/) | Interactive exercises by Matt Pocock |
| [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) | Community-maintained `@types` packages |
| [JSONPlaceholder](https://jsonplaceholder.typicode.com/) | Free REST API used in the capstone project |
 
---
 
## Next Steps
 
After completing this curriculum, the natural progression is React with TypeScript:
 
```bash
# Recommended: Vite scaffold
npm create vite@latest my-app -- --template react-ts
 
# Alternative: Create React App
npx create-react-app my-app --template typescript
```
 
Key TypeScript patterns that transfer directly to React: typed component props with `interface`, state typing with `useState<T>`, async data fetching with `Promise<T>`, and utility types for partial form updates.
 
---
 
## License
 
MIT
 
