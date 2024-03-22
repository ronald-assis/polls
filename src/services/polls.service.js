"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PollsService = void 0;
const prisma_1 = require("../lib/prisma");
const create_poll_schema_1 = require("../schemas/create-poll.schema");
const get_poll_schema_1 = require("../schemas/get-poll.schema");
const vote_on_poll_schema_1 = require("../schemas/vote-on-poll.schema");
class PollsService {
    async createPoll(data) {
        const { title, options } = create_poll_schema_1.CreatePollBodySchema.parse(data);
        const poll = await prisma_1.prisma.poll.create({
            data: {
                title,
                options: {
                    createMany: {
                        data: options.map((option) => ({
                            title: option,
                        })),
                    },
                },
            },
        });
        return { pollId: poll.id };
    }
    async getPoll(id) {
        const { pollId } = get_poll_schema_1.GetPollParamsSchema.parse(id);
        const poll = await prisma_1.prisma.poll.findUnique({
            where: {
                id: pollId,
            },
            include: {
                options: {
                    select: {
                        id: true,
                        title: true,
                    },
                },
            },
        });
        return poll;
    }
    async voteOnPoll(vote) {
        const { pollOptionsId } = vote_on_poll_schema_1.VoteOnPollBodySchema.parse(vote);
        return pollOptionsId;
    }
}
exports.PollsService = PollsService;
