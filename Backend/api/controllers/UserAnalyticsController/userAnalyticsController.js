const Analytics = require('./../../models/userAnalyticsModel/userAnalyticsModel');

const {userModel} = require('./../../models/UserModel/userModel');

const getUserAnalytics = async(req, res) => {
    let userId = req.params.userId;
    try{
        let analytics = await Analytics.findOne({
            playerId: userId
        });
        res.status(200).json(
            analytics
        );

    } catch{
        res.status(500).json({
            success: false,
            message: "Internal Server Error, when getting Analytics data."
        })
    }
};

const AnalyticsForAll = async(req, res) => {
    let users = await userModel.find({});
    for(let i=0; i<users.length; i++){
        let newAnalytics = new Analytics({
            playerId: users[i]._id,
            monthlyChallengeAnalytics: {
                dailyCompleted: 0,
                achievementCompleted: 0
            },
            monthlyRewardAnalytics: {
                xp: 0,
                gem:0,
                trophy: 0
            },
            weeklyLessonAnalytics: [0],
            weeklyFlashcardRevisitAnalytics: [0]
        });
        await newAnalytics.save();
    }
    res.end();
};

const updateAnalytics = async(req, res) => {
    //need userId, context: fc-visit, ls-com, xp, gem, trophy, daily-ch, ach-ch, add

    let {userId, context, add} = req.body;
    let analytics = Analytics.findOne({
        playerId: userId
    });
    switch(context){
        case 'fc-visit':
            analytics.weeklyFlashcardRevisitAnalytics[analytics.weeklyFlashcardRevisitAnalytics.length-1] += add;
            await analytics.save();
            break;
        case 'ls-com':
            analytics.weeklyLessonAnalytics[analytics.weeklyLessonAnalytics.length-1] += 1;
            await analytics.save();
            break;
        case 'xp':
            analytics.monthlyRewardAnalytics.xp += add;
            await analytics.save();
            break;
        case 'gem':
            analytics.monthlyRewardAnalytics.gem += add;
            await analytics.save();
            break;
        case 'trophy':
            analytics.monthlyRewardAnalytics.trophy += add;
            await analytics.save();
            break;
        case 'daily-ch':
            analytics.monthlyChallengeAnalytics.dailyCompleted += add;
            await analytics.save();
            break;
        case 'ach-ch':
            analytics.monthlyChallengeAnalytics.achievementCompleted += add;
            await analytics.save();
            break;
    }
    res.status(200).end();

};


// work of Schedulars
//changing weekly to 0s. and monthly to [].
//changing daily data.

// 2nd
//weekly schedular
const schedularWeeklyHandler = async() =>{
    return new Promise(async(resolve, reject) => {
        try{
            let Analytics = await Analytics.find({});
            for(let i=0; i<Analytics.length; i++){
                Analytics[i].weeklyFlashcardRevisitAnalytics = [0];
                Analytics[i].weeklyLessonAnalytics = [0];
                await Analytics[i].save();
            };
            resolve();
        } catch{
            reject();
        }
    })
};

// 3rd
//monthy schedular
const schedularMonthlyHandler = async() => {
    return new Promise(async(resolve, reject) => {
        try{
            let Analytics = await Analytics.find({});
            for(let i=0; i<Analytics.length; i++){
                Analytics[i].monthlyChallengeAnalytics = {
                    dailyCompleted: 0,
                    achievementCompleted: 0
                };
                Analytics[i].monthlyRewardAnalytics = {
                    xp:0,
                    gem:0,
                    trophy:0
                };
                await Analytics[i].save();
            }
        } catch{
            reject();
        }
    })
}

//1st
//Daily Schedular
const schedularDailyTaskForAnalytics = async() => {
    return new Promise(async(resolve, reject) => {
        try{
            let Analytics = await Analytics.find({});
            for(let i=0; i<Analytics.length; i++){
                Analytics[i].weeklyFlashcardRevisitAnalytics.push(0);
                Analytics[i].weeklyLessonAnalytics.push(0);
                await Analytics[i].save();
            };
            resolve();

        } catch{
            reject();
        }
    })
}


module.exports = {
    getUserAnalytics,
    AnalyticsForAll,
    updateAnalytics,
    schedularDailyTaskForAnalytics,
    schedularMonthlyHandler,
    schedularWeeklyHandler,

}