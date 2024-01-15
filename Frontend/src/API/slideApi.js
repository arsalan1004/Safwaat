import axios from "axios";

const getNextSlideData = async (slideId) => {
  // if lideId is initially undefined
  if (slideId === undefined) return;
  console.log("EnteredNextSLideDATA");
  // const API_URL = "http://localhost:3500/learningUnit";
  const API_URL = "http://localhost:8000/api/slides/singleSlide";

  try {
    console.log(`url: ${API_URL + "/" + slideId}`);
    // const response = await axios.get(`${API_URL}/${slideId}`);
    const response = await axios.post(API_URL, {
      slideId: slideId,
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getUnitData = async () => {
  // UnitId passed from component as param
  // const API_URL = "http://localhost:3600/learningUnitData";
  
  // let unitId = "65a22f4aaa8381048ceaacf7";
  let unitId = "65a5348aa4e172572ff91234";
  const API_URL = "http://localhost:8000/api/slides";

  try {
    const response = await axios.post(API_URL, {
      unitId: unitId,
    });
    console.log("UnitData response returned");
    // return response.data[0];
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const postUnitData = async (data) => {
  console.log("In postUnitData Handler");
  console.log(data);

  // return true;

  const API_URL = "http://localhost:8000/api/completeUnit";
  try {
    const response = await axios.post(API_URL, data);
    console.log(response);
  } catch (error) {}
};

export { getNextSlideData, getUnitData, postUnitData };
