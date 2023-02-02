/* eslint-disable react-hooks/rules-of-hooks */
import { MyContext } from "@/ContextApi";
import React, { useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { decNumber, incNumber } from "../store/actions/index";

const redux = () => {
  const { Number, setNumber } = useContext(MyContext);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const mystate = useSelector((state) => state.ChangeTheNumber);
  const dispatch = useDispatch();

  // const handleChange = (e) => {
  //   console.log(e);
  // };
  return (
    <>
      <div className="">
        <h1 className="text-center text-[4rem]">
          Incremental/Decrement counter
        </h1>
        <h4 className="text-center text-[2rem]">Using React-Redux</h4>

        <div className="quantity text-center flex justify-center gap-4 pt-8">
          <button
            className="btn p-3 border-2 border-black bg-slate-400"
            onClick={() => dispatch(decNumber())}
            disabled={mystate === 0}
          >
            -
          </button>
          {/* <input
            type="text"
            value={mystate}
            onChange={handleChange}
            className="border-2 border-gray-500 text-center text-[2rem]"
          /> */}
          <p className="border-2 border-gray-500 text-center text-[2rem]">
            {mystate}
          </p>
          <button
            className="btn p-3 border-2 border-black bg-slate-400"
            onClick={() => dispatch(incNumber())}
          >
            +
          </button>
        </div>
      </div>
      <div className="pt-8">
        {/* <h1 className="text-center text-[4rem]">
          Incremental/Decrement counter
        </h1> */}
        <h4 className="text-center text-[2rem]">Using Context Api</h4>

        <div className="quantity text-center flex justify-center gap-4 pt-8">
          <button
            className="btn p-3 border-2 border-black bg-slate-400"
            onClick={() => setNumber(Number - 1)}
            disabled={Number === 0}
          >
            -
          </button>
          {/* <input
            type="text"
            value={mystate}
            onChange={handleChange}
            className="border-2 border-gray-500 text-center text-[2rem]"
          /> */}
          <p className="border-2 border-gray-500 text-center text-[2rem]">
            {Number}
          </p>
          <button
            className="btn p-3 border-2 border-black bg-slate-400"
            onClick={() => setNumber(Number + 1)}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default redux;
