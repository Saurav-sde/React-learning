import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Card from "./component/Card";
import Header from "./component/Header";
import Footer from "./component/Footer";
import arr from "./utils/dummy";
// import { greet, meet } from "./utils/dummy";

// suppose from where i am importing these the name of importing file is used in my file (as variable,function anme or...), in that scenario we have to chabnge the name
// we can change the name using as
// import { greet as goa, meet as chandigarh } from "./utils/dummy";
// now it is accessed by goa and chandigarh


function App(){

    let [A, setA] = useState(arr);

    function sortArray(){
        A.sort((a,b) => a.price - b.price);
        // setA(A); // still its not changiong the UI
        // Because earlier it is also A and after sorting also it is A , and we know array is stored in heap and in stack, reference is stored of A so the reference is not changing and the setA() is not calling the App function again
        // so we have to make a clone of this array so that reference gets changed
        setA([...A]);
    }

    function priceAbove499(){
        const B = arr.filter((value) => value.price > 499);
        setA(B);
    }

    return (
        <>
            <Header />
            <button onClick={sortArray}>Sort By Price</button>
            <button onClick={priceAbove499}>Price above 499</button>
            <div className="card-container" style={{display:"flex", gap:"20px", flexWrap:"wrap"}}>
                {
                    A.map((value,index) => <Card key={index} cloth={value.cloth} offer={value.Offer} price={value.price} />) // it returns an array and we know that JSX understand array
                }
            </div>
            <Footer />
        </>
    )
}
// [<Card />,<Card />,<Card />,<Card />,<Card />.......]
// whenever we create array we should give an unique key to each element, if we dont give react throws an error, temporarily we have used index for that but this is not right we will discuss later about solution of this problem

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);


