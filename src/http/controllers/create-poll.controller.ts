import { FastifyReply, FastifyRequest } from 'fastify'
import { PollService } from '../../services/create-poll.service'
import { CreatePollBodySchema } from '../../schemas/create-poll.schema'

const pollService = new PollService()

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
