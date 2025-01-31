# Password Generator with React ⚡

Welcome to the **React Password Generator** project! 🔐 This project demonstrates how to create a password generator using **React**, along with hooks like `useState`, `useEffect`, and `useCallback` for performance optimization. 🚀

---

## 📌 Features
✅ Random password generation
✅ Adjustable password length (5 to 50)
✅ Option to include numbers 🔢
✅ Option to include special characters 🎭
✅ Optimized with `useCallback` to prevent unnecessary re-renders

---

## 🛠 Technologies Used
- **React** ⚛️
- **useState** – To manage state variables 🧠
- **useEffect** – To execute side effects ⏳
- **useCallback** – To optimize function re-creation 🚀

---

## 📜 Code Explanation

### 🏗 Initial Setup
We use the `useState` hook to maintain state for:
- `Password`: Stores the generated password
- `length`: Controls the length of the password
- `numberChanged`: Boolean to include numbers
- `characterChanged`: Boolean to include special characters

```jsx
const [Password, setPassword] = useState("");
const [length, setLength] = useState(10);
const [numberChanged, setNumberChanged] = useState(false);
const [characterChanged, setCharacterChanged] = useState(false);
```

### 🔄 Password Generation Function
The `generatePassword` function creates a random password based on user-selected options. Initially, this function was causing **infinite re-renders** due to direct execution inside the component.

```jsx
const generatePassword = useCallback(()=>{
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(numberChanged) str += "0123456789";
    if(characterChanged) str += "!@#$%^&*()_+={}[]";
    
    let pass = "";
    for(let i = 0; i < length; i++) {
        pass += str[Math.floor(Math.random() * str.length)];
    }
    
    setPassword(pass);
}, [length, numberChanged, characterChanged]);
```

#### 🌪 Infinite Loop Problem 🔄
Initially, calling `generatePassword()` inside the component body led to an infinite re-render because `setPassword(pass)` was changing the state, triggering a re-render, and the function was being executed again and again. 🌀

✅ **Solution:** Move `generatePassword` inside a `useEffect` hook and use **dependencies** correctly.

```jsx
useEffect(()=>{
    generatePassword();
}, [generatePassword]);
```

Now, `generatePassword` is only re-created when `length`, `numberChanged`, or `characterChanged` changes.

---

## 🏎 Performance Optimization with `useCallback`

Each time the component re-renders, **functions get re-created**. This means:
- Unnecessary memory allocation 🔄
- Unoptimized performance 🚀

### ❌ Without `useCallback`
Every time state updates, `generatePassword` gets **new memory allocation**, even when it doesn’t need to.

### ✅ With `useCallback`
We wrap `generatePassword` in `useCallback` so that it only gets **re-created** when necessary.

```jsx
const generatePassword = useCallback(()=>{
    // Function logic here
}, [length, numberChanged, characterChanged]);
```

This ensures that **if only the password changes (setPassword)**, the function isn’t unnecessarily re-created! 🔥

---

## 🎨 UI Elements
The interface consists of:
- A `<h1>` displaying the generated password.
- A range slider (`<input type='range'>`) to adjust length.
- Checkboxes (`<input type='checkbox'>`) to toggle numbers and special characters.

```jsx
<h1>{Password}</h1>
<div className="second">
    <input type="range" min={5} max={50} value={length} onChange={(e)=> setLength(e.target.value)} />
    <label>Length({length})</label>

    <input type="checkbox" defaultChecked={numberChanged} onChange={()=> setNumberChanged(!numberChanged)} />
    <label>Number</label>

    <input type="checkbox" defaultChecked={characterChanged} onChange={()=> setCharacterChanged(!characterChanged)} />
    <label>Character</label>
</div>
```

---

## 🔥 Summary
🚀 **Optimized password generator** with React
🛠 **Prevented infinite re-renders** with `useEffect`
🎯 **Used `useCallback` to optimize function memory usage**
💡 **Re-renders only when necessary!**

---

## 🚀 Running the Project
1️⃣ Clone the repository
2️⃣ Install dependencies: `npm install`
3️⃣ Run the project: `npm start`

🎉 Enjoy generating strong passwords effortlessly! 🔐🚀

