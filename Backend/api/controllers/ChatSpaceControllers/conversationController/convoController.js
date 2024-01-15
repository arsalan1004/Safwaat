const {
  ConversationModel,
} = require("../../../models/ChatSpaceModels/conversation");

const addNewConvo = async (req, res) => {
  const conversation = new ConversationModel({
    members: [req.body.senderId, req.body.receiverId],
  });

  try {
    const savedConversation = await conversation.save();
    res.status(200).json(savedConversation);
  } catch (error) {
    res.status(500).json({ err: error });
  }
};

const getConvo = async (req, res) => {
  try {
    const conversation = await ConversationModel.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json(conversation);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = {
  addNewConvo,
  getConvo,
};
