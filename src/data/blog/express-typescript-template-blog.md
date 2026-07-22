---
title: 'Express typescript template'
summary: 'A personal portfolio and developer journal documenting real-world development decisions, challenges, and solutions. It serves as both a reference for my future self and a place to share practical development experiences with others. This website is built as a living project, evolving over time as I learn, experiment, and improve my approach to building web applications. '
date: 'July 21, 2026'
image: '/blogs/express-typescript-template-blog.png'
tags: ['template', 'backent-api', 'express', 'typscript']
---

#### NPM or BUN (packege manager)

At first time i use bun for project installation and it was fast which means, I could clearly see the difference in speed when I was using bun.

But it has configuration issue with testin library jest also eslint then i was shift bun to npm in middle of project. It was slower than bun i dont have any configuration issue facing and if i gettitng error then it was solved after search on internet

#### Creating a `package.json` File

When we run application, it looks at this file, downloads the necessary packages from the internet if they're not already installed, and then proceeds with execution.

run the command:

```bash
npm init -y
```

The `init` command initializes a new Node.js project. It creates a `package.json` file, which is crucial for managing your project's dependencies.

The `-y` flag, an optional addition, skips the questionnaire, instead filling the `package.json` file with default values, which can be modified later as needed.

---

#### Setting Up a Basic Server

At first create basic server setup using express, because next all configuration was checked in express server enviroment.

Create `app.ts` and `server.ts` in source(`/src`) folder because i want to take server configration (express or database or many more) in diffirent file and all app configurations like third-party middlware are in saparate file .

Paste the following code into `app.js`:

```ts
import express, { type Request, type Response } from 'express';

export const app = express();

app.get('/', (_req: Request, res: Response) => {
  res.json({
    success: true,
    message: 'Welcome to API v1.0.0',
    timestamp: new Date().toISOString(),
  });
});
```

Paste the following code into `server.ts`:

```ts
import { app } from './app.js';

const server = app.listen(3000, () => {
  console.log(`✅ Server running in ${env.NODE_ENV} mode on port ${env.PORT}`);
});
```

---

#### Integrating TypeScript into the Project

> **_Why TypeScript?_**
>
> _TypeScript is a superset of JavaScript that adds static typing, making our code more robust and maintainable. However, the Node.js environment doesn’t natively understand TypeScript._

for run typescript in node.js use `tsx`(TypeScript Execute). And it was use with `nodemon`because i use multiple combinations and finally i used tsx with nodemon.

```
"dev : nodemon --watch src --ext ts --exec tsx src/server.ts
```

###### **Configuring the TypeScript Compiler with tsconfig.json**

I create two different typescript configurations one for development/testing and other for build their name respective `tsconfig.json` and `tsconfig.build.json` .

`tsconfig.json`

```json
{
  "compilerOptions": {
    // Environment setup & latest features
    "lib": ["ES2022"],
    "target": "es2022",
    "module": "nodenext",
    "moduleDetection": "force",
    "types": ["node"],
    "esModuleInterop": true,
    "removeComments": true,
    "isolatedModules": true,

    "moduleResolution": "nodenext",
    "verbatimModuleSyntax": true,
    "noEmit": true,

    // Best practices
    "strict": true,
    "skipLibCheck": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,

    // Some stricter flags (disabled by default)
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true
  },
  "include": ["src/**/*", "test/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

`tsconfig.build.json`

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist",
    "noEmit": false,
    "removeComments": true,
    "types": ["node"]
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules", "dist", "test", "**/*.test.ts", "**/*.spec.ts"]
}
```

`scripts`

```json
"build": "tsc -p tsconfig.build.json",
```

Run your program using the command:

```bash
npm run dev
```

---

#### Setting Up `.gitignore` for Your Project

In our application i use version control like git, then it is essential to have a `.gitignore` file. This file tells Git which files or directories to ignore in your repository.

Create file using vscode. Vscode has **gitignore** third party extension, they add all mendatory folders and files in gitignore. if we have add other than that then we add accordingly at the time development.

---

#### Adding enviroment variables

Node has a package called `dotenv` that allows you to load environment variables from a `.env` file into `process.env`. This package is very useful when you want to keep your secret keys and configuration in a safe place.

I use `dotenv` and `cross-env` package because we use multiple enviroment like development, production and testing.

If you put `NODE_ENV=production node index.js` into your `package.json` scripts, **it will crash on Windows machines**. `cross-env` solves this issue.

```json
"start": "cross-env NODE_ENV=production node ./dist/server.js",
```

Create `env.ts` file in `config` folder for import all env variable at one place and it was helpful, if validate out env variables. and Also we can use this variable on different projects or file like yaml etc.

```ts
import dotenv from 'dotenv';

const enviroment = process.env.NODE_ENV ?? 'development';

dotenv.config({
  path: `.env.${enviroment}.local`,
});

const { PORT, NODE_ENV, MONGODB_URI } = process.env;
export const env = { PORT, NODE_ENV, MONGODB_URI };
```

---

#### Adding Vitest and Supertest for Testing

> **_why i choose vitest for testing?_**
>
> _Beacause configuration, at the first time i install jest in my project but it gave multiple errors. one solve then another error create then solve those error._
>
> _I research on that in internet i see it was problem becuase of typscript. somtimes dependancy version cannot match and gave error._
>
> _I cannot do many configuration for testing. Create `test` folder in root directory and save all my tests._

For end to end testing we selected Supertest library. using that we test HTTP servers ans REST APIs.

```json
"test": "vitest run",
"test:watch": "vitest watch",
```

`app.test.ts`

```ts
import { describe, expect, test } from 'vitest';
import { app, sum } from '../src/app.js';
import request from 'supertest';

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('should return 200 status code', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});
```

---

#### Lint configuration

If we want to find inconsistent coding styles, bugs and typos, unused variable and imports, best practices then use `eslint`.

we want to ship a clean and well structured code, and to do so, we are going to use a static code analysis tool to identify problematic patterns in our code called `eslint`.

```ts
// @ts-check

import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig([
  {
    files: ['src/**/*.ts', 'tests/**/*.ts'],
    ignores: ['dist/**', 'node_modules/**'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        projectService: true, //
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      'no-console': 'off',
      'no-unused-vars': 'off',
      'no-constant-condition': 'error',
      curly: 'error',
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-redeclare': 'error',
      indent: ['error', 2],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'callback-return': 'warn',
      'handle-callback-err': 'error',
      'no-path-concat': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
  },
]);
```

With ESLint configured, you’re taking a significant step towards ensuring high-quality, maintainable code. This not only benefits individual developers but also enhances team collaboration.

`Scripts`

```json
"lint:check": "eslint .",
"lint:fix": "eslint . --fix"
```

---

#### Prettier

I cannot use saparete dependancy for prettier instead of use vscode extension and it was pretty enough for present time.

---

#### Error handling

A well-structured error-handling mechanism can prevent unexpected crashes, expose security vulnerabilities, and enhance the user experience by providing meaningful error messages when something goes wrong.

I cannot use any third party dependancy for error handling. At present time all error handled by me using two file global error handler provided expressn and custom error handler made by me. both are mention in below code.

If in future i require any dependancies then i will reaserch and use it.

`globalErrorHandler.ts`

```ts
import type { Response, Request, NextFunction } from 'express';
import { env } from '../configs/env.js';
import type { AppError } from './GlobalErrorHandler.ts';

export function errorHandler(
  err: AppError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || 'Internal Server Error';

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
    timestamp: new Date().toISOString(),
    details: env.NODE_ENV === 'development' ? err.stack : null,
  });
}
```

`CustomErroHandler.ts`

```ts
export class AppError extends Error {
  statusCode: number;
  details?: unknown;

  constructor(statusCode: number, message: string, details?: unknown) {
    super(message);

    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.details = details;

    Error.captureStackTrace(this, this.constructor);
  }
}

export class NotFoundError extends AppError {
  constructor(message = 'Resource not found') {
    super(404, message);
  }
}
```

Also handled some unexpected promise, runtime and singnal termination error

`server.ts`

```ts
import { app } from './app.js';
import { env } from './configs/env.js';

const server = app.listen(env.PORT, () => {
  console.log(`✅ Server running in ${env.NODE_ENV} mode on port ${env.PORT}`);
});

server.on('error', (err) => {
  void (() => {
    console.error('❌ Startup failed. Exiting...', err);
    // await disconnectDB();
    process.exit(1);
  })();
});

let isShuttingDown = false;
const shutdown = (signal: string, exitCode: number) => {
  if (isShuttingDown) {
    return;
  }

  isShuttingDown = true;
  console.log(`\n🛑 ${signal} received. Shutting down gracefully.`);

  server.close((error) => {
    void (() => {
      if (error) {
        console.error('❌ Failed to close HTTP server:', error);
      }

      try {
      } catch (error) {
        console.error('❌ Failed to disconnect database:', error);
      }
      process.exit(exitCode); // (1)Process terminated because of an error.(0)successful shutdown.
    })();
  });
};

// handle promise rejections
process.on('unhandledRejection', (error) => {
  console.error('Unhandled Rejection:', error);
  void shutdown('unhandledRejection', 1);
});

// handled synchronous/runtime exception
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  void shutdown('uncaughtException', 1);
});

// External system (os, docker, etc.) asks your application to stop.
process.on('SIGTERM', () => {
  void shutdown('SIGTERM', 0);
});

// SIGINT received (Ctrl+C), Gracefully shutdown.
process.on('SIGINT', () => {
  void shutdown('SIGINT', 0);
});
```

---

#### Middlewares (built-in or third-party)

```ts
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
```

- `express.json()` - parses incoming requests with JSON payloads.

- `express.urlencoded({ extended: true })` - parses incoming requests with URL-encoded payloads.

- `cors()` - Enable cross-origin resource sharing (CORS) with various options.

- `cookieParser()` - Parse cookie header and populate `req.cookies`.

If in future i require any middleware then i will reaserch and use it.

`source-code` : [Github](https://github.com/ysdhuri312/express-typescript-template.git)
