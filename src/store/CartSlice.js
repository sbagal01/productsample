// import {createSlice} from '@reduxjs/toolkit';

// const initialState={
//     cart:[]
// };
// const cartSlice=createSlice({
//     name:'cart',
//     initialState,
//     reducers: {
//         add:(state,action)=>{
//             state.cart.push(action.payload)
//             //console.log("added from slice",state.cart)
//         },
//         remove:(state,action)=>{
//             state.cart = state.cart.filter((pro)=>(
//                 pro.id!==action.payload
//             ))
//             //console.log("removed from",state.cart);
//         }
//     }

// })
// export const CartState=(state)=>{
//     return state.cart.cart
// }

// export const {add,remove}=cartSlice.actions;

// export default cartSlice.reducer;

import {createSlice} from '@reduxjs/toolkit';

const initialState={cart:[]};

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        add:(state,action)=>{
            state.cart.push(action.payload);
        },remove:(state,action)=>{
            state.cart=state.cart.filter((prod)=>prod.id!==action.payload.id)
        },findItem:(state,action)=>{
            return 14;
        }
    }
});
export const {add,remove}=cartSlice.actions;
export const CartState=(state)=>{
    return state.cart.cart;
}
export default cartSlice.reducer;
