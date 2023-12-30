const formatData = (learningUnits, userProgress) => {
  try {
    const result = learningUnits.map((unit, index) => {
      if (userProgress[index]) {
        unit.progress = userProgress[index];
        return {
          _id: unit._id,
          unitNumber: unit.unitNumber,
          progress: userProgress[index],
        };
      } else {
        return {
          _id: unit._id,
          unitNumber: unit.unitNumber,
          progress: null,
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
