import { FastifyInstance } from 'fastify'

import { createPollController } from '../controllers/create-poll.controller'

export async function createPollRoutes(app: FastifyInstance) {
  app.post('/poll', createPollController)
}
