import { z } from 'zod'

export const GetPollParamsSchema = z.object({
  pollId: z.string().uuid(),
})

export type PollIdType = z.infer<typeof GetPollParamsSchema>
