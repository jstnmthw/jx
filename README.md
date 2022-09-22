# Jx - Starter kit for NextJS apps.

![ts](https://img.shields.io/github/v/release/jstnmthw/jx?include_prereleases)
![ts](https://img.shields.io/github/workflow/status/jstnmthw/jx/Build)

An opinionated application starter kit to built on NextJS tailored to Laravel Sanctum API. The authentication is mainly focused on using Laravel's backend API which utilizes CRSF token for secure authentication and sessions. 

## Features
- [Laravel Sanctum](https://laravel.com/docs/9.x/starter-kits#breeze-and-next) compatible
- Authentication
- Roles & Permissions
- Data Tables
- Dark Mode
- SWR Requests

## Packages Included

The following are preinstalled and ready out of the box for quick application scaffolding.

- [TailwindCSS](https://tailwindcss.com/)
- [Hero Icons](https://heroicons.com/)
- [Headless UI](https://headlessui.com/)
- [ESLint](https://eslint.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Table](https://tanstack.com/table/v8/?from=reactTableV7&original=https://react-table-v7.tanstack.com/)
- [React Cookie](https://github.com/reactivestack/cookies)
- [Next Themes](https://github.com/pacocoursey/next-themes)

## Getting Started

Create an `.env` file and place your API url.

```bash
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
```

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

## Documentation
### User Model
In order for authentication to work out of the box, some assumptions need to be made. The following is how we assume your User model is set up. Jx checks for the role `Admin` behind the scenes and is what is checked for `/admin/` dashboard.
```json
{
  "id": 1,
  "name": "Justin",
  "email": "hello@example.com",
  "avatar": "https://www.gravatar.com/avatar/xx?d=blank",
  "enabled": true,
  "email_verified": true,
  "created_at": "2022-01-01T00:00:00.000000Z",
  "roles": [
    {
      "id": 1,
      "name": "User"
    },
    {
      "id": 2,
      "name": "Admin"
    }
  ]
}
```