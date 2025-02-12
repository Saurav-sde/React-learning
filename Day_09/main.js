import React,{useState,useMemo,useEffect,useCallback} from "react";
import ReactDOM from "react-dom/client";

// useMemo hook
// 1: counter btn : increase
// 2. Input filed : Fibonacci number


// function App() {
//     // counter
//     const [count,setCount] = useState(0);
//     const [number,setNumber] = useState(null);

//     // recursive code , time complexity O(2^n), we can say it is an expensive calculation
//     // when we are solving the fibonnaci of bigger number like 40,50. our page became unresponsive as it is taking very much time
//     function Fibonacci(n){
//         if(n <= 1)
//             return n;
//         return Fibonacci(n-1) + Fibonacci(n-2);
//     }

//     const result = Fibonacci(number);

//     return (
//         <>
//             <h1>Counter is: {count}</h1>
//             <button onClick={()=> setCount(count + 1)}>Increment</button>
//             <button onClick={()=> setCount(count - 1)}>Decrement</button>

//             <div>
//                 <h2>Fibonacci Number is: {result}</h2>
//                 <input type="number" value={number} onChange={(e) => setNumber(e.target.value)}></input>
//             </div>
//         </>
//     )
// }
// suppose in input filed i have eneterd 40 , it gives outp[ut after a while 
// now i am clicking on incremnt btn of counter but it increase the value after sometime
// our page became very slow
// this is why because when i clicked on increment btn it re render the function App while re rendering it sees Fibonacci(number) then it starts calculating the fibonmacci and while calculating it will take some time as we are given number like 40.. after calculating the fibonacci next line will executed so we see our incremented value after some time
// as we dont have to recalculate the fibonacci as increment and decremnt btn doesn't affecting the result of fibonacci
//if somehow we can use previous answer then we can solve this problem, here we can use useMemo
// function App() {
//     const [count,setCount] = useState(0);
//     const [number,setNumber] = useState(null);

//     function Fibonacci(n){
//         if(n <= 1)
//             return n;
//         return Fibonacci(n-1) + Fibonacci(n-2);
//     }

//     const result = useMemo(()=>{
//         Fibonacci(number);
//     },[number]); // now it gets called only when value of number gets changed

//     return (
//         <>
//             <h1>Counter is: {count}</h1>
//             <button onClick={()=> setCount(count + 1)}>Increment</button>
//             <button onClick={()=> setCount(count - 1)}>Decrement</button>

//             <div>
//                 <h2>Fibonacci Number is: {result}</h2>
//                 <input type="number" value={number} onChange={(e) => setNumber(e.target.value)}></input>
//             </div>
//         </>
//     )
// }


// as we can solve it by using useEffect also
// function App() {
//     const [count,setCount] = useState(0);
//     const [number,setNumber] = useState(null);
//     const [result,setResult] = useState(null);

//     function Fibonacci(n){
//         if(n <= 1)
//             return n;
//         return Fibonacci(n-1) + Fibonacci(n-2);
//     }

//     useEffect(()=>{
//         setResult(Fibonacci(number));
//     },[number]);

//     return (
//         <>
//             <h1>Counter is: {count}</h1>
//             <button onClick={()=> setCount(count + 1)}>Increment</button>
//             <button onClick={()=> setCount(count - 1)}>Decrement</button>

//             <div>
//                 <h2>Fibonacci Number is: {result}</h2>
//                 <input type="number" value={number} onChange={(e) => setNumber(e.target.value)}></input>
//             </div>
//         </>
//     )
// }
// as we know useEffect will execute in the last 
// we have to display the result of the fibonacci so we have to make another state variable  
// whats the difference
// we have to make a state variable but in useMemo i have to make a normal variable 
// suppose i enterd number 40, setNumber calls 40, re render the function App stores 40 in the number and then sees useeffect and say dependency is change but useEffect runs at last, so, first it displays the intitial result and then useEffect will execute and number is changed to 40 , calculate the fibnacci of 40 and passes it in setResult() argument and again re renders is done as state variavle (result) is changed
// so by using useEffct 1 extra re rendering is happening while in useMemo no need of extra re rendering
// this is the only difference b/w useEffect and useMemo



// as we can see on evry re rendering the fibonacci funstion is getting memory.But we don't want it to get memory on every re rendering as it is not depending in any state variable 
// so we can use usecallback here, but don't use useCallback , ignores this small small problem 
// instead of useCallback we can declare it globally , and now it is being created only one time

function Fibonacci(n){
    if(n <= 1)
        return n;
    return Fibonacci(n-1) + Fibonacci(n-2);
}

function App() {
    const [count,setCount] = useState(0);
    const [number,setNumber] = useState(null);

    const result = useMemo(()=>{
        Fibonacci(number);
    },[number]); // now it gets called only when value of number gets changed

    return (
        <>
            <h1>Counter is: {count}</h1>
            <button onClick={()=> setCount(count + 1)}>Increment</button>
            <button onClick={()=> setCount(count - 1)}>Decrement</button>

            <div>
                <h2>Fibonacci Number is: {result}</h2>
                <input type="number" value={number} onChange={(e) => setNumber(e.target.value)}></input>
            </div>
        </>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);