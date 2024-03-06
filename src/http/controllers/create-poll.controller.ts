import { FastifyReply, FastifyRequest } from 'fastify'
import {
  createPollService,
  CreatePollBodySchema,
} from '../../services/create-poll.service'

export const createPollController = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  try {
    const createShema = CreatePollBodySchema.parse(request.body)
    const response = await createPollService(createShema)

    reply.send(response)
  } catch (error) {
    reply.status(500).send({ message: 'error' })
  }
}
