import { FastifyReply, FastifyRequest } from 'fastify'

import { PollsService } from '../../services/polls.service'
import { GetPollParamsSchema } from '../../schemas/get-poll.schema'

const pollService = new PollsService()

export const getPollController = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  try {
    const createShema = GetPollParamsSchema.parse(request.params)
    const response = await pollService.getPoll(createShema)

    reply.send(response)
  } catch (error) {
    reply.status(500).send(error)
  }
}
