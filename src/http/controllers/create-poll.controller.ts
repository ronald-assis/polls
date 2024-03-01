import { FastifyReply, FastifyRequest } from 'fastify'
import {
  createPollUsecase,
  CreatePollBody,
} from '../../usecases/create-poll.usecase'

export const createPollController = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  try {
    const createShema = CreatePollBody.parse(request.body)
    const response = await createPollUsecase(createShema)

    reply.send(response)
  } catch (error) {
    reply.status(500).send({ message: 'error' })
  }
}
