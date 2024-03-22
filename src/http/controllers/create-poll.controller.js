"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPollController = void 0;
const polls_service_1 = require("../../services/polls.service");
const create_poll_schema_1 = require("../../schemas/create-poll.schema");
const pollService = new polls_service_1.PollsService();
const createPollController = async (request, reply) => {
    try {
        const createShema = create_poll_schema_1.CreatePollBodySchema.parse(request.body);
        const response = await pollService.createPoll(createShema);
        reply.send(response);
    }
    catch (error) {
        reply.status(500).send({ message: 'error' });
    }
};
exports.createPollController = createPollController;
