const Router = require('express').Router();
const {getFriends} = require('./../../../controllers/FriendshipHubControllers/UserFriendListController/userFriendListController');

Router.post("/friendsList", getFriends);

module.exports = Router;