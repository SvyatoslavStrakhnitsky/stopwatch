import './App.css';
import Display from "./components/Display";
import TimerButton from "./components/TimerButton";
import {useEffect, useState} from "react";
import {calculateTime} from "./utils/helpers";
import {exhaustMap, fromEvent, interval, takeUntil} from "rxjs";

function App() {

  const [time, setTime] = useState(0)
  const [isLaunched, setIsLaunched] = useState(false)
  const [timeArray, setTimeArray] = useState([])

  useEffect(() => {
    setTimeArray(calculateTime(time))
  }, [time])


  const startHandler = () => setIsLaunched(true)
  const stopHandler = () => {
    setTime(false)
    setIsLaunched(false)
  }
  const resetHandler = () => {
    setTime(0)
    setIsLaunched(true)
  }
  const wait = (e) => {
    const clicks$ = fromEvent(e.target, 'click');
    clicks$.pipe(
      exhaustMap(() => clicks$.pipe(takeUntil(interval(300)))),
    ).subscribe(() => setIsLaunched(false))
  }

  useEffect(() => {

    const stopWatch$ = interval(1000)
    if (isLaunched) {
      const subscription = stopWatch$.subscribe(() => setTime(prev => prev + 1))
      return () => subscription.unsubscribe()
    }
  }, [isLaunched])


  return (
    <main className="App">
      <div>
        <Display time={timeArray}/>
        <TimerButton start={startHandler} stop={stopHandler} reset={resetHandler} wait={wait}/>
      </div>
    </main>
  );
}

export default App;
