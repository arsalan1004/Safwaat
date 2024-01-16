import React, {useState} from 'react'
import boy from '../../../../Assets/Images/boy.png';
import FriendBox from './FriendBox';
import ProfileHeader from '../../../Profile/ProfileHeader/ProfileHeader';


function InsightsMain({data}) {



  const [insightsData, setInsightsData] = useState([]); 
  const [sectionNo, setSectionNo] = useState(0);

  const tabsText = ['Safwaat Friends', 'Pending Requests', 'Sent Requests'];

  const friends = data.friendList;


const moveNext = (no) => {
    console.log('moveNext called!');
    setSectionNo(no);
    const sectionWrapper = document.getElementById('sectionWrapper');
    const sections = sectionWrapper.querySelectorAll('div');
    const currentSection = sections[no];
    sections.forEach( 
      (section) => {section.style.borderBottomColor = '#cbd5e1'
    });
    currentSection.style.borderStyle = 'solid';
    currentSection.style.borderBottomColor = '#2D867F';
    currentSection.style.borderBottomWidth = '3px';
    // getResultsHandler();
}

// async function getResultsHandler () {
//   const userId = "655ba0b013679c0e8c33e9cd";

//   const response = await fetch(
//     "http://localhost:8000/api/FriendshipHub/Insights",
//     {
//       method: "POST",
//       body: JSON.stringify({
//         userId: userId,
//         name: 'PendingRequests',
//       }),
//       headers: {
//         "Content-Type": "application/json"
//       }
//     }
//   );

//   console.log('response of getResultsHandler: ', response);
//   setInsightsData(response.data);

// }

  return (
    <div className='h-screen w-3/4 pt-5  text-secondary overflow-y-auto '>
      
      {/* User Profile */}
      <ProfileHeader data={data.userData} />

  
    {/* Tabs Section */}
      <div className='w-full pl-0 mt-8 flex ' id='sectionWrapper'>

        {
          tabsText.map(
            (txt, i) => (
              <div className={`h-10 w-1/3 border-r-2 py-1 border-r-slate-300 flex-center cursor-pointer ${i==0 ? 'border-b-[3px] border-b-accent' : 'border-b-2 border-b-slate-300'} border-t-2 border-t-slate-300`}
                onClick={()=> moveNext(i)}
                key={i}
                >
                <span className='text-center text-secondary font-bold tracking-wide'>{txt}</span>
            </div>
            )
          )
        }

      </div>

      {/* Friend Box Section */}
      <div className='mt-8 pl-10'>
       <div className='rounded-xl w-3/4 bg-primary-200 p-1'>
        {/* FriendBox */}
        {
          friends.map(
            (val,i) => (
              <FriendBox
                key={i} 
                name={val.fullName}
                userName={val.username}  
                level={val.level}
                xp={val.xp}
                secNo = {sectionNo}
              />
            )
          )
        }
       </div>
        
      </div>


    </div>
  )
}

export default InsightsMain

