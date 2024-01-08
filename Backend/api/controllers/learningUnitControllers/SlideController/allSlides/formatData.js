const formatData = (unit) => {

  return {
    perStarXp: unit.perStarXp,
    numOfQuestions: unit.slides.practiceSlides.length,
    slides: [
      ...unit.slides.teachingSlides,
      ...unit.slides.practiceSlides,
    ]
  };
};

module.exports = { formatData };
