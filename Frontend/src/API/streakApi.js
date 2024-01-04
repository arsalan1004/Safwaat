import axios from "axios";

const API_URL = 'http://localhost:5000/streak/calendarData';

const getStreakRange = async (month, year) => {
  console.log("STREAK API CALLED")

  if(month == undefined) {
    console.log("month Undefined: RETURNED")
    return;
  };

  console.log(`month: ${month}`);
  console.log(`year: ${year}`);
  
    const id =  "65901f9ae137a46acf78c715";

  
  // `${API_URL}/streak/calendarData?id=${id}&month=${month}&year=${year}`
  try {
    // let response = await axios.get(API_URL)
    // console.log(response)

    let response = await axios.post(API_URL, {
      id: "65901f9ae137a46acf78c715",
      month: month,
      year: year
    });
      console.log(response)
    return response.data
  } catch (error) {
    // console.log(error)
  }
  
  
  // return ({start: 3, end: 13, streakCount: 13-3});
}

export {getStreakRange}

