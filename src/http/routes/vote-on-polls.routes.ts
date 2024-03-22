import { FastifyInstance } from 'fastify'

import { voteOnPollController } from '../controllers/vote-on-poll.controller'

export async function voteOnPollRoutes(app: FastifyInstance) {
  app.post('/polls/:pollId/votes', voteOnPollController)
}
