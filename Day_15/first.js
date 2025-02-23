import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";



// // if we handle it in component(locally)
// function fetchUser(){
//     useEffect(async()=>{
//         dispatch(LoadingData(true));
//         try {
//             const response = await fetch("Github user info");
//             const da = await response.json();
//             dispatch(UpdateData(da));
//         } catch (error) {
//             dispatch(ErrorData("Error Occurred"));
//         }
//     })
// }

// can we fetch data locally and update their states globally??
// if one more componenent have to fetch data of githubuserInfo, then we can say that the first component has already fetched the data and updated the global states from there 2nd component will get data 
// But suppose first we have gone on 2nd component and first component haven't not fetched the data(e.g:- we routes to 2nd component before component 1 fetches data ) then the same code i have to write it in the 2nd component to fetch the github userInfo locally and update the states globally
// supoose we have 4,5 or many more components then we have to write this code again and again and again
// so, this is not the optimal approach for fetching data

// solution :- fetch globally:- createAsyncThunk()



import stores from "./stores";
import { Provider } from "react-redux";
import CoinCreate from "./Coincreate";
function App() {
    return (
        <Provider store={stores}>
            <CoinCreate/>
        </Provider>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);