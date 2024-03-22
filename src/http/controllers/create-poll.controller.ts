import { FastifyReply, FastifyRequest } from 'fastify'
import { PollsService } from '../../services/polls.service'
import { CreatePollBodySchema } from '../../schemas/create-poll.schema'

const pollService = new PollsService()

export const createPollController = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  try {
    const createShema = CreatePollBodySchema.parse(request.body)
    const response = await pollService.createPoll(createShema)

    reply.send(response)
  } catch (error) {
    reply.status(500).send({ message: 'error' })
  }
}
