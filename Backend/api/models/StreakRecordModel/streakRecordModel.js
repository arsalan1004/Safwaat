const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const streakRecordSchema = new Schema({
    playerID: String,
    streakData : [
        {
            startDate: String,
            endDate: String
        }
    ]
},{
    timestamps: true,
    collection: "StreakRecord"
});

const streakRecord = mongoose.model('StreakRecord', streakRecordSchema);

module.exports = streakRecord;