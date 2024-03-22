"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPollRoutes = void 0;
const create_poll_controller_1 = require("../controllers/create-poll.controller");
async function createPollRoutes(app) {
    app.post('/poll', create_poll_controller_1.createPollController);
}
exports.createPollRoutes = createPollRoutes;
