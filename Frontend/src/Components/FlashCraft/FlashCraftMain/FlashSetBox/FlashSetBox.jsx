import React from "react";
import { Link, useNavigate } from "react-router-dom";

import OutlineButton from "../../../../UI/Button/OutlineButton";
import DeleteButton from "../../../../UI/Button/DeleteButton";
import InvertedButton from "../../../../UI/Button/InvertedButton";

function FlashSetBox({ obj }) {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate(`/FlashCraft/${obj.flashCardSetId}`);
  }

  async function deleteHandler() {
    const userId = "655ba0b013679c0e8c33e9cd";
    const response = await fetch(
      "http://localhost:8000/api/FlashCraft/delete",
      {
        method: "DELETE",
        body: JSON.stringify({
          userId: userId,
          flashCardSetId: obj.flashCardSetId,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("response: ", response);
    return response;
  }
  return (
    <div className="flex-center">
      <div className="w-5/6 min-h-15 bg-white rounded-3xl px-7 py-5 border-2 border-solid border-gray-200">
        <div className="flex justify-between items-center">
          <Link to={`/FlashCraft/${obj.flashCardSetId}`}>
            <h1 className="text-xl font-bold font-Poppins text-secondary w-4/5">
              {obj.title}
            </h1>
          </Link>
          <span className="font-Poppins font-semibold text-slate-600 text-lg ml-8 italic">
            {obj.category}
          </span>
        </div>

        <div className="mt-3 rounded-full w-20 h-5 bg-gray-200 flex-center py-3 ">
          <span className="text-gray-600 font-Itim ">{`${obj.cardQty} cards`}</span>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <div className="w-32 h-12">
            <InvertedButton clickHandler={navigateHandler}>
              Practice
            </InvertedButton>
          </div>

          <DeleteButton deleteHandler={deleteHandler} />
        </div>
      </div>
    </div>
  );
}

export default FlashSetBox;
