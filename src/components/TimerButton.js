import React from "react";


const TimerButton = ({stop, start, reset, wait}) => {


  return (
    <div className="buttons">
      <button className="button" onClick={start}>Start</button>
      <button className="button" onClick={stop}>Stop</button>
      <button className="button" onClick={reset}>Reset</button>
      <button className="button" onClick={e => wait(e)}>Wait</button>
    </div>
  )
}

export default TimerButton