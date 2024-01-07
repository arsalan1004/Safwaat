const mongoose = require("mongoose");

const FlashCardSetSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    flashCards: Array,
    flashCardSetId: Number,
  },
  {
    collection: "FlashCardSet",
    timestamps: true,
  }
);

module.exports = mongoose.model("FlashCardSet", FlashCardSetSchema);
