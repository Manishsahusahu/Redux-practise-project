import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incrNumber, decrNumber } from "./Actions/index";

const App = () => {
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1>Increment/Decrement</h1>
      <div className="inputBox">
        <div className="decrementButton" onClick={() => dispatch(decrNumber())}>
          <span>-</span>
        </div>
        <input type="text" name="quanity" value={myState} />
        <div
          className="incrementButton"
          onClick={() => dispatch(incrNumber(2))}
        >
          <span>+</span>
        </div>
      </div>
    </div>
  );
};

export default App;
