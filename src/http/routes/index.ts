import { createPollRoutes } from './create-poll.routes'
import { FastifyInstance } from 'fastify'

export const routes = async (app: FastifyInstance) => {
  await app.register(createPollRoutes)

  app.get('/', () => {
    return {
      name: 'polls node',
      description: 'Polls API',
      version: '1',
      developers: 'Ronald Assis',
    }
  })
}
