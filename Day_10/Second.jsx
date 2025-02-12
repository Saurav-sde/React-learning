import Third from "./Third";
import GlobalContext from "./Global";
import { useContext } from "react";
function Second(){

    const {count,setCount} = useContext(GlobalContext);
    return (
        <>
            <h2>Kaise hain aap sab log{count}</h2>
            <Third/>
        </>
    )
}

export default Second;