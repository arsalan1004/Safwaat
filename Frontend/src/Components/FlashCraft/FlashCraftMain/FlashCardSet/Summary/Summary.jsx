import React from "react";
import { useNavigate } from "react-router-dom";
import FilledButton from "../../../../../UI/Button/FilledButton";
import OutlineButton from "../../../../../UI/Button/OutlineButton";
import thumbsUp from "../../../../../Assets/Icons/thumbsUp.png";
import FlashCardSet from "../FlashCardSet";

function Summary(props) {
  const navigate = useNavigate();

  function navigateHomeHandler() {
    navigate("/");
  }

  const reviewHandler = () => {
    console.log("review Handler called!");
    console.log(props.stillLearning);
    navigate(`/${props.id}`, { state: { reviewData: props.stillLearning } });
  };

  return (
    <div className="h-screen w-screen bg-primary-100 flex justify-center items-center text-Itim">
      <div className="w-full md:w-3/5 h-full grid grid-rows-8 mx-10 md:mx-0">
        <div className="flex-center row-start-1 row-span-2">
          <img src={props.img} alt="performance icon" />
          <p className="ml-5 md:ml-10 font-Montserrat font-semibold text-secondary text-xl  md:text-[26px] text-center">
            {props.text1}
            <br /> {props.text2}
          </p>
        </div>

        <div className="flex-center row-start-3 row-span-3">
          <div className="mr-16">
            {props.status == "still" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 60 60"
                fill="none"
              >
                <path
                  d="M30 0C13.4315 0 0 13.4315 0 30C0 35.2591 1.35327 40.2022 3.73059 44.5L9.03705 41.5C7.16129 38.088 6.09431 34.1686 6.09431 30C6.09431 16.7973 16.7973 6.09431 30 6.09431V0Z"
                  fill="#E01111"
                />
                <path
                  d="M30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0V6.09431C43.2028 6.09431 53.9057 16.7973 53.9057 30C53.9057 43.2028 43.2028 53.9057 30 53.9057C20.9659 53.9057 13.1022 48.8944 9.03705 41.5L3.73059 44.5C8.84284 53.742 18.6906 60 30 60Z"
                  fill="#0ACF1E"
                />
              </svg>
            ) : (
              <img src={thumbsUp} />
            )}
          </div>

          <div className="flex-col">
            <div className="flex items-center justify-end mb-3">
              <span className="mr-10 text-correct text-xl md:text-2xl text-left w-4/5">
                Known
              </span>
              <div className="relative ml-8">
                <span className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-correct ">
                  {props.noLearnt}
                </span>
                <svg
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z"
                    fill="#AAF491"
                  />
                </svg>
              </div>
            </div>

            <div className="flex-center">
              <span className="mr-10 text-wrong text-xl md:text-2xl">
                Still Learning
              </span>
              <div className="relative ml-8">
                <span className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-wrong">
                  {props.noStillLearning}
                </span>
                <svg
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z"
                    fill="#F98C8C"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-center flex-col gap-7 row-start-6 row-span-3">
          <div className="w-4/6 md:w-3/5 lg:2/5 xl:2/5">
            <FilledButton
              clickHandler={
                props.status == "still" ? reviewHandler : navigateHomeHandler
              }
            >
              {props.buttonText}
            </FilledButton>
          </div>
          <div className="w-4/6 md:w-3/5 lg:2/5 xl:2/5">
            <OutlineButton clickHandler={() => window.location.reload()}>
              Restart FlashCard
            </OutlineButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
