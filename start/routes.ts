/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import Env from '@ioc:Adonis/Core/Env'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.get('/bake-cookie', ({ response }) => {
  response.cookie(String(Env.get('TEST_COOKIE')), 'Oatmeal', {
    maxAge: 60 * 60 * 24 * 7,
    sameSite: 'none',
    secure: true,
    httpOnly: true,
  })

  return response.ok({ value: 'cookie baked!' })
})

Route.get('/eat-cookie', ({ response, request }) => {
  const cookieValue = request.cookie(String(Env.get('TEST_COOKIE')))
  return response.ok({ value: cookieValue })
})
