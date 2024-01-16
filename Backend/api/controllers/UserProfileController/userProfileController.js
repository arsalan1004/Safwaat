const {userModel} = require('./../../models/UserModel/userModel');
const FCModel = require('./../../models/FlashCraft/FCModel/flashCardSetModel');

const getUserStats = async(req, res) => {
    let userId = req.params.userId;
    try{
        let [user, fcSet] = await Promise.all([
            userModel.findById(userId),
            FCModel.find({
                userId: userId
            })
        ])
        //totalXp, streak, gem,  league, FCcounter, trophies
        res.status(200).json({
            xp: user.totalXp,
            streak: user.streak,
            gem: user.gem,
            trophy: user.trophy,
            league: user.league,
            fcSets: fcSet.length
        })
    } catch{
        res.status(500).json({
            success: false,
            message: "Internal Server Error, when getting profile data."
        });
    }
}