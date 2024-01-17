import React, { useState } from 'react'
import Button from '../../../UI/Button';
import share from '../../../Assets/Icons/share.svg'
import style from './shareButton.module.css'
import whatsApp from '../../../Assets/Icons/whatsapp.svg'
import facebook from '../../../Assets/Icons/facebook.svg'
import twitter from '../../../Assets/Icons/twitter.svg'

const ShareButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const shareExpansionHandler = () => {
    setIsExpanded(isEx => !isEx)
    console.log(`shareExpansionHandler called`)
  }

  const shareOnWhatsApp = () => {
    const whatsappMessage = encodeURIComponent("🎓 Sharpening my Tajweed skills on Safwaat! Just aced another lesson - feeling accomplished! 🌟 Join me in the quest for better Quranic recitation. Let's learn and grow together! #TajweedMastery #QuranLearning 📖"
    );

    // window.location.href = `https://wa.me/?text=${whatsappMessage}`;
    window.open(`https://wa.me/?text=${whatsappMessage}`, '_blank');
    console.log(`shareOnWhatsApp called`)
  }
  const shareOnX = () => {
    const preGeneratedText = "🎓 Sharpening my Tajweed skills on Safwaat! Just aced another lesson - feeling accomplished! 🌟 Join me in the quest for better Quranic recitation. Let's learn and grow together! #TajweedMastery #QuranLearning 📖";

    // window.location.href = `https://twitter.com/intent/tweet?text=${preGeneratedText}`;
    window.open(`https://twitter.com/intent/tweet?text=${preGeneratedText}`, '_blank');


  console.log(`shareOnX called`)
  }
  const shareOnFacebook = () => {
    const shareURL = ' https://960a-203-81-203-153.ngrok-free.app'; // Replace with the URL you want to share
  const quote = 'I just wanted to check my component.';

  const handleShare = () => {
    FB.ui({
      method: 'feed',
      name: "SAFWAAT",
      caption: "Safwaat.com",
      // href: shareURL,
    //   href: shareURL,
    link: shareURL,
    // picture: shareURL,
    //   title: 'Sharing Via FB',
    //   message: 'Checked sending , it is working.',
      caption: 'Reference Documentation',
      description: 'Checkout Safwaat and Improved your learning',
      message: "Checkout Safwaat and Improved your learning"
      
    //   quote: quote,
      
    }, function(response){});
    handleShare();
  console.log(`shareOnFacebook called`)
  }
  
  }


  let shareIconstyle = `w-[20px] h-[20px] ${style['share-btn']} ${isExpanded ? style['expanded'] :""}`
  return (
    <div className={`h-[100px] w-[10%] mx-auto min-w-[100px]`}>
      <button 
          className='mt-4 mx-auto flex gap-2 justify-center items-center bg-accent px-2 py-2 rounded-[10px] text-primary-100' 
          onClick={shareExpansionHandler}
        > 
          <img src={share} alt="restart-slide" className={shareIconstyle}/> Share
      </button>
      {
        isExpanded &&
          <div className={`flex justify-between gap-2 mt-2`}>
            <Button 
              contentType={"icon"}
              color={"correct"}
              content={whatsApp}
              handler={shareOnWhatsApp}
            />
            <Button 
              contentType={"icon"}
              color={"correct"}
              content={facebook}
              handler={shareOnFacebook}
            />
            
            <Button 
              contentType={"icon"}
              color={"correct"}
              content={twitter}
              handler={shareOnX}
            />
          </div>
      }
    </div>

  )
}

export default ShareButton