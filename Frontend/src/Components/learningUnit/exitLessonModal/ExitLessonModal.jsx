import React from 'react';
import ReactDOM from 'react-dom';
import sadCamel from '../../../Assets/Images/sadCamel.png';
import styles from './exitLessonModal.module.css'
import { useNavigate } from 'react-router-dom';
import unitInfo, { unitInfoActions } from '../../../Store/unitInfo';
import { useDispatch } from 'react-redux';
import slideControl, { slideControlActions } from '../../../Store/slideControl';

const ExitLessonModal = (props) => {
  const navigate = useNavigate();
  const dispatch= useDispatch();
  const continueLearningHandler = () => {
    props.exitModalHandler(false)
  }

  const exitLessonHandler = () => {
    dispatch(unitInfoActions.resetUnitInfo());
    dispatch(slideControlActions.resetSlideControl());
    navigate('/')
  }

  const Backdrop = () => {
    return  <div className='fixed top-0 left-0 w-[100%] h-[100%] bg-[rgba(0,0,0,0.25)] z-[3]' />
  }

  const ModalOverlay = (props) => {
    return (
      <div id={styles['exit-lesson-modal']} className='flex bg-[#FFFFFF] flex-col gap-3 justify-center items-center font-Itim w-[50%] rounded-[25px] p-5 z-[4]'>
        <img src={sadCamel} alt='sad-camel' />
        <div className='text-center'>
          <h2 className='text-secondary text-[28px]'>Wait, Don't Leave</h2>
          <p className='text-secondary text-[18px]'>You are doing great, if you leave now </p>
          <p className='text-secondary text-[18px]'>your progress will be lost</p>
        </div>
        <button onClick={() => continueLearningHandler()}
          className='bg-accent text-[#FFFFFF] p-1 px-10 rounded-[10px]'>
          Continue Learning
        </button>
        <button 
          onClick={exitLessonHandler} className='text-wrong'>
          End Lesson Unit
        </button>
    </div>
    )
  }

  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById("backdrop-root"))}
      {ReactDOM.createPortal(<ModalOverlay />, document.getElementById("overlay-root"))}
    </>
  )
}

export default ExitLessonModal