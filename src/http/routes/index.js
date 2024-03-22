"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const create_poll_routes_1 = require("./create-poll.routes");
const get_polls_routes_1 = require("./get-polls.routes");
const routes = async (app) => {
    await app.register(create_poll_routes_1.createPollRoutes);
    await app.register(get_polls_routes_1.getPollRoutes);
    app.get('/', () => {
        return {
            name: 'polls node',
            description: 'Polls API',
            version: '1',
            developers: 'Ronald Assis',
        };
    });
};
exports.routes = routes;
