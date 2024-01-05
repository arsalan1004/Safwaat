const streakRecord = require('./../../../models/StreakRecordModel/streakRecordModel');
const User = require('./../../../models/UserModel/userModel');


// const splitDate = (date) => {
//     return {
//         day: date.slice(4,6).trim(),
//         month: date.slice(0,3),
//         year: date.slice(date.length - 4, date.length)
//     };  
// };


//http://localhost:5000/streak/calendarData
const getStreakCalendarData = async(req, res) => {
    // console.log("API HIt");
    // console.log("Body", req.body);
    // console.log(req.params.month, req.params.id, req.params.year);
    let userId = req.body.id;
    // let userId = req.query.id;
    // Q: Zain , kya index hi bhejo ge direct , like 11 For Dec, ya uski real sequence bhejo ge , like 12 for Dec?
    let monthNumber = parseInt(req.body.month);
    let year = req.body.year;
    // let monthNumber = parseInt(req.query.month);
    // let year = req.query.year;

    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let month = months[monthNumber];
    // console.log(`The request is : month: ${req.body.month}, and year: ${req.body.year} and id : ${req.body.id}`);
    // console.log(userId, "   ", month, "    ", year);
    try{
        let user = await User.findOne({_id: userId});
        // console.log(`User: ${user}`);
        let responseData = {
            start: null,
            end: null,
            streakCount: user.streak
        };
        let StreakRecord = await streakRecord.findOne({playerID: userId});
        // console.log(StreakRecord);
        let StreakData = StreakRecord.streakData;

        StreakData.map(async(streak) => {

            //startDate
            if(streak.startDate){
                monthOfStartDate = streak.startDate.slice(0,3);
                dayOfStartDate = streak.startDate.slice(4,6).trim();
                yearOfStartDate = streak.startDate.slice(streak.startDate.length - 4,streak.startDate.length);
                // {dayOfStartDate, monthOfStartDate, yearOfStartDate} = splitDate(streak.startDate);
                // console.log("start",yearOfStartDate);
            }
            //endDate
            if(streak.endDate){
                monthOfEndDate = streak.endDate.slice(0,3);
                dayOfEndDate = streak.endDate.slice(4,6).trim();
                yearOfEndDate = streak.endDate.slice(streak.endDate.length - 4,streak.endDate.length);
                // { dayOfEndDate, monthOfEndDate, yearOfEndDate} = splitDate(streak.endDate);
                // console.log("End",yearOfEndDate)
            }

            if(streak.startDate && monthOfStartDate==month && yearOfStartDate==year){
                // responseData.start = parseInt(dayOfStartDate);
                if(streak.endDate){
                    if(monthOfEndDate==month && yearOfEndDate==year){
                        responseData.start = parseInt(dayOfStartDate);
                        responseData.end = parseInt(dayOfEndDate);
                    } else{
                        //It means, end date is in next month.
                        //so return the last date of MOnth.
                        //Now checking for last month.
                        if(["Jan", "Mar", "May", "Jul", "Aug", "Oct", "Dec"].includes(monthOfStartDate)){
                            responseData.start = parseInt(dayOfStartDate);
                            responseData.end = 31;
                        } else if(["Apr", "Jun", "Sep", "Nov"].includes(monthOfStartDate)){
                            responseData.start = parseInt(dayOfStartDate);
                            responseData.end = 30;
                        } else{
                            responseData.start = parseInt(dayOfStartDate);
                            responseData.end = 28;
                        }
                    }
                } else{
                    //ask Zain about this, whether to send the same date, aur incremented by 1 date, when user present for only one day. means he only completed lesson on 29th , then ghayab.
                    // responseData.end = parseInt(dayOfStartDate);

                    // is par bhi start ko dobara null krdo, bcoz, user ka streak abhi start nhi hua .
                    // console.log("Doing nothing bcoz User is not consistent in this range.");
                }
            }
            else if(streak.endDate && monthOfEndDate==month && yearOfEndDate==year){
                responseData.start = 1;
                responseData.end = parseInt(dayOfEndDate);

            } else{
                // console.log("Continue, current streak is inconsistent");
            }

        });
        // console.log("Response Sending; ", responseData);
        res.status(200).json(responseData);

    } catch(error){
        res.status(500).json({success: false, message: "Internal Server Error.", Error: error});
    }
};

module.exports = {
    getStreakCalendarData
}