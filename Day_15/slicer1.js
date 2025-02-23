import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

// createAsyncThunk

const FetchData = createAsyncThunk(
    // Action: type:payload
    'Coin/fetch',
    async(args,thunkAPI) =>{
        try {
           const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${args}`);
           const data = await response.json();
           return data; // whatever we return it goes inside payloads
        } catch (error) {
            return rejectWithValue(error.message);
        }
    } 
)
//{type: "coin/fetch",  payload:data } :- this object goes as dispatch
// FetchData(20) :_ 20 goes inside args

// how above code is working??
// whenever we call FetchData, it first dispatch {type:"coin/fetch/pending",payload:undefined}
// {type:"coin/fetch/pending",payload:undefined}
// now try block executes if it is executed then it dispatch {type:"coin/fetch/fulfilled,payload:data"};
// if error comes then it dispatch {type:"coin/fetch/rejected",payload: erroe.message}
// who is doing the work of dispatch??
// thunkAPI is creating all these dispatch automatically we don't have to write it manually 

const slicer1 = createSlice({
    name:"slice1",
    initialState: {data:[], loading:false, error:null},
    reducers: {},
    extraReducers: (builder)=>{
        builder
            .addCase(FetchData.pending,(state)=>{  //type:"coin/fetch/pending"
                state.loading = true;
                state.error = null;
            })     
            .addCase(FetchData.fulfilled,(state,action)=>{  //type:"coin/fetch/fulfilled"
                state.data = action.payload;
                state.loading = false;
            }) 
            .addCase(FetchData.rejected,(state,action)=>{  //type:"coin/fetch/rejected"
                state.error = action.payload;
                state.loading = false;
            })
    }
})


// why we are not using reducers??
// as we are doing async operation so we have to keep reducers empty, and use extraReducers 
// one more reason to use extraReducers is in reducer we have to write slice name, but here type:"coin/fetch/pending" we are not wrtting  sliceName


export default slicer1.reducer;
export {FetchData};
// as we dont have actions so we are not exporting it as we know action is written in reducers 