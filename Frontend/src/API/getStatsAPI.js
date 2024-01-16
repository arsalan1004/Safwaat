import axios from "axios"

const getStats  = async (setTotalXP,setHighestStreak,setTotalGems,setCurrentLeague,setTotalTrophies,setTotalFlashCards) => {
    try {
      const response = await axios.get("http://localhost:8000/api/userStats/get/65a297b2b32acbfdbde8a217");
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