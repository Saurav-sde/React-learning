# 🚀 React State Management: State Lifting & useContext

## 🔍 Overview
In React, **state management** is crucial when handling data between parent and child components. This guide covers:

- **State Lifting**: Sharing state between sibling components.
- **Props Drilling**: Passing state down multiple component levels.
- **useContext Hook**: Avoiding excessive prop passing by using React Context API.

---

## 📌 1️⃣ State Lifting (Sharing State Between Siblings)
### 🎯 The Problem
When we create a **state variable** inside a child component, other sibling components cannot access it. For example:

```jsx
function App() {
    return (
        <>
            <h1>Hello Coder Army</h1>
            <Increment />
            <Decrement />
        </>
    );
}
```

- The **Increment** component holds the state.
- The **Decrement** component cannot access it.
- Even the **parent component** has no control over it.

### ✅ The Solution: State Lifting
To solve this, we **move the state to the parent component** and pass it down as props.

```jsx
function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Parent Counter: {count}</h1>
            <Increment count={count} setCount={setCount} />
            <Decrement count={count} setCount={setCount} />
        </>
    );
}
```
Now, both child components can **access and modify** the shared state. This technique is called **State Lifting**.

---

## 📌 2️⃣ Props Drilling (Passing Props Through Multiple Components)
### 🎯 The Problem
If a deeply nested component (e.g., **FifthComponent**) needs state from a top-level component (e.g., **FirstComponent**), we must pass props through **SecondComponent, ThirdComponent, and FourthComponent**, even if they don't need them.

```jsx
function FirstComponent() {
    const [count, setCount] = useState(0);

    return <SecondComponent count={count} setCount={setCount} />;
}

function SecondComponent({ count, setCount }) {
    return <ThirdComponent count={count} setCount={setCount} />;
}

function ThirdComponent({ count, setCount }) {
    return <FourthComponent count={count} setCount={setCount} />;
}

function FourthComponent({ count, setCount }) {
    return <FifthComponent count={count} setCount={setCount} />;
}
```

😵 **Issues:**
- Unnecessary **prop passing** through multiple layers.
- Extra **re-renders** when the state updates.

### ✅ The Solution: useContext (Global State)
To fix this, we use the **useContext** hook to provide global access to state.

---

## 📌 3️⃣ useContext Hook (Global State Management)
### 🎯 The Solution: Creating a Global Context
Instead of **passing props manually**, we **store the state in a global context** and allow any child component to access it directly.

### 🛠 Steps to Implement:
1️⃣ **Create a Context** (`GlobalContext.js`):
```jsx
import { createContext } from "react";
const GlobalContext = createContext();
export default GlobalContext;
```

2️⃣ **Wrap the Application with the Provider** (`App.js`):
```jsx
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import SecondComponent from "./SecondComponent";
import GlobalContext from "./GlobalContext";

function App() {
    const [count, setCount] = useState(0);

    return (
        <GlobalContext.Provider value={{ count, setCount }}>
            <h1>Hello Coder Army {count}</h1>
            <SecondComponent />
        </GlobalContext.Provider>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

3️⃣ **Access the Context in a Child Component** (`FifthComponent.js`):
```jsx
import React, { useContext } from "react";
import GlobalContext from "./GlobalContext";

function FifthComponent() {
    const { count, setCount } = useContext(GlobalContext);
    return (
        <>
            <h2>Counter: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </>
    );
}

export default FifthComponent;
```

🚀 **Now, FifthComponent can access the count state without needing props!**

---

## 🎯 Key Takeaways
✅ **State Lifting**: Move state to the **closest common ancestor** to share between sibling components.
✅ **Props Drilling Issue**: Passing state through unnecessary intermediate components.
✅ **useContext Hook**: Provides a **global state** that any component can access, solving the props drilling issue.

### 🎉 Benefits of useContext
✔ No unnecessary **prop passing** 🙅‍♂️
✔ Avoids **extra re-renders** 🎯
✔ Cleaner & more **maintainable** code ✨

---
Hope this guide helps! 😃 Happy Coding! 🚀

