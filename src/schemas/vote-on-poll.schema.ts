import { z } from 'zod'

export const VoteOnPollBodySchema = z.object({
  pollOptionsId: z.string().uuid(),
})

export const VoteOnPollParamsSchema = z.object({
  pollOptionsId: z.string().uuid(),
})

export type VoteOnPollType = z.infer<typeof VoteOnPollBodySchema>
