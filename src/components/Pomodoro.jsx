import { useEffect, useState } from "react";

function Pomodoro() {

    const [seconds, setSeconds] = useState(1500);

    const [running, setRunning] = useState(false);

    useEffect(() => {

        let timer;

        if (running && seconds > 0) {

            timer = setInterval(() => {

                setSeconds((s) => s - 1);

            }, 1000);

        }

        return () => clearInterval(timer);

    }, [running, seconds]);

    const min = Math.floor(seconds / 60);

    const sec = seconds % 60;

    return (

        <div className="card">

            <h2>Pomodoro Timer</h2>

            <h1>

                {String(min).padStart(2,"0")}:

                {String(sec).padStart(2,"0")}

            </h1>

            <button onClick={()=>setRunning(true)}>
                Start
            </button>

            <button onClick={()=>setRunning(false)}>
                Pause
            </button>

            <button onClick={()=>setSeconds(1500)}>
                Reset
            </button>

        </div>

    );

}

export default Pomodoro;