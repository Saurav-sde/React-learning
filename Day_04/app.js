import React from "react";
import ReactDOM from "react-dom/client";

const element1 = <h1>Hello Coder Army</h1>


// function greet(name){
//     return <h2>Ram Ram {name} Jii</h2>
// }
//JSX:JS Expression (Output laake de : result produce kare)
//JSX: But we cant write js statement inside JSX
// <h2>Ram Ram {let name = "Saurav"} Jii</h2> // error

// let obj = {
//     name:"Rohit",
//     age:50
// }

// function greet(name){
//     return <h2>Ram Ram Bhaiya ji {obj}</h2> // error we cant write obj in jsx
// }
// result produce hona chiye: string,number,array
// we cant write if else in jsx 
// jsx accepts array
// jsx also gives error when array contain obj

// function greet(obj){
//     return <h2>Ram Ram Bhaiya ji {obj.name}</h2> // this will run
// }


/*
function greet(){
    return <h2>Ram Ram Bhaiya Jii</h2>
};
const element2 = greet();
// can we call this function in another way

const element3 = <greet/> // we can also call the greet function in this way, it  is a jsx format to call function, but we can't get result, because jsx calls the function only when the function name starts with capital letter 
//  it is the rule of JSX, not react to write the first letter of a function name capital
// what is the reason behind this??
// we have different types of tag in html <div> <h1> <ul> , if we write the function name small then jsx is unable to differentiate b/w html tags and user defined tags
// so they made a simple rule to write first character in capital
*/

// function Greet(){
//     return <h2>Ram Ram Bhaiya Jii</h2>
// }
// const element4 = <Greet />
// <Greet /> :- function call, how we pass arghument in this


// Greet has props, it is a object
// props = {
//     name:"Rohit Negi",
//     age:23
// }

function Greet(props){
    return <h2>Ram Ram {props.name} Jii, your age is {props.age}</h2>
}
const element5 = <Greet name="Rohit Negi" age="23"/>;
const temp = <h2 id="first" className="second"></h2> // jsx maintains this format as this format is easier to understand
// in html we write attributes in jsx inside function when we write like attributes jsx treat it as argument 



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element5);


// modules :- make different file for each component
// to write neat and clean code create a folder and store all the component file there
