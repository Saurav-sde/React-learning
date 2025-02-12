# ⏱ React Stopwatch using useRef and useState

## 🚀 Overview
This is a simple **Stopwatch** built using React that demonstrates the usage of **useState** and **useRef** hooks. The application allows users to **start, stop, and reset** the timer.

## 📌 Key Features
✅ Start the stopwatch ⏯️
✅ Stop the stopwatch ⏹️
✅ Reset the stopwatch 🔄
✅ Prevent multiple intervals from running simultaneously ⚠️
✅ Uses **useRef** to store interval references 🔗
✅ Uses **useState** to manage time and running state 🕰️

## 🛠️ How It Works
### ⚡ The Problem
Initially, if you click the **Start** button multiple times, multiple `setInterval` functions start running. This causes the timer to increase rapidly, and even after stopping, some intervals may still be active. ❌

### 💡 The Solution
To prevent this issue:
- We use **useRef** to store the interval reference and clear it when needed.
- We introduce an **isRunning** state to ensure only one interval runs at a time.

## 🏗️ Code Explanation
```jsx
import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";

function Stopwatch() {
    const [time, setTime] = useState(0);
    const intervalRef = useRef(null);
    const [isRunning, setIsRunning] = useState(false);

    function start() {
        if (!isRunning) {
            intervalRef.current = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
            setIsRunning(true);
        }
    }

    function stop() {
        if (isRunning) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            setIsRunning(false);
        }
    }

    function reset() {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setTime(0);
        setIsRunning(false);
    }

    return (
        <>
            <h1>Stopwatch: {time}s ⏳</h1>
            <button onClick={start}>Start ▶️</button>
            <button onClick={stop}>Stop ⏹️</button>
            <button onClick={reset}>Reset 🔄</button>
        </>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Stopwatch />);
```

## 🔥 Key Learnings
- **useRef** is useful for storing a reference to `setInterval`, preventing unnecessary re-renders.
- **useState** helps keep track of time and whether the stopwatch is running.
- Always **clear intervals** when stopping or resetting to avoid memory leaks.

## 🎯 Future Improvements
- Add **Lap functionality** 🏁
- Improve UI with animations 🎨
- Show milliseconds for better precision ⏱

Hope you found this helpful! 🚀 Happy Coding! 😃

