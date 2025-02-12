# 📌 Understanding `useRef` in React

## 🚀 Introduction
This project demonstrates the usage of `useRef` in React and how it helps in maintaining values across re-renders without causing unnecessary re-renders.

## 📝 Problem Statement
Initially, we had two state variables:
- `count` (managed using `useState`) – This state triggers a re-render whenever updated.
- `money` (a regular variable) – Its value was being reset to `0` on every re-render, losing the incremented value.

## ❌ Issue
When updating `money` without `useRef`, the value was lost on each re-render. Clicking the increment button for `money` updated its value in the console but not in the UI. Additionally, when `count` was incremented, `money` was reset to `0`.

## ✅ Solution: Using `useRef`
We replaced `money` with a `useRef` variable:
```jsx
const money = useRef(0);
```
- `useRef` creates an object with a `.current` property to store the value.
- Unlike `useState`, `useRef` does not cause re-renders when updated.
- The value persists across re-renders.

## 📌 Implementation
```jsx
import React, { useState, useRef } from "react";
import ReactDOM from "react-dom/client";

function App() {
    const [count, setCount] = useState(0);
    let money = useRef(0);
    
    return (
        <>
            <h1>Counter is: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>

            <h1>Money is: {money.current}</h1>
            <button onClick={() => {
                    money.current = money.current + 1;
                    console.log(money.current);
                }}
            >Increment</button>
        </>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
```

## 🔍 Key Takeaways
1. `useRef` helps in maintaining values across re-renders without triggering re-renders.
2. `useRef` is ideal for storing mutable values that don't affect the component's rendering.
3. Unlike `useState`, updating a `useRef` variable doesn’t cause the component to re-render.
4. The updated value of `money` is only displayed after a re-render, like when `count` is incremented.

## 🎯 When to Use `useRef`?
- Storing values that don’t trigger a re-render when changed.
- Accessing DOM elements directly.
- Persisting values across re-renders without causing extra renders.

🚀 Happy Coding!

