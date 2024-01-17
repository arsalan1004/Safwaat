import axios from "axios"

const getAnalytics  = async (userId,ca,ra,la,fa) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/analytics/get/${userId}`);
      ca([
        response.data.monthlyChallengeAnalytics.dailyCompleted,
        response.data.monthlyChallengeAnalytics.achievementCompleted
      ]);
      ra([
        response.data.monthlyRewardAnalytics.xp,
        (response.data.monthlyRewardAnalytics.gem + response.data.monthlyRewardAnalytics.trophy)
      ]);
      la(response.data.weeklyLessonAnalytics);
      fa(response.data.weeklyFlashcardRevisitAnalytics);
    } catch (error) {
      console.error('Error fetching analytics:', error);
    }
  };



export {getAnalytics}