import axios from "axios";

const API_URL = '';

const getStreakRange = async (month, year) => {
  console.log(month, year);
  try {
    const response = await axios.get(API_URL);
  } catch (error) {
    console.log(error)
  }
  // setTimeout(() => {}, 3000)
  return ({start: 3, end: 13, streakCount: 5});
}
export {getStreakRange}

