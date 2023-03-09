"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const shopRouter = (0, express_1.Router)();
shopRouter.get('/', (req, res) => {
    res.send({
        id: 1
    });
});
exports.default = shopRouter;
