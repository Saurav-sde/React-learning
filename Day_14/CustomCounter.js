import { useState } from "react";
import { useDispatch } from "react-redux";
import { Increment,Decrement,CustomIncreaser } from "./Slicer1";

export default function CustomCounter(){

    const [number,setNumber] = useState("");
    const dispatch = useDispatch();

    function handleClick(){
        // dispatch(Increment);// we can't do this as it only increase 1 but we want to increase it by value of number state variable, so we can't use it
        // we made another function in reducer of slice1, CustomIncreaser:(state,action) => {state.count += action.payload}

        // CustomIncreaser has two argumnets state and action({type:"slice1/CustomIncreaser", payload:number})

        // payload is nothing but the argumnet that we pass goes inside it here it is number
        dispatch(CustomIncreaser(Number(number))); // when it takes value from input it comes in the form of string so we have to convert it in number
        setNumber("");
    }

    
    return (
        <>
            <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}></input>   
            <button onClick={handleClick}>Submit</button>
        </>
    )
}