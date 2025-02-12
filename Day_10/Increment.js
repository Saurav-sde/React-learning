

// function Increment({counts,setCounts}){
//     return (
//         <>
//             <h2>Child Counter is {counts}</h2>
//             <button onClick={()=> setCounts(counts + 1)}>Increment</button>
//         </>
//     )
// }


// import { useState } from "react";
// function Increment(){
//     const [counts,setCounts] = useState(0);
//     return (
//         <>
//             <h2>Child Counter is {counts}</h2>
//             <button onClick={()=> setCounts(counts + 1)}>Increment</button>
//         </>
//     )
// }


function Increment({counts,setCounts}){
    return (
        <>
            <h2>Child Counter is {counts}</h2>
            <button onClick={()=> setCounts(counts + 1)}>Increment</button>
        </>
    )
}

export default Increment;