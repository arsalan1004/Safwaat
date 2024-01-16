import React, {useState} from 'react'
import boy from '../../../../Assets/Images/boy.png';
import FriendBox from './FriendBox';
import ProfileHeader from '../../../Profile/ProfileMain/ProfileHeader/ProfileHeader';
import noResult from '../../../../Assets/Gifs/noResult.gif';

function InsightsMain({data}) {



  const [friends, setFriends] = useState(data.friendList); 
  const [sectionNo, setSectionNo] = useState(0);

  const tabsText = ['Safwaat Friends', 'Pending Requests', 'Sent Requests'];

  


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
    
    
    getResultsHandler(no);
}

async function getResultsHandler (no) {
  const userId = "65a297b2b32acbfdbde8a217";
  let response;
  let responseData;
  console.log('inside getResultsHandler');

  switch(no){
    case 0:
      console.log('entered case 0');
      response = await fetch(
      'http://localhost:8000/api/friendshiphub/viewInsights',
      
        {
          method: 'POST',
          body: JSON.stringify({userId}),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      
      );

      responseData = await response.json();
  
      console.log('response Friend list: ' , responseData.friendList);
      setFriends(responseData.friendList);

      break;

    case 1:

      console.log('entered case 1');
      response = await fetch(
      "http://localhost:8000/api/FriendshipHub/getFriendRequests",
      {
        method: "POST",
        body: JSON.stringify({userId}),
        headers: {
          "Content-Type": "application/json"
        }
        }
      );
  
      responseData = await response.json();
  
      console.log('response case 1: ' , responseData);

      console.log('response incoming : ' , responseData.incoming);
      setFriends(responseData.incoming);

      break;

    case 2:
      console.log('entered case 2');
      response = await fetch(
        "http://localhost:8000/api/FriendshipHub/getFriendRequests",
        {
          method: "POST",
          body: JSON.stringify({userId}),
          headers: {
            "Content-Type": "application/json"
          }
          }
        );
    
        responseData = await response.json();
    
        console.log('response case 2: ' , responseData);
  
        console.log('response outgoing : ' , responseData.outgoing);
        setFriends(responseData.outgoing);
  
        break;


  }
 

}

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
      <div className='mt-8 flex-center mb-4'>
        {
          friends.length != 0 ?
          (
            <div className='rounded-xl w-[96%] s4:w-[80%] bg-primary-200 p-1'>
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
                    id={(val.id) ? val.id : (val.senderId) ? val.senderId : (val.receiverId) }
                    secNo = {sectionNo}
                    fetchSectionDataHandler={getResultsHandler}
                  />
                )
              )
            }
           </div>
          )
        

        :

        (<div className='flex flex-col items-center w-full'>
            <h1 className='font-bold italic mt-10 mx-auto text-lg text-slate-500'>{
              sectionNo == 0 ? 'Explore more profiles and send friend requests to grow your connections.' :
              sectionNo == 1 ? "You're all caught up, no incoming friend requests at the moment." :
              "You're all caught up, no incoming friend requests at the moment."
            }</h1>
            <img src={noResult} className='h-56 w-56' />
        </div> 
                        
        ) 
        
      }
        
      </div>


    </div>
  )
}

export default InsightsMain

