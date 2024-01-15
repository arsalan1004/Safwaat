import axios from "axios";

const API_URL = 'http://localhost:8000/streak/calendarData';

const getStreakRange = async (month, year) => {
  console.log("STREAK API CALLED")

  if(month == undefined) {
    console.log("month Undefined: RETURNED")
    return;
  };

  console.log(`month: ${month}`);
  console.log(`year: ${year}`);
  
    const id =  "659815525ce38b434230fbe0";

  
  // `${API_URL}/streak/calendarData?id=${id}&month=${month}&year=${year}`
  try {


    let response = await axios.post(API_URL, {
      id: "659815525ce38b434230fbe0",
      month: month,
      year: year
    });

    console.log(`In streakApi: ${response}`)
    return response.data

  } catch (error) {
    console.log(error)
  }
  
  

}

export {getStreakRange}

