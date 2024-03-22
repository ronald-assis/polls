import { createPollRoutes } from './create-poll.routes'
import { FastifyInstance } from 'fastify'
import { getPollRoutes } from './get-polls.routes'

export const routes = async (app: FastifyInstance) => {
  await app.register(createPollRoutes)
  await app.register(getPollRoutes)

  app.get('/', () => {
    return {
      name: 'polls node',
      description: 'Polls API',
      version: '1',
      developers: 'Ronald Assis',
    }
  })
}
