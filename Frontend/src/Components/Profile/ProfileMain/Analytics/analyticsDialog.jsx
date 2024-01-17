import React, { useEffect, useMemo, useState } from 'react'
import '../../../../App.css'
import { Link, useNavigate } from 'react-router-dom';
import Piechart from './piechart';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BarChart from './lineChart';
import './color.css'
import { getAnalytics } from '../../../../API/analyticsAPI';
import axios from 'axios';
import { useSelector } from 'react-redux';

const AnalyticsDialog = ({frId}) => {
    
    const [monthlyChallengeAnalytics,setmonthlyChallengeAnalytics]=useState([]);
    const [monthlyRewardAnalytics,setmonthlyRewardAnalytics]=useState([]);
    const [weeklyLessonAnalytics,setweeklyLessonAnalytics]=useState([]);
    const [weeklyFlashcardRevisitAnalytics,setweeklyFlashcardRevisitAnalytics]=useState([]);
    const [current, setCurrent] = useState(-1);
    let {id: userId} = useSelector(state => state.login)


    
    useEffect(() => {
      // let userId = '659815525ce38b434230fbe0';
      frId != null ? userId = frId : userId = userId;
      getAnalytics(userId,setmonthlyChallengeAnalytics,setmonthlyRewardAnalytics,setweeklyLessonAnalytics,setweeklyFlashcardRevisitAnalytics);
    }, []);
    

    const achievementData={
        labels: ['DailyChallenges', 'Achievements'],
        datasets: [
          {
            label: 'Monthly Completed Challenges',
            data: monthlyChallengeAnalytics,
            backgroundColor: [
              'rgba(173, 216, 230, 0.3)',
              'rgba(255, 165, 0, 0.3)',
             ],
            borderColor: [
              'rgba(173, 216, 230, 1)',
              'rgba(255, 165, 0, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };

      const RewardData={
        labels: ['Xp Obtained', 'Gems/Trophy Obtained'],
        datasets: [
          {
            label: 'Monthly Rewards Obtained',
            data: monthlyRewardAnalytics,
            backgroundColor: [
              'rgba(173, 216, 230, 0.3)',
              'rgba(255, 165, 0, 0.3)',
             ],
            borderColor: [
              'rgba(173, 216, 230, 1)',
              'rgba(255, 165, 0, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };


      const labels = ["Day 01", "Day 02", "Day 03", "Day 04", "Day 05", "Day 06", "Day 07"];

      
       const LessonData = {
            labels,
            datasets: [
            {
                label: "Lesson Completed Weekly",
                data: weeklyLessonAnalytics,
                backgroundColor: "rgba(29, 209, 161,1.0)"
            }
            ]
        }

        const flashData = {
            labels,
            datasets: [
            {
                label: "Weekly Flashcard Revisited",
                data: weeklyFlashcardRevisitAnalytics,
                backgroundColor: "rgba(29, 209, 161,1.0)"
            }
            ]
        }

        function displayChart(current){
        if(current==1){
            return <BarChart data={LessonData}/>
        }else if(current==2){
            return <Piechart data={RewardData}/>
        }else if(current==3){
            return <BarChart data={flashData}/>
        }
        else{
            return <Piechart data={achievementData}/>
        }
      }

      

      const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1}
      };
    return (
        <div className="w-[70%] mx-[8vw] md:mx-[5vw] mb-4 h-[95%] mt-6 pb-7 max-[600px]:max-w-[75vw] max-[600px]:w-auto overflow-scroll  relative" id='main2'>
        <h1 className='headSign text-[35px] text-center mt-[3vh] mb-4'>User's Analytics</h1>
            <div className="flex justify-center max-h-[60%] text-white">
                {current? displayChart(current):displayChart(current)}
            </div>
            <div className="w-[80%] h-auto ml-[10%] mt-9">
            <Carousel beforeChange={(currentSlide)=>{setCurrent([currentSlide])}} responsive={responsive}>
                <div className='text-center font-Poppins font-medium italic'>Monthly Challenges Completed</div>
                <div className='text-center font-Poppins font-medium italic'>Weekly Lesson Completed</div>
                <div className='text-center font-Poppins font-medium italic'>Monthly Rewards Obtained</div>
                <div className='text-center font-Poppins font-medium italic'>Weekly Flashcard Revisited</div>
            </Carousel>
            </div>
        </div>
  )
}

export default AnalyticsDialog




