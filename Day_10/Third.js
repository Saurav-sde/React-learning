import GlobalContext from "./Global";
import { useContext } from "react";
function Third(props){

    const {count,setCount} = useContext(GlobalContext);
    return (
        <>
            <h2>I am Printing {count}</h2>
            <button onClick={()=>setCount(count + 5)}>Increment</button>
        </>
    )
}

export default Third;