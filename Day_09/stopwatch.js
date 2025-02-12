// import React, { useRef, useState } from "react";
// import ReactDOM, { createRoot } from "react-dom/client";

// function Stopwatch()
// {
//     const [time,setTime] = useState(0);
//     const intervalRef = useRef(null);

//     /*
//     function start(){
        
//         setInterval(()=>{
//             setTime(time + 1); // setInterval is running but doesn't updating the value of time
//         },1000)
//     }
//     // However, React does not immediately update time. Instead, it schedules it for the next render. When setInterval runs, it always captures the initial value of time (which is 0 at the beginning) and keeps adding 1 to that same value.
//     // This means your stopwatch will not work as expected.
//     // we can fix it by 
//     */

//     // function start(){
        
//     //     setInterval(()=>{
//     //         setTime((prevTime) => prevTime + 1); // now it takes latest value of time 
//     //     },1000)
//     // }

//     //When start() is called, setInterval starts running and executes the callback function every 1000ms (1 second).
//     //Inside the setInterval callback:
//     //  setTime((prevTime) => prevTime + 1); is used.
//     //  This functional update ensures that React always updates time based on the most recent state (prevTime).
//     //  Even if React schedules multiple state updates, it will use the latest time value instead of relying on an old snapshot.

//     // now the problem is how can we stop this interval?? we have to note down the refernce of older function , so we can use useRef here

//     function start(){
//         intervalRef.current = setInterval(()=>{
//             setTime((prevTime) => prevTime + 1); 
//         },1000)
//     }

//     function stop(){
//         clearInterval(intervalRef.current);
//         intervalRef.current = null;
//     }

//     function reset(){
//         clearInterval(intervalRef.current);
//         intervalRef.current = null;
//         setTime(0);
//     }

//     return(
//         <>
//             <h1>StopWatch is: {time}</h1>
//             <button onClick={start}>Start</button>
//             <br></br>
//             <br></br>
//             <button onClick={stop}>Stop</button>
//             <br></br>
//             <br></br>
//             <button onClick={reset}>Reset</button>
//         </>
//     )
// }

// now when we click on start 3-4 times then after times increase fastly, even if when we click on stop it doesn't stop why this is happening???
// when we click on start it starts a setinterval if we click again on start it again starts a setInterval, again we clicked, now 3 setInterval is running a this time and evry setInterval update the lastest time so the values of time is changing fastly 
// how can we stop it??
// we can simply check that if setInterval is running or not, we can declare a state variable 

import React, { useRef, useState } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
function Stopwatch()
{
    const [time,setTime] = useState(0);
    const intervalRef = useRef(null);
    const [isRunning,setIsRunning] = useState(false);

    function start(){
        if(!isRunning){
            intervalRef.current = setInterval(()=>{
                setTime((prevTime) => prevTime + 1); 
            },1000)
            setIsRunning(true);
        }
    }

    function stop(){
        if(isRunning) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            setIsRunning(false);
        }
    }

    function reset(){
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setTime(0);
    }

    return(
        <>
            <h1>StopWatch is: {time}</h1>
            <button onClick={start}>Start</button>
            <br></br>
            <br></br>
            <button onClick={stop}>Stop</button>
            <br></br>
            <br></br>
            <button onClick={reset}>Reset</button>
        </>
    )
}

ReactDOM>createRoot(document.getElementById('root')).render(<Stopwatch />);