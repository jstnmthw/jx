# Jx - Starter kit for NextJS apps.

![ts](https://badgen.net/badge/Built%20With/TypeScript/blue)
![ts](https://badgen.net/badge/version/0.1.0/green)

An opinionated application starter kit to built on NextJS tailored to Laravel Sanctum API. The authentication is mainly focused on using Laravel's backend API which utilizes CRSF token for secure authentication and sessions. 

## The following are preinstalled and ready out of the box for quick application scaffolding.

- [TailwindCSS](https://tailwindcss.com/)
- [Hero Icons](https://heroicons.com/)
- [Headless UI](https://headlessui.com/)
- [ESLint](https://eslint.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Table](https://tanstack.com/table/v8/?from=reactTableV7&original=https://react-table-v7.tanstack.com/)
- [React Cookie](https://github.com/reactivestack/cookies)
- [Next Themes](https://github.com/pacocoursey/next-themes)

## Features
- [Laravel Sanctum](https://laravel.com/docs/9.x/starter-kits#breeze-and-next) compatible
- Authentication
- Roles & Permissions
- Data Tables
- Dark Mode
- SWR Requests

## Getting Started

### Development
First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

### Production
Build and run your NextJS app.

```bash
npm run build && npm run start
```

### TypeScript
Strict mode is set by default.
```bash
npm run type-check
# or
npm run tc
```