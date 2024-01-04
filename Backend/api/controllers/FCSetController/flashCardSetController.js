const fCModel = require("../../models/FCModel/flashCardSetModel");

const fCSPostController = async (req, res) => {
  const flashCardData = req.body;

  if (flashCardData) {
    try {
      await fCModel.create(flashCardData);
      res.status(201).json("Flashcard Set successfully created.");
    } catch (error) {
      console.log(`Error occured at fCSPostController: ${error}`);
    }
  } else {
    res.status(400).json("No data provided");
  }
};

const fCSGetController = async (req, res) => {
  try {
    const fCSData = await fCModel.find(
      { userId: req.body.userId },
      { userId: 0, updatedAt: 0, createdAt: 0, __v: 0 }
    );

    if (fCSData) {
      const finalData = fCSData.map((card) => {
        return {
          flashCardSetId: card.flashCardSetId,
          title: card.title,
          category: card.category,
          description: card.description,
          cardQty: card.flashCards.length,
        };
      });
      res.status(200).json(finalData);
    } else {
      res.status(404).json({ message: "No Record Found" });
    }
  } catch (error) {
    console.log(`Error occured at fCSGetController: ${error}`);
  }
};

const getSingleFlashCardSet = async (req, res) => {
  try {
    const fCSData = await fCModel.findOne(
      { flashCardSetId: req.params.id },
      { flashCards: 1, _id: 0 }
    );

    if (fCSData) {
      res.status(200).json(fCSData);
    } else {
      res.status(404).json({ message: "No Record Found" });
    }
  } catch (error) {
    console.log(`Error occured at getSingleFlashCardSet: ${error}`);
  }
};

module.exports = {
  fCSPostController,
  fCSGetController,
  getSingleFlashCardSet,
};
