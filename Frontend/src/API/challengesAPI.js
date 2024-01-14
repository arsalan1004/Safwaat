import axios from 'axios';

async function fetchachieveData(id,set) {
    console.log(id);
    const res = await axios.put('http://localhost:8000/userAchievementChallenge/getChallengesData',{
      userId:id
    }); 
    console.log(res.data);
    set(res.data);
  }

  async function fetchchallengesData(id,set) {
    const res = await axios.put('http://localhost:8000/userDailyChallenge/putUserChallenges',{id:id}); 
    console.log(res.data);
    set(res.data);
  }

  export {fetchachieveData,fetchchallengesData}