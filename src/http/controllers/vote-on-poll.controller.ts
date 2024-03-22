import { FastifyReply, FastifyRequest } from 'fastify'
import { PollsService } from '../../services/polls.service'
import { VoteOnPollParamsSchema } from '../../schemas/vote-on-poll.schema'

const pollService = new PollsService()

export const voteOnPollController = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  try {
    const createShema = VoteOnPollParamsSchema.parse(request.params)
    const response = await pollService.voteOnPoll(createShema)

    reply.send(response)
  } catch (error) {
    reply.status(500).send({ message: 'error' })
  }
}
