//const UsersController = require('./controllers/users.controller');
// const PermissionMiddleware = require('../common/middlewares/auth.permission.middleware');
//const ValidationMiddleware = require('../common/middlewares/auth.validation.middleware');
// const config = require('../common/config/env.config');
const feedbackApi = require('../api/feedbackAPI')
const express = require("express");
const router = express.Router();

router.get('/getFeedbacks', [
    //ValidationMiddleware.validJWTNeeded,
    // PermissionMiddleware.minimumPermissionLevelRequired(PAID),
    feedbackApi.getFeedbacks

]);

module.exports = router;
