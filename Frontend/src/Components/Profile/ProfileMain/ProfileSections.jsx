import React from 'react'

function ProfileSections() {
  
    const tabsText = ['Statistics', 'Analytics'];


    const moveNext = (no) => {
        console.log('moveNext called!');
        const sectionWrapper = document.getElementById('sectionWrapper2');
        const sections = sectionWrapper.querySelectorAll('div');
        const currentSection = sections[no];
        sections.forEach( 
          (section) => {section.style.borderBottomColor = '#cbd5e1'
        });
        currentSection.style.borderStyle = 'solid';
        currentSection.style.borderBottomColor = '#2D867F';
        currentSection.style.borderBottomWidth = '3px';
        
    }
    
  
  
    return (
        <div className='w-full pl-0 mt-8 flex ' id='sectionWrapper2'>

        {
            tabsText.map(
                (txt, i) => (
                <div className={`h-10 w-1/2 border-r-2 py-1 border-r-slate-300 flex-center cursor-pointer ${i==0 ? 'border-b-[3px] border-b-accent' : 'border-b-2 border-b-slate-300'} border-t-2 border-t-slate-300`}
                    onClick={()=> moveNext(i)}
                    key={i}
                    >
                    <span className='text-center text-secondary font-bold tracking-wide'>{txt}</span>
                </div>
                )
            )
        }
        </div>


        



  )
}

export default ProfileSections