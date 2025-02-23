import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import stores from "./stores";
import Counting from "./Counting";
import { reactSlicer } from "./Slicer1";
import CustomCounter from "./CustomCounter";

function App(){
    console.log(stores); // it is a object, inside it it has many information subscribe,dispatch,getState nad many more..

    console.log(reactSlicer); // it is also a object
    // it has many properties like actions,reducer,getInitialState and many more..
    return(
        <Provider store={stores}>
            <Counting/>
            <br></br>
            <br></br>
            <br></br>
            <CustomCounter />
        </Provider>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);