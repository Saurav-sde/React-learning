// we bring our react and reactdom file here
import React from "react";
import ReactDOM from "react-dom/client";

// const element = React.createElement("h1",{id:"first", className:"Saurav",style:{backgroundColor:"blue",fontSize:"30px", color:"pink"}},"Hello Coder Army");
// const Reactroot = ReactDOM.createRoot(document.getElementById('root'));

// const element2 = React.createElement("h2",{id:"second", className:"Saurav",style:{backgroundColor:"black",fontSize:"30px", color:"white"}},"Maja Aaya Mujhe");
// Reactroot.render(element);

// const div1 = React.createElement('div',{},[element,element2]);
// Reactroot.render(div1);


// This Code is not working now??
// we have stored react and reactDOM in the node_modules
// frist we have to bring that code  import React from "react";  import ReactDOM from "react-dom/client";
// still its not working

// import it is part of latest js version
// we have to tell the browser that it is not a normal js, the type of this js is a module
//  <script type="module" src="./app.js"></script> in our html file

// still its not working
// we have to open the server only, then we can run this command npx parcel index.html
// now we got a link and click on the link and we can see our output


// after this our files got changed , some new files appear .parcel-cache and dist
// .parce4l-cache stores cached data and server built in time decrease
// if we delete the .parcel-cache built in time increases

// as we know parcel optimizes our file , then where did this optimized file goes
// npx parcel build index.html, 
// By seeing build it understands that we need production ready code,then it gives the production ready code in dist folder 
// it builts three files  dist\index.html  dist\index.0f880532.js    dist\index.0f880532.js.map
// these files are not human readbale, machine will read it
// .map is a special mapping file by using this we can access the original js file
// so in production we dont use map file




// Lets Learn Bout JSX(javascript XML)
// we can write html code in js 

// const newElement = <h1>Hello Coder Army</h1>;
// const Reactroot = ReactDOM.createRoot(document.getElementById('root'));
// Reactroot.render(newElement);

// from now onwards we will not use React.createElement()
// JSX is not the part of React 
// when we do React.createElement , it gives us a react element i.e js object this changes is odne by React, then after rendering,this got converted into html element
//                      React           render
// React.createElement() => react element(js object) => HTML element


// JSX is HTML like syntax , it is not exact HTML , it has some differences
// javascript,React doesnot understand this HTML like code, then someonme has to change this HTMl like code in js or react element
// babel :- it is a transpiler. it converts JSX code into React.createElement();
//    babel                    React                      render 
// JSX => React.createElement() => react element(js object) => HTML element
//babel is already in the node_modules, when we brought parcel it also brings babel


// const newElement = <h1>Hello Coder Army</h1>;
// const Reactroot = ReactDOM.createRoot(document.getElementById('root'));
// Reactroot.render(newElement);


// lets move to advantages of JSX

// first advantage
// if we have to give multiple child
// const newElement = (
//     <div>
//         <h1>Hello Coder Army</h1>
//         <h2>Maja Aaya Mujhe</h2>
//     </div> 
// )
// IT WILL RUN WITHOUT() also , but code readability reduce
  
// second advantage
// But here we can see to we have to give an extra div
// we can do this without extra div also, we will give empty tag
// const newElement = (
//     <>
//         <h1>Hello Coder Army</h1>
//         <h2>Maja Aaya Mujhe</h2>
//     </> 
// )

// third advantage
// we can add id , class also
// const newElement = (
//     <>
//         <h1 id="first" className="second">Hello Coder Army</h1>
//         <h2>Maja Aaya Mujhe</h2>
//     </> 
// )
// here we get one difference in html and jsx, in html we use class and in JSX we use className

// fourth advantage
// we can give js expressioon inside JSX
// const names = "Saurav";
// const newElement = (
//     <>
//         <h1 id="first" className="second">Hello {names}</h1>
//         <h2>Maja Aaya Mujhe</h2>
//     </> 
// )
// to write js code inside we have to use {}
// another difference b/w html and JSX is in html we cant use4 js expression but in JSX we can


// another advantage
// we can use js objects inside JSX
// const names = "Saurav";
// const obj = {
//     age:23,
//     salary:60
// }
// const newElement = (
//     <>
//         <h1 id="first" className="second">Hello {names}, </h1>
//         <h2>Your age is {obj.age}</h2>
//     </> 
// )
// we can style these using stylesheet(style.css)


// lets make our own attribute
const names = "Saurav";
const obj = {
    age:23,
    salary:60
}
// const newElement = (
//     <>
//         <h1 id="first" className="second">Hello {names}, </h1>
//         <h2 money="23">Your age is {obj.age}</h2>
//     </> 
// )
// here we can see that 23 and all the attribute value is passed as string, now we want that value of money to pass in number, then we can wrap up inside a {} 
// const newElement = (
//     <>
//         <h1 id="first" className="second">Hello {names}, </h1>
//         <h2 money={23}>Your age is {obj.age}</h2>
//     </> 
// )
// whenever we write {}, it means that we are going to write js inside it


// lets write inline css here
const obj2 = {
    backgroundColor:"black",
    color:"white",
    fontSize:"30px"
}
// const newElement = (
//     <>
//         <h1 id="first" className="second">Hello {names}, </h1>
//         <h2 style={obj2}>Your age is {obj.age}</h2>
//     </> 
// )
// lets write it in single line
const newElement = (
    <>
        <h1 id="first" className="second">Hello {names}, </h1>
        <h2 style={{backgroundColor:"black",color:"white",fontSize:"30px"}}>Your age is {obj.age}</h2>
    </> 
)
// dont get cobnfused by seeing 2 {}
// as we know style accpetsa object so first{} is for telling jsx hat we are going to write js here, and 2nd{} is for js object
// const Reactroot = ReactDOM.createRoot(document.getElementById('root'));
// Reactroot.render(newElement);



// Lets learn about React Component
// elemet,element2,newElement that we used above are knows React element

// there are two types of components:
// 1. Class based componenets     2.function based component
// class based component is old way to write code
// nowadays all are usijng functionb based componenets

// lets discuss function based componenets
// when we creqate function then it is known as function based componenets
function greet() {
    return <h1>Aur Bhai Kaise ho</h1>
};
const newElement2 = greet();
const Reactroot = ReactDOM.createRoot(document.getElementById('root'));
Reactroot.render(newElement2);


const meet = () => <h2>Mera Sab Accha Hain</h2>;
Reactroot.render(meet());

// we want to render both these
Reactroot.render(<>{greet()} {meet()}</>);  

// lets write this in cleaner way
const newElement4 = <>{greet()} {meet()}</>;
Reactroot.render(newElement4);