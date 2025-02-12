// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
// import Second from "./Second";
// function App(){
//     const [count,setCount] = useState(0);

//     return (
//         <>
//             <h1>Hello Coder Army</h1>
//             <Second count={count} setCount={setCount}/>
//         </>
//     )
// }


// ReactDOM.createRoot(document.getElementById('root')).render(<App/>);

// here i want this state variable be used in grand child components , or in more depth of child first->second->third->fourth->fifth. i want this state variable that is created in first to be used in his child fifth. so we have first pass the props in second then second pass the props to third , third pass it to the fourth and fourth pass it to fifth .. In technical term this is known as props Drillling
// as we can see here there is no use of these props to second,third and fourth but they got an extra headache of get the props from parent and pass it to child
// there is one more problem here, that is re rendering as we cans ee second thirad and fourth is re rendering without any purpose
// Is there any way to send these state variable that is created in first directly to fifth
// Here we have another hook useContext it solves all these problems

import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Second from "./Second";
import GlobalContext from "./Global";

function App(){
    const [count,setCount] = useState(0); // now we want to keep it in globalCOntextFile

    return (
        <>
            <GlobalContext.Provider value={{counts:count,setCounts:setCount}}>
            <h1>Hello Coder Army{count}</h1>
            <Second count={count} setCount={setCount}/>
            </GlobalContext.Provider> 
        </>
    )
}
// <GlobalContext.Provider value={{counts:count,setCounts:setCount}}>  // now this state variable is used by the children
// this can be also wriitten as <GlobalContext.Provider value={{count:count,setCount:setCount}}>
// if the name of key and value is same , then we can write it like this <GlobalContext.Provider value={{count,setCount}}>

// the previous data that is in GlobalCOntext is erased and new Data gets updated , and these data is only access to its children and sub children

// other than this children the previous data is accessed 
ReactDOM.createRoot(document.getElementById('root')).render(<App/>); 