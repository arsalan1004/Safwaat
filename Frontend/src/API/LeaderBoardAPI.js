import axios from "axios";

async function fetchXpData(id,setXD,setUL) {
  console.log("In FetchXpData");
    let userData={
      id: id
    }
    console.log(userData)
    const res = await axios.post('http://localhost:8000/xpleaderboard/members',userData); 
    console.log(res);
    setXD(res.data.members);
    console.log(res.data.league);
    setUL([res.data.league,res.data.levelText]);
  }

  async function fetchStreakData(setSD) {
    console.log("In FetchStreakData");
    const res = await axios.get('http://localhost:8000/streakLeaderboard/members'); 
    console.log(res)
    setSD(res.data);
  }

export {fetchStreakData,fetchXpData}