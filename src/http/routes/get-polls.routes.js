"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPollRoutes = void 0;
const get_poll_controller_1 = require("../controllers/get-poll.controller");
async function getPollRoutes(app) {
    app.get('/polls/:pollId', get_poll_controller_1.getPollController);
}
exports.getPollRoutes = getPollRoutes;
