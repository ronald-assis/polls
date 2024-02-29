import fastify from "fastify";
import { z } from "zod"

const app = fastify()
const PORT = 3333

app.post('/poll', (request) => {
  const createPollBody = z.object({
    title: z.string()
  })

  const { title } = createPollBody.parse(request.body)

  console.log(title)
  return "it'll work"
})

app.listen({port: PORT}).then(() =>  {
  console.log(`HTTP server running in ${PORT}`)
})