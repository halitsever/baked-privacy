
const fastify = require('fastify')({ logger: true })
import {ReplyDefault} from "fastify/types/utils";


const bootstrap = async () => {
    try {
        await fastify.listen({ port: 3000 })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
bootstrap();