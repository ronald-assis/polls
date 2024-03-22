import { z } from 'zod'

export const CreatePollBodySchema = z.object({
  title: z.string(),
  options: z.array(z.string()),
})

export type PollType = z.infer<typeof CreatePollBodySchema>
