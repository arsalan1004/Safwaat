import React from "react";

function DeleteButton(props) {
  return (
    <button
      className="group relative w-12 h-12 rounded-full bg-gray-900 border-none font-semibold
          flex-center overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.164)] duration-300
          hover:w-32 hover:items-center hover:bg-wrong"
      onClick={props.deleteHandler}
    >
      <span
        className="absolute top-[-20px] text-white opacity-0 text-[2px] 
                 group-hover:text-sm group-hover:opacity-100 group-hover:translate-y-7 font-Itim tracking-wider "
      >
        Delete
      </span>
      <svg
        viewBox="0 0 448 512"
        className="w-3 duration-300 group-hover:w-14 group-hover:translate-y-[58%] "
      >
        <path
          className="fill-white"
          d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
        ></path>
      </svg>
    </button>
  );
}

export default DeleteButton;
