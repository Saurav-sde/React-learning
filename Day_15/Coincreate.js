
import React,{ useEffect} from "react";
import  {useDispatch, useSelector } from "react-redux";
import { FetchData } from "./slicer1";
import CoinCard from "./CoinCard";


export default function CoinCreate(){
    const dispatch = useDispatch();
    const {data,loading,error} = useSelector((state) => state.slice1);
 
    useEffect(() =>{
        dispatch(FetchData(20));
    },[]);

    // Display info of 20 user
    if(loading)
        return <h1>Data is Loading...</h1>
    if(error)    
        return <h1>Error has occurred</h1>
    return (
        <>
            <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
                {data.map((value)=><CoinCard key={value.id} coin={value}/>)}
            </div>
        </>
    )    
}




/*
-> FetchData(20) is not an action it is a function
-> how FetchData(20) is working??
--->we have dispatch(FetchData(20)) it goes to store , stores has slice1: slicer1Reducer
---> now store sees FetchData(20) and search for type but there is no type mention here because it is not an action it is a normal function, so store is unable to handle it
---> there is a middleware who handle this, middleware first sees FetchData(20) if it has type then middleware let it go to the store if not then it treat it as normal function and calls it(FetchData(20))

// now the work of FetchData() is to execute all the dispatch operations
// first it dispatch (type:"coin/fetch/pending, payload:undefined") then it goes to stores and then stores sees the type and try to figure out the slice by seeing their slicename but there is not any sliceName is mention there so stores forward it to all the slices and then it searches the type  (type:"coin/fetch/pending) in all the slices one by one. here it is present in slice1 then it comes to slice1 and here all the cases is mentioned and then this dispatch is executed.
// if data comes then it dispatch(type:"coin/fetch/fulfilled, payload:da") and same process happens like above  
// if error occurred then it dispatch(type:"coin/fetch/pending,payload:"error_massage") ans same procees goes behind the scene like above
*/


// Now the question is why we haven't mention slice name in FetchData() or in the dispatchOperations type, as it is going to multiple slices on dispatching 
// is this an error or bug in react-redux
// no it's not a bug. it has been kept explicitly(Jaan Bhujhkar)