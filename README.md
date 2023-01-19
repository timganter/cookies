# What is this?

This is a basic repo that will write a cookie and read a cookie using [AdonisJs](https://adonisjs.com/).

# Instructions

1. `npm install`
1. Duplicate the `.env.example` file and save as `.env`.
1. Generate an APP_KEY and save it in your new `.env`.
1. `npm run dev`
1. Browse to http://127.0.0.1:3333/bake-cookie to create a cookie.
1. Browse to http://127.0.0.1:3333/eat-cookie to read the cookie. The value should be "Chocolate Chip".
1. The terminal will read the cookie on every request via the `ReadCookieMiddleware.ts` and output the cookie value to the terminal.

# Details

1. Check out the `routes.ts` for the creating/reading of the cookie.
