import { FastifyInstance } from 'fastify'

import { getPollController } from '../controllers/get-poll.controller'

export async function getPollRoutes(app: FastifyInstance) {
  app.get('/polls/:pollId', getPollController)
}
