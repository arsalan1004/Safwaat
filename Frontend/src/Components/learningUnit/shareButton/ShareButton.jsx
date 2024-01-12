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
    console.log(`shareOnWhatsApp called`)
  }
  const shareOnX = () => {
  console.log(`shareOnX called`)
  }
  const shareOnFacebook = () => {
  console.log(`shareOnFacebook called`)
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