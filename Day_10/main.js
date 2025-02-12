import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Increment from "./Increment";
import Decrement from "./Decrement";


// function App(){
//     const [count,setCount] = useState(0);

//     return (
//         <>
//             <h1>Parent Counter is: {count}</h1>
//             <Increment counts={count} setCounts={setCount}/>
//         </>
//     )
// }
// We can access the parent state variable we have just send it through props

// function App(){
//     return (
//         <>
//             <h1>Hello Coder Army</h1>
//             <Increment/>
//             <Decrement/>
//         </>
//     )
// }
// now we have all the state variable in child component(Increment), there is another child component(Decrement)
// now if we click on Decrement child then the state variable created in Increment child should be decrease by 1
// how can we achieve it as Decrement has not the access of state variable and not the parent has access of it because we have created the state variable in Incremnet component
// if we call Decremnt in Incremnt component as pass the state variable as props, it displays two Decrement in the browser,as first is because of main and other is due to INcrement. so we can't do like this
//  This problem is solved when we make this state variable in parent(main) or most common ancestor and then we can pass as props to both child components. This is known as State Lifting
function App(){
    const [count,setCount] = useState(0);

    return (
        <>
            <h1>Hello Coder Army</h1>
            <Increment counts={count} setCounts={setCount}/>
            <Decrement counts={count} setCounts={setCount}/>
        </>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
