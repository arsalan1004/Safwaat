const formatData = (learningUnits, userProgress) => {
  try {
    const result = learningUnits.map((unit, index) => {
      if (userProgress[index]) {
        return {
          learningUnitId: unit?._id,
          unitNumber: unit?.unitNumber,
          starsEarned: userProgress[index].starsEarned,
        };
      } else {
        return {
          learningUnitId: unit?._id,
          unitNumber: unit?.unitNumber,
          starsEarned: null,
        };
      }
    });

    if (result) {
      return result;
    } else {
      return null;
    }
  } catch (error) {
    console.log(`Error occured at formatData in learning unit: ${error}`);
    return null;
  }
};

module.exports = {
  formatData,
};
