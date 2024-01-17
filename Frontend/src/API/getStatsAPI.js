import axios from "axios"

const getStats  = async (setTotalXP,userId,setHighestStreak,setTotalGems,setCurrentLeague,setTotalTrophies,setTotalFlashCards) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/userStats/get/${userId}`);
      setTotalXP(response.data.xp);
      setHighestStreak(response.data.streak);
      setTotalGems(response.data.gem);
      setCurrentLeague(response.data.league);
      setTotalTrophies(response.data.trophy);
      setTotalFlashCards(response.data.fcSets);
    } catch (error) {
      console.error('Error fetching analytics:', error);
    }
  };



export {getStats}