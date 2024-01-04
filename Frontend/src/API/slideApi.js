import axios from 'axios'
import audioFile from '../assets/audio/testAudio.mp3'

const getNextSlideData = async (slideId) => {
  // SlideId is initially undefined
  if(slideId === undefined) return
  console.log("EnteredNextSLideDATA")
  const API_URL = "http://localhost:3500/learningUnit";

  try {
    console.log(`url: ${API_URL + "/" + slideId}`)
    const response = await axios.get(`${API_URL}/${slideId}`);
    console.log(response);
    return response.data;
    // return ({
    //   slideType: "mcq",
    //   content: {
    //     mcqOptions: ["A", "B", "C", "D"],
    //     mcqQuestion: "Which one is used to pronounce Dad?",
    //     correctAnswer: 3,
    //     selectedOption: -1
    //   }
    // });
  } catch (error) {
    console.log(error)
  }

}

const getUnitData = async () => {

  const API_URL = "http://localhost:3600/learningUnitData";

  try {
    const response = await axios.get(API_URL);
    console.log("UnitData response returned")
    return response.data[0];
  } catch (error) {
    console.log(error);
  }
}

// const getAudioData = async () => {
//   const audioBlob = new Blob([audioFile], { type: 'audio/mpeg' });
//   const audioUrl = URL.createObjectURL(audioBlob);
//   return audioUrl;
// }

const postUnitData = async () => {

  // const API_URL = "http://localhost:3600/learningUnitData";

  // try {
  //   const response = await axios.get(API_URL);
  //   return response.data;
  // } catch (error) {
  //   console.log(error);
  // }
}


// const getUnitInfoData = async (unitNo) => {
//   try {
//     // const API_URL = "http://localhost:3500/learningUnit";
//     // const response = await axios.get();
//     // return {

//     // }

//   }
// }




export {getNextSlideData, getUnitData, postUnitData};