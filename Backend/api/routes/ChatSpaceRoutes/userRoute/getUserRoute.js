const getUserRouter = require("express").Router();
const  mongoose  = require("mongoose");
const { userModel } = require("../../../models/ChatSpaceModels/userModel");

getUserRouter.get("/:userId", async (req, res) => {
  try {
    // const objectId =  mongoose.Types.ObjectId(req.params.userId);
    const userData = await userModel.findOne({_id: req.params.userId})
    // console.log(`userData: ${userData}`);
    // console.log(`_id: ${req.params.userId}`);
    res.status(200).json(userData);
  } catch (error) {
    console.log(`Error in getUserRouter: ${error}`);
    res.status(500).json(error);
  }
});

module.exports = {
  getUserRouter,
};
