# React Basics and JSX Rules

This README file covers the basics of React, JSX, props, and modularization. Follow along to understand how to write clean and modular React code.

## Introduction
React is a JavaScript library for building user interfaces. Below is a basic example of a React component:

```javascript
import React from "react";
import ReactDOM from "react-dom/client";

const element1 = <h1>Hello Coder Army</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element1);
```

## JSX Rules

JSX (JavaScript XML) allows you to write HTML-like syntax in your JavaScript code, making it easier to create UI components. Here are some key rules:

1. **JS Expressions:** JSX can include JavaScript expressions like variables and function calls:
   ```javascript
   const name = "Saurav";
   const element = <h2>Ram Ram {name} Jii</h2>;
   ```
   
2. **No Statements Inside JSX:** Statements like `let` or `if` cannot be written directly inside JSX:
   ```javascript
   // This will throw an error:
   <h2>Ram Ram {let name = "Saurav"} Jii</h2>
   ```

3. **Objects in JSX:** You cannot directly use an object inside JSX:
   ```javascript
   let obj = { name: "Rohit", age: 50 };
   const element = <h2>Ram Ram {obj}</h2>; // Error
   ```
   Instead, use properties of the object:
   ```javascript
   const element = <h2>Ram Ram {obj.name} Jii</h2>; // Works
   ```

4. **Arrays in JSX:** JSX accepts arrays, but the array should not contain objects.

5. **Function Naming Convention:** If you call a function as a JSX element, its name must start with a capital letter to distinguish it from HTML tags:
   ```javascript
   function Greet() {
       return <h2>Ram Ram Bhaiya Jii</h2>;
   }
   const element = <Greet />; // Correct
   ```

## Props in React
Props (short for properties) are used to pass data to components. Props are read-only.

```javascript
function Greet(props) {
    return <h2>Ram Ram {props.name} Jii, your age is {props.age}</h2>;
}
const element = <Greet name="Rohit Negi" age="23" />;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
```

## Modularization in React
To keep your code clean and organized, divide your components into separate files.

### Example

1. **Create a Component File:**
   Create a file `Greet.js`:
   ```javascript
   import React from "react";

   function Greet(props) {
       return <h2>Ram Ram {props.name} Jii, your age is {props.age}</h2>;
   }

   export default Greet; // Exporting the component
   ```

2. **Import and Use the Component:**
   In `App.js`:
   ```javascript
   import React from "react";
   import ReactDOM from "react-dom/client";
   import Greet from "./Greet"; // Importing the component

   const element = <Greet name="Rohit Negi" age="23" />;
   const root = ReactDOM.createRoot(document.getElementById('root'));
   root.render(element);
   ```

## Exporting and Importing in React

### Default Export
A file can have only one default export. You can import it without curly braces:

```javascript
// Greet.js
export default function Greet(props) {
    return <h2>Hello, {props.name}</h2>;
}

// App.js
import Greet from "./Greet";
```

### Named Export
A file can have multiple named exports. Named exports must be imported using curly braces:

```javascript
// utilities.js
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

// App.js
import { add, subtract } from "./utilities";

console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2
```

### Combining Default and Named Exports
A file can have both a default export and named exports:

```javascript
// math.js
export default function multiply(a, b) {
    return a * b;
}

export function divide(a, b) {
    return a / b;
}

// App.js
import multiply, { divide } from "./math";

console.log(multiply(5, 3)); // Output: 15
console.log(divide(10, 2));  // Output: 5
```

### Exporting Multiple Components from One File
If you want to export more than two components, you can use named exports:

```javascript
// components.js
export function Header() {
    return <header>Welcome to My Site</header>;
}

export function Footer() {
    return <footer>© 2025 My Website</footer>;
}

export function Sidebar() {
    return <aside>Here is the sidebar content</aside>;
}

// App.js
import { Header, Footer, Sidebar } from "./components";

function App() {
    return (
        <div>
            <Header />
            <Sidebar />
            <Footer />
        </div>
    );
}

export default App;
```

### Best Practices for Modularization
- Create separate folders for components.
- Use meaningful names for files and folders.
- Keep one component per file for better readability and maintainability.
- Add a `README` file in each folder to document the purpose of the components.

By following these practices, you can build scalable and maintainable React applications.


// if you want someone to install as dev dependency then use -D in command
// npm install -D parcel
