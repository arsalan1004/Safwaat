import axios from "axios";

async function fetchXpData(id,setXD,setUL) {
    let userData={
      id: id
    }
    const res = await axios.post('http://localhost:8000/xpleaderboard/members',userData); 
    setXD(res.data.members);
    console.log(xpData);
    setUL([res.data.league,res.data.levelText]);
  }

  async function fetchStreakData(setSD) {
    const res = await axios.get('http://localhost:8000/streakLeaderboard/members'); 
    setSD(res.data);
  }

export {fetchStreakData,fetchXpData}