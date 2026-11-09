import { createSlice } from "@reduxjs/toolkit";

const OrderSlice=createSlice({
    name:'orders',
    initialState:{
        allorders:[]
    },
    reducers:{
        addtoorders:(state,action)=>{
            var ind=state.allorders.findIndex((all)=>all.id==action.payload.id && all.username==action.payload.usernmame)
            if(ind==-1){
                state.allorders.push(action.payload)
            }
        }
    }
})
export const {addtoorders}=OrderSlice.actions;
export default OrderSlice.reducer