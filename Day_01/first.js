// react is a library of js
// suppose 100 lines of code runs a problem when i write in js but react do it in few lines
// it makes life of programmer easier
// all the work that i can do in react is also done by js
// we dont have to think about optimization, react handled it separately





// Lets Make React

// create element thorugh js
const header1 = document.createElement('h1');
header1.innerText = "Hello Coder Army";
header1.style.backgroundColor = "pink";
header1.style.fontSize = "30px";
header1.style.color = "white";


const header2 = document.createElement('h2');
header2.innerText = "Kaise ho Aap sab log";
header2.style.backgroundColor = "black";
header2.style.fontSize = "25px";
header2.style.color = "white";


// lets make one more header , then we have to write same code again

const root = document.getElementById('root');
root.append(header1);
root.append(header2);



// React : object
// ReactDOM: object
const React = {
    createElement: function(tag,styles,children){
        const element = document.createElement(tag);
    
        if(typeof children === 'object'){
            for(let value of children)
                element.append(value);
        }   
        else 
            element.innerText = children;
        for(let key in styles){
            element.style[key] = styles[key];  // element.style[key] == element.style.fontSize
        }
        return element;
    }
}
const reactDOM = {
    render: function(element,root){
        root.append(element);
    }
}


const header1 = React.createElement('h1',{fontSize:'30px',backgroundColor:'blue',color:'white'},"Hello coder Army");
const header2 = React.createElement('h2',{fontSize:'25px',backgroundColor:'black',color:'white'},"Kaise ho Aap sab log");
const li1 = React.createElement('li',{},"HTML");
const li2 = React.createElement('li',{},"CSS");
const li3 = React.createElement('li',{},"JS");
const UL = React.createElement('ul', {fontSize:'25px',backgroundColor:'black',color:'white'},[li1,li2,li3]);


reactDOM.render(header1,document.getElementById('root'));
reactDOM.render(header2,document.getElementById('root'));
reactDOM.render(UL,document.getElementById('root')); 


// why React and ReactDOM is written separately??
// 


