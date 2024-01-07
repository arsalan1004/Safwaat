import axios from 'axios'

const getNextSlideData = async (slideId) => {
  // if lideId is initially undefined
  if(slideId === undefined) return
  console.log("EnteredNextSLideDATA")
  const API_URL = "http://localhost:3500/learningUnit";

  try {
    console.log(`url: ${API_URL + "/" + slideId}`)
    const response = await axios.get(`${API_URL}/${slideId}`);
    console.log(response);
    return response.data;

  } catch (error) {
    console.log(error)
  }

}

const getUnitData = async () => {

  const API_URL = "http://localhost:3600/learningUnitData";
  // const API_URL = "http://localhost:3600/learningUnitData";

  try {
    const response = await axios.get(API_URL);
    console.log("UnitData response returned")
    return response.data[0];
  } catch (error) {
    console.log(error);
  }
}


const postUnitData = async (data) => {
  console.log("In postUnitData Handler");
  console.log(data);



  // const API_URL = "http://localhost:3600/learningUnitData";
  // try {
  //   const response = await axios.get(API_URL);
  //   return response.data;
  // } catch (error) {
  //   console.log(error);
  // }
}





export {getNextSlideData, getUnitData, postUnitData};