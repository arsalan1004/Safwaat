const mongoose = require("mongoose");

const teachingSlideSchema = mongoose.Schema(
  {
    slideType: String,
    content: Object,
  },
  { timestamps: true, collection: "TeachingSlide" }
);

const teachingSlideModel = mongoose.model("TeachingSlide", teachingSlideSchema);

module.exports = {
  teachingSlideModel,
};
