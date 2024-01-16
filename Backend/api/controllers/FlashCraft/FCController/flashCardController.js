const fCModel = require("../../models/FCModel/flashCardSetModel");

const fCPostController = async (req, res) => {
  const flashCard = req.body;
  const appendingData = {
    term: flashCard.term,
    definition: flashCard.definition,
  };
  if (flashCard) {
    try {
      const flashCardSet = await fCModel.findOne({ _id: flashCard.id });
      flashCardSet.flashCards = [...flashCardSet.flashCards, appendingData];
      console.log(flashCardSet.flashCards);

      try {
        await fCModel.findOneAndUpdate(
          { _id: flashCardSet._id },
          { $set: { flashCards: flashCardSet.flashCards } },
          { new: true }
        );
        res.status(201).json("Flashcard Set successfully updated.");
      } catch (error) {
        console.log(
          `Error occured at fCPostController findOneAndUpdate: ${error}`
        );
      }
    } catch (error) {
      console.log(`Error occured at fCPostController: ${error}`);
    }
  } else {
    res.status(400).json("No Data Provided");
  }
};

module.exports = {
  fCPostController,
};
