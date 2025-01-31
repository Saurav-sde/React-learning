import React,{useCallback,useState,useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";

function GithubProfile(){
    // Header
    // body: 10 Card show krenge

    return (
        <>  
            <Header/>
            <Body />
        </>
    )
}




ReactDOM.createRoot(document.getElementById('root')).render(<GithubProfile />)