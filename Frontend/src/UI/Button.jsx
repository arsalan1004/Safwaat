import React from 'react'
import { Link } from 'react-router-dom';
const Button = ({ contentType, styleType, content, handler}) => {

  const isText = contentType == "text" ? true : false;
  let style = "";
  // Self end in solid accent to tackle alignment of done(single) button same for motivation slide
  let btnStyles = {
    'solid-correct': "button_drop_shadow text-primary-100 bg-correct font-itim text-xl rounded-[40px] py-2 w-40 cursor-pointer",
    'solid-correct-motivation' : "self-end text-primary-100 bg-correct font-itim text-xl rounded-[40px] py-2 w-40 cursor-pointer",
    'solid-accent': "self-end text-primary-100 bg-accent font-itim text-xl rounded-[40px] py-2 w-40 cursor-pointer",
    'solid-wrong': "button_drop_shadow text-primary-100 bg-wrong font-itim text-xl rounded-[40px] py-2 w-40 cursor-pointer",
    'outline-accent': "text-accent border-2 border-accent font-itim text-xl rounded-[40px] py-2 w-40 cursor-pointer"
  }

  // if(styleType == 'solid') {
  //   style = `text-primary-100-100 bg-${color} font-itim text-xl rounded-[40px] py-2 w-40 cursor-pointer`
  // }
  // else if(styleType == 'outline') {
  //   style = `text-${color} border-2 border-${color} font-itim text-xl rounded-[40px] py-2 w-40 cursor-pointer`
  // }
  console.log("BUTTON RENDERED")
  const BtnClickHandler = () => {
    event.stopPropagation();
    console.log("Hello");
    handler()
  }

  return (

    <>
    {
      isText 
      ? 
        (<button className={btnStyles[styleType] ?? ""}
          onClick={(event) => BtnClickHandler(event)}
          
        >
         {content}
        </button>)
      :
      ( 
        <button 
          className='w-[22px] h-[22px] flex justify-center items-center cursor-pointer'>
          <img src={content} className='block'
            onClick={(event) => BtnClickHandler(event)}
          />
        </button>
      )
    }
  </> 
  )
}

export default Button