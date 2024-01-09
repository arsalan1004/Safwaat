const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// const sysAchievementChallengeRoute = require('./api/routes/sysChallengesRoutes/sysAchievementChallengeRoute/sysAchievementChallengeRoute');
// const sysDailyChallengeRoute = require('./api/routes/sysChallengesRoutes/sysDailyChallengeRoute/sysDailyChallengeRoute');
// const userRoute = require('./api/routes/userRoute/userRoute');
const userDailyChallengesRoute = require('./api/routes/userChallengesroutes/userDailyChallengesRoute/userDailyChallengeRoute');
const userAchievementChallengesRoute = require('./api/routes/userChallengesroutes/userAchievementChallengesRoute/userAchievementChallenges');


const app = express();
app.use(cors());
app.use(bodyParser.json());
require('./config/db');
require('dotenv').config();

// app.use("/sysAchievementChallenge", sysAchievementChallengeRoute);
// app.use("/sysDailyChallenge", sysDailyChallengeRoute);
// app.use("/user",userRoute);
app.use("/userDailyChallenge", userDailyChallengesRoute);
app.use("/userAchievementChallenge", userAchievementChallengesRoute);


let port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running on  http://localhost:${port}`));