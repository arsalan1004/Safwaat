import axios from "axios";

const getStreakRange = async (month, year, id) => {
  console.log("STREAK API CALLED")
  const API_URL = 'http://localhost:8000/streak/calendarData';
  console.log(`userId in StreakCalendar: ${id}`);
  if(month == undefined) {
    console.log("month Undefined: RETURNED")
    return;
  };

  console.log(`month: ${month}`);
  console.log(`year: ${year}`);
  
  try {
    let response = await axios.post(API_URL, {
      id: id,
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

