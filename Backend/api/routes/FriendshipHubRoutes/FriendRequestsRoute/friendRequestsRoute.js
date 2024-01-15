const Router = require('express').Router();
const {postAddFriendRequest, getFriendshipHubPageData, getFriendData,getUserFriendRequests, patchAcceptFriendRequest,patchRejectFriendRequest, postSearchFriend, postCancelRequest } = require('./../../../controllers/FriendshipHubControllers/UserFriendRequestsController/userFriendRequestController');

Router.post("/send", postAddFriendRequest);
Router.post("/page", getFriendshipHubPageData);
Router.post("/viewInsights", getFriendData);
Router.post("/getFriendRequests", getUserFriendRequests);
Router.post("/accept", patchAcceptFriendRequest);
Router.post("/reject",patchRejectFriendRequest);
Router.post("/search", postSearchFriend);
Router.post("/cancel", postCancelRequest);

module.exports = Router;