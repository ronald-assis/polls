import { prisma } from '../lib/prisma'
import { CreatePollBodySchema, PollType } from '../schemas/create-poll.schema'

export class PollService {
  async createPoll(data: PollType) {
    const { title } = CreatePollBodySchema.parse(data)

    const poll = await prisma.poll.create({
      data: {
        title,
      },
    })

    return { pollId: poll.id }
  }
}
