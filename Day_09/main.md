# 🚀 React useMemo Hook - Optimizing Fibonacci Calculation

## 📌 Overview
In this project, we explore the **useMemo** hook in React to optimize the computation of Fibonacci numbers. Without optimization, recalculating Fibonacci numbers can slow down the UI, making interactions like clicking a counter button laggy. We compare different approaches using **useMemo**, **useEffect**, and **useCallback**, and highlight the best practices.

---

## 🔥 The Problem
When computing Fibonacci numbers recursively, the function has an **O(2^n) time complexity**, meaning it becomes very slow for large values like 40 or 50.

🔹 If we enter a large number in the input field, the page becomes **unresponsive**.
🔹 Clicking the counter button (**Increment/Decrement**) takes **a long time to update**.
🔹 This happens because **every re-render recomputes the Fibonacci function**, even when the counter button is clicked (which does not affect the Fibonacci number calculation).

---

## 💡 Solution Using useMemo
### ✅ Why useMemo?
The **useMemo** hook helps in **memoizing** expensive function computations, ensuring that the function does not run on every render unless its dependencies change.

### ✅ Implementation
```jsx
import React, { useState, useMemo } from "react";
import ReactDOM from "react-dom/client";

// Global Fibonacci function to prevent re-creation on each render
function Fibonacci(n) {
    if (n <= 1) return n;
    return Fibonacci(n - 1) + Fibonacci(n - 2);
}

function App() {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(null);

    const result = useMemo(() => Fibonacci(number), [number]); // Memoize the result

    return (
        <>
            <h1>Counter is: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <div>
                <h2>Fibonacci Number is: {result}</h2>
                <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
            </div>
        </>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

### ✅ Benefits of useMemo
🔹 Prevents **unnecessary recalculations** of Fibonacci numbers.
🔹 Makes the **counter buttons more responsive**.
🔹 Only **recomputes when the input number changes**.

---

## 🆚 useEffect vs. useMemo
We can also solve this using **useEffect**, but it has a drawback:
- **useEffect causes an extra re-render** because it updates state.
- **useMemo does not cause additional renders** since it directly returns a memoized value.

### ⚡ Comparison
| Feature        | useMemo  | useEffect |
|---------------|---------|-----------|
| Rerenders | 🚀 No extra re-renders | 🔄 Triggers re-render |
| State Change | ❌ No extra state needed | ✅ Requires additional state |
| Execution | 🎯 Runs when dependency changes | 🕒 Runs after render |

---

## 🔥 Performance Optimization Using useCallback

We also avoid recreating the Fibonacci function on each render by **defining it globally** instead of using **useCallback**.

### ⚡ Why Not useCallback?
🔹 **useCallback** is useful when a function is passed as a prop.
🔹 Here, the Fibonacci function **does not depend on state**.
🔹 **Declaring it globally** is the simplest and most efficient approach.

---

## 🎯 Key Takeaways
✅ **useMemo** is ideal for expensive computations that do not need to run on every render.
✅ **useEffect** can be used but causes **extra renders**.
✅ Avoid **useCallback** for non-state-dependent functions—declare them globally instead.

---

## 🔥 Conclusion
By using **useMemo**, we significantly improve performance, making our React app **fast and responsive**. This approach is particularly useful when handling **computationally expensive operations** like Fibonacci calculations.

✨ Happy Coding! 🚀

