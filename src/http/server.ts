import fastify from "fastify";
import { PrismaClient } from "@prisma/client"
import { z } from "zod"

const app = fastify()
const PORT = 3333

const prisma = new PrismaClient()

app.post('/poll', async (request, reply) => {
  const createPollBody = z.object({
    title: z.string()
  })

  const { title } = createPollBody.parse(request.body)

  const { id } = await prisma.poll.create({
    data: { title }
  })

  return reply.status(201).send({pollId: id})
})

app.listen({port: PORT}).then(() =>  {
  console.log(`HTTP server running in ${PORT}`)
})