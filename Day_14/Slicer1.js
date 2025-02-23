// import { createSlice } from "@reduxjs/toolkit";

// const reactSlicer = createSlice({
//     name:"slice1",
//     initialState:{
//         count:0,
//     },
//     reducers:{
//         Increment:(state)=>{state.count = state.count + 1},
//         Decrement:(state)=>{state.count = state.count - 1},
//         Reset:(state)=>{state.count = 0}
//     }
// })

// all the reducers gets converted into actions
// {type:slice1/Increment, payload:undefined}

// why we are converting it in actions??
// as when we dispatch , it goes to stores so store knows from which slice it is
// the above information is only in actions

// export const {Increment,Decrement,Reset} = reactSlicer.actions;
// export {reactSlicer};
// export default reactSlicer.reducer;


// why we are exporting .actions instead of .reducers



// import { createSlice } from "@reduxjs/toolkit";

// const reactSlicer = createSlice({
//     name:"slice1",
//     initialState:{
//         count:0,
//     },
//     reducers:{
//         Increment:(state)=>{state.count = state.count + 1},
//         Decrement:(state)=>{state.count = state.count - 1},
//         Reset:(state)=>{state.count = 0}
//     }
// })

// export const {Increment,Decrement,Reset} = reactSlicer.actions;
// export {reactSlicer};
// export default reactSlicer.reducer;

// Increment:(state)=>{state.count = state.count + 1} as this is increasing the value of count , suppose earlier it is 0 then after clicking on Increment count became 1 , as it is inside object, and we know that when we change object peoperty it doesn't get new reference so re rendering doesn't happens

// But Here it re renders why??
// This re rendering is happening because of Immer. Immer gives us a superpower we can directly mutate the object and behind the scene Immer is creating new Object from this . In purana Jamana
// Increment:(state)=>{
//          return {...state,count:state.count+1}  
//      }
// How Immer is doing it?
// Immer creates a new Draft means it create a Duplicate object, now it says whatever changes you want to do, do it in duplicate object, then immer compares original and duplicate object and returns a new object to the initial state

// many people do like this 
// Increment:(state)=>{
//      return state.count = state.count + 1
// }

// but it is an error as immer says return new object or modify the draft that i have given

// Increment:(state)=> state.count++, it is also error as it also returning the value







import { createSlice } from "@reduxjs/toolkit";

const reactSlicer = createSlice({
    name:"slice1",
    initialState:{
        count:0,
    },
    reducers:{
        Increment:(state)=>{state.count = state.count + 1},
        Decrement:(state)=>{state.count = state.count - 1},
        Reset:(state)=>{state.count = 0},
        CustomIncreaser: (state,action) => {state.count += action.payload}
    }
})

export const {Increment,Decrement,Reset,CustomIncreaser} = reactSlicer.actions;
export {reactSlicer};
export default reactSlicer.reducer;