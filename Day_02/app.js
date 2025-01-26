// adding id,class and style to the element
// const element = React.createElement("h1",{id:"first", className:"Saurav",style:{backgroundColor:"blue",fontSize:"30px", color:"pink"}},"Hello Coder Army");
// const Reactroot = ReactDOM.createRoot(document.getElementById('root'));
// Reactroot.render(element);

// here we can say that js is easier than this , no code readability 

// lets create one more element
// const element2 = React.createElement("h2",{id:"second", className:"Saurav",style:{backgroundColor:"black",fontSize:"30px", color:"white"}},"Maja Aaya Mujhe");
// Reactroot.render(element);

// will it execute
// it only print element2 , element 1 disappear
// when react render any element, it clear previous data and only store new element

// Now we want Both element to be visible
/*
    <div>
        <h1>Hello Coder Army</h1>
        <h2>Maja Aaya Mujhe</h2>
    </div>
    we can do like this and render the div
*/
// const div1 = React.createElement('div',{},[element,element2]);
// Reactroot.render(div1);

/*
    <div>
        <div>
            <h1>
                <p></p>
            </h1>
        </div>
    </div>
*/
// now we have to do this the things are getting more complex than js
// in js file we can write code like HTML :- this has done by JSX(babel) it's not the part of react or js 
// jsx convert the html code (written in js) into react element
// we will discuss it in later classes




const element = React.createElement("h1",{id:"first", className:"Saurav",style:{backgroundColor:"blue",fontSize:"30px", color:"pink"}},"Hello Coder Army");
const Reactroot = ReactDOM.createRoot(document.getElementById('root'));

const element2 = React.createElement("h2",{id:"second", className:"Saurav",style:{backgroundColor:"black",fontSize:"30px", color:"white"}},"Maja Aaya Mujhe");
Reactroot.render(element);

const div1 = React.createElement('div',{},[element,element2]);
Reactroot.render(div1);

// Now the Question can we host it in server
// we can host if we want but this is not a right approach , the code that is wriiten in this file and in index.html is not optimized, we can see so many comments, spaces , whole react and reactDOM code from cdn link and our file becomes bigger in size, and it slows down
// on running react and reactDom code from cdn links it takes time , if we want to save time then i copied the whole react and reactDom code in our js file
// but this is not a right approach to save time, it increases the size of the file
// question is it necessary to copy whole code of react and reactDOM?
// are we using all the functionality of react and reactDom? 
// can we bring Only portion of the react and reactDOM code that we are using

// our main goal is keep the file of size as less as possible
// here introduce bundler
// it optimize our code
// removes all the comments and extra spaces
// takes only the portion of react and reactDOM code that is required
// packs all this in one index file and one or two js file
// there are many bundlers:- Webpack,vite,parcel and many more..., we are using parcel


// A bundler in JavaScript is a tool that takes multiple files (JavaScript, CSS, images, etc.) and combines them into a single or a few optimized files (bundles) that can be efficiently loaded by a browser. Bundlers are essential in modern web development as applications grow complex and rely on modular JavaScript files, dependencies, and frameworks.

// How to install parcel
// npm init, npm install parcel

// package.json :- it has all the information of my project,containing essential metadata that defines the project, its dependencies, scripts, and other settings. 

// what is npm :- many people says node package manager but this is not the exact name its name is only npm
// npm has code of parcel,typescript, react, reactDOM and all the js related things. we can consider it as registry 

// when we install parcel why node_modules came?
// inside node_modules we have parcel but why all the other files came inside node_modules??
// parcel does not started coding from scratch,it also used some existing libraries  we can say this libraries as dependecies, the parcel who is dependent on some library and that library is also dependent on some other library
// so we need all these library files in our code, so inside node_modules we have parcel and all the dependent files from which parcel will run

// bring react through npm
// npm install react
// npm install react-dom

// package.json has all the information of dependencies(react,react-dom,parcel) with version(^19.0.0);

// ^ caret :- it says that i will take minor and patches update
// ~ tilde :- it will take only patches update
// version: 18.2.3 , version has three values majorUpdate.minorUpdate.patchUpdate
// patch :- fixes bugs without adding new features
// minor :- Adds new Features without breaking existing functionality. it our production code does not crash
// major :-  refers to a new version of a project or package that introduces breaking changes. This means the update is not backward compatible, and existing code using the previous version may no longer work without modifications.


// package-lock.json
//  It ensures that the exact versions of installed dependencies (and their sub-dependencies) are consistent across all environments.
// While package.json specifies the range of acceptable dependency versions (e.g., ^1.2.0), package-lock.json records the exact version installed in your project.

// we have heard that in my system this code is working but in your system its not, this is why beacuse we have to install the dependencies of same version 
// suppose today i made the project and after 6 months i have to run that project at that time we want the same version that is 6 months ago

// benefits of package-lock.json
// suppose we have to share this file, size of node_modeules approx 300mb this is not recommendable to push node modules in github
// delete the node modules and share the remaining file
// after receiving the files, to run it they have to do npm install and node_modules came

// npm install
// From where node_modules came,first it see package-lock.json( where the exact version is noted) and bring all the dependecies files

// suppose if package-lock.json gets deleted, then how the package(npm install) knows which dependecies we have to install, then it goes to package.json and sees the dependecies and its version and bring the updated version( based on ~ and ^) of the dependency