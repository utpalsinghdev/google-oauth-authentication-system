"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const test_controller_1 = require("./test.controller");
const router = (0, express_1.Router)();
router.get("/health", test_controller_1.healthCheck);
exports.default = router;
