const formatData = (unit) => {
  const formattedUnit = unit;
  formattedUnit.slides = [
    ...unit.slides.teachingSlides,
    ...unit.slides.practiceSlides,
  ];

  return formattedUnit;
};

module.exports = { formatData };
