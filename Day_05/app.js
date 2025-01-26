import React,{useState} from "react";
import ReactDOM from "react-dom/client";


/*
function Counter(){
    let count = 0;

    function incrementNumber() {
        count++;
        console.log(count);  
        document.querySelector('h1').innerHTML = `Count is ${count}`;
    }
    
    function decrementNumber(){
        count--;
        console.log(count);
        document.querySelector('h1').innerHTML = `Count is ${count}`;
        
    }
    return (
        <div className="first">
            <h1>Count is {count}</h1>
            <button onClick={incrementNumber}>Increment{count}</button>
            <button onClick={decrementNumber}>Decrement{count}</button>
        </div>
    )
}

// here we are manipulating the DOM
// but React say dont manipulate The DOM by your own , it say i will Update the DOM you just focus on Buiulding UI

ReactDOM.createRoot(document.getElementById('root')).render(<Counter/>)


// Here Intoduced Hooks
// Hooks is Nothing but a function
// state, whenever our data is changing we can say the state is changing, but that data is not visible in UI
// React solved this problem using Hook, react give us a function that do this
// name of the hook is use state
// lets bring the useState from react
// import {useState} from 'react'

*/


function Counter(){
    let [count, setCount] = useState(0); // useState is saying i will intialise this count variable by 0
    // useState returns an array consist of two element, first one is value and other is a function(we can write the name of the function whatever we want);

    // useState says that whenver your value of variable got changed just call this function

    function incrementNumber(){
        count++;
        setCount(count); // calling the function that is given useState when value changes , pass the new value of the variable in argument

        //setCount(count + 1); // this is also the same as above
    }

    function decrementNumber(){
        count--;
        setCount(count);
        document.querySelector('h1').innerHTML = `Count is ${count}`;    
    }

    return (
        <div className="first">
            <h1>Count is {count}</h1>
            <button onClick={incrementNumber}>Increment {count}</button>
            <button onClick={decrementNumber}>Decrement {count}</button>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Counter/>)

// now the value is changing everywhere where the count is used , but previuosly we have to manually handle this
// its like a magic
// How useState() is doing this?? :-- whenever we use setCount() function it recalls the Counter function
// initially count is 0 bcz value of useState is 0
// runs the entire Counter function
// suppose incrementNumber is clicked, setCount(1) is called and setCount() calls the Counter function again ,the value of setCount argument goes to argument of useState() here its 1(useState(1)), now the count gets updated to 1 

// now it execute the remaining instruction of Counter(), as we know whenever a function is called it execute all the instruction that is present in the function;

// this continues....


// let [A, setA] = useState(arr);

// function sortArray(){
//     A.sort((a,b) => a.price - b.price);
//     // setA(A); // still its not changiong the UI
//     // Because earlier it is also A and after sorting also it is A , and we know array is stored in heap and in stack, reference is stored of A so the reference is not changing and the setA() is not calling the App function again
//     // so we have to make a clone of this array so that reference gets changed
//     setA([...A]);
// }