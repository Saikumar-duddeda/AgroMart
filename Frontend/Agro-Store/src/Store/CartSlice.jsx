import { createSlice } from "@reduxjs/toolkit";

const CartSlice=createSlice({
    name:"cart",
    initialState:{
        cartproducts:[],
        wishlistproducts:[]
    },
    reducers:{
        addtocart:(state,action)=>{
            var ind=state.cartproducts.findIndex((c)=>c.id==action.payload.id && c.username==action.payload.username)
            if(ind==-1){
            state.cartproducts.push(action.payload)
            }
            else{
                state.cartproducts[ind].Quantity+=1
            }
        },
        removefromcart:(state,action)=>{
            state.cartproducts=state.cartproducts.filter((r)=>r.id!=action.payload.id && r.username==action.payload.username)
        },
        addtowishlist:(state,action)=>{
            var ind=state.wishlistproducts.findIndex((c)=>c.id==action.payload.id && c.username==action.payload.username)
            if(ind==-1){
            state.wishlistproducts.push(action.payload)
            }
            
        },
        removefromwishlist:(state,action)=>{
            state.wishlistproducts=state.wishlistproducts.filter((r)=>r.id!=action.payload.id && r.username==action.payload.username)
        },
        wishtocart:(state,action)=>{
           var ind= state.wishlistproducts.findIndex((w)=>w.id==action.payload.id)
           console.log(ind);
           if(ind!=-1){
            state.cartproducts.push(action.payload)
           }
           
        },
        quantityincr:(state,action)=>{
            var ind=state.cartproducts.findIndex((c)=>c.id==action.payload.id && c.username==action.payload.username)
            state.cartproducts[ind].Quantity+=1
          },
          quantitydecr:(state,action)=>{
            var ind=state.cartproducts.findIndex((c)=>c.id==action.payload.id && c.username==action.payload.username)
            var val=state.cartproducts[ind].Quantity-=1
            if(val==0){
                state.cartproducts=state.cartproducts.filter((r)=>r.id!=action.payload.id && r.username==action.payload.username)
            }
          }
}})
export const {addtocart,removefromcart,addtowishlist,removefromwishlist,wishtocart,quantityincr,quantitydecr}=CartSlice.actions
export default CartSlice.reducer