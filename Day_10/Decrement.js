import { useState } from "react";
// function Decrement(){
//     return (
//         <>
//             <button onClick={}>Decrement</button>
//         </>
//     )
// }

function Decrement({counts,setCounts}){
    return (
        <>
            <button onClick={()=> setCounts(counts - 1)}>Decrement</button>
        </>
    )
}

export default Decrement;