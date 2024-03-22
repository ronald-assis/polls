"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPollController = void 0;
const polls_service_1 = require("../../services/polls.service");
const get_poll_schema_1 = require("../../schemas/get-poll.schema");
const pollService = new polls_service_1.PollsService();
const getPollController = async (request, reply) => {
    try {
        const createShema = get_poll_schema_1.GetPollParamsSchema.parse(request.params);
        const response = await pollService.getPoll(createShema);
        reply.send(response);
    }
    catch (error) {
        reply.status(500).send(error);
    }
};
exports.getPollController = getPollController;
