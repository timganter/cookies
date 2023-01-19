import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Env from '@ioc:Adonis/Core/Env'

export default class ReadCookieMiddleware {
  public async handle({ request }: HttpContextContract, next: () => Promise<void>) {
    const testCookieValue = request.cookie(String(Env.get('TEST_COOKIE')))
    console.log('---------- ReadCookieMiddleware Middleware ---------')
    console.log('request.url', request.url())
    console.log('testCookieValue', testCookieValue)

    await next()
  }
}
