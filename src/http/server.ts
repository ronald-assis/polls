import fastify from 'fastify'

import { routes } from './routes'

const app = fastify()
const PORT = 3333

app.register(routes, { prefix: '/api' })

app.listen({ port: PORT }).then(() => {
  console.log(`HTTP server running in ${PORT}`)
})
