import React,{useState,useRef,useEffect,useCallback} from "react";
import ReactDOM from "react-dom/client";


// function App() {
//     const[count,setCount] = useState(0);
//     let money = 0;

//     return (
//         <>
//             <h1>Counter is: {count}</h1>
//             <button onClick={()=> setCount(count + 1)}>Increment</button>

//             <h1>Money is: {money}</h1>
//             <button onClick={()=> {
//                     money++;
//                     console.log(money);
//                 }
//             }>Increment</button>
//         </>
//     )
// }
// money is not displayed in the UI after clicking on the icrment btn because it doesn't use state variable so it does not re rendering it
// suppose i click 3 time on incremnt btn of money and then click on incremnt btn of count this leads to re rendering but value of money again starts from 0 instead of 3 , this happens because money again gets initialised by 0 while re rendering 
// Now  We want the value of money presist/sustain across re render(wqhen we increase the value of counter , value of money doesn't loss)
// this can be done by using a hook useRef;

function App() {
    const[count,setCount] = useState(0);
    let money = useRef(0); // useRef creates an object and the value is inside a key named current, if you want to log the value then write money.current
    
    return (
        <>
            <h1>Counter is: {count}</h1>
            <button onClick={()=> setCount(count + 1)}>Increment</button>

            <h1>Money is: {money.current}</h1>
            <button onClick={()=> {
                    money.current = money.current + 1;
                    console.log(money.current);
                }
            }>Increment</button>
        </>
    )
}
// now money holds the previous value even if when we increment the counter
// useRef doesn't re render the function 
// when counter has done re renders we can see the value of money displayed on the screen  

ReactDOM.createRoot(document.getElementById('root')).render(<App />);