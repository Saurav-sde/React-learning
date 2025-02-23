import { useDispatch, useSelector } from "react-redux"
import { Increment,Decrement,Reset } from "./Slicer1";
export default function Counting(){
    const count = useSelector((state)=> state.slice1.count); // this is known as subscribing to an event
    const dispatch = useDispatch();

    return (
        <>
            <h1>Counter is {count}</h1>
            <button onClick={()=>dispatch(Increment())}>Increment</button>
            <button onClick={()=>dispatch(Decrement())}>Decrement</button>
            <button onClick={()=>dispatch(Reset())}>Reset</button>
        </>
    )
}
// actions stores 2 things 
// actions : {type: "slice/Increment", payloads:undefined}

// Increment,Decrement,Reset is not only simple function it stores some more infromation as when we dispatch these action it goes to stores and stores identify from which slice it is, but how does the stores is identifying it??
// stores is identifying from the actions