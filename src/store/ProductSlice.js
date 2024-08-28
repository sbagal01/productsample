// import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';

// const initialState={
//     product:[],
//     status:'idle'
    
// }
// export const fetchProductAsync=createAsyncThunk('products/fetchProduct',async()=>{
//     let products=await fetch('https://fakestoreapi.com/products');
//     let response= await products.json();
//     return response;
// })
// const productSlice=createSlice({
//     name:'product',
//     initialState,
//     // reducers:{
//     //     getProducts:(state,action)=>{
//     //         state.product=action.payload;
//     //     }
//     // },
//     extraReducers:(builder)=>{
//         builder.addCase(fetchProductAsync.fulfilled,(state,action)=>{ 
//             state.status='completed'
//             state.product=action.payload
//             console.log(state.product);
//         }).addCase(fetchProductAsync.rejected,(state,action)=>{
//             state.status='error'
//         })
//         .addCase(fetchProductAsync.pending,(state,action)=>{
//             state.status='Loading'
//         })

//     }
// })
// //export const getProducts=productSlice.actions;
// export default productSlice.reducer;

import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
const initialState={
    status:'Loading',
    product:[],

}
export const fetchProductAsync=createAsyncThunk('products/fetchProducts',async ()=>{
    let data=await fetch('https://fakestoreapi.com/products');
    let response=await data.json();
    return response;
})

export const fetchIndProductAsync=createAsyncThunk('product/fetchProduct',async (product)=>{
    const data=await fetch(`https://fakestoreapi.com/products/${product.id}`);
    let result=await data.json();
    return result;
})
const productSlice=createSlice({
    name:'product',initialState,
    reducers:{
        removeSelectedProduct:(state,action)=>{
            state.product=[];
            state.status='idle';
        },
        findProduct:(state,action)=>{
            let filteredProduct=state.product.find((prod)=>(
                prod.id===action.payload.id
            ))
            state.product= filteredProduct;
            state.status='completed';
        },addProduct:(state,action)=>{
            return 24;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProductAsync.fulfilled,(state,action)=>{
            state.product=action.payload;
            state.status='completed'
        }).addCase(fetchProductAsync.pending,(state,action)=>{
            state.status='Loading'
        }).addCase(fetchProductAsync.rejected,(state,action)=>{
            state.status='error'
        }).addCase(fetchIndProductAsync.fulfilled,(state,action)=>{
            state.product=action.payload;
            state.status='completed'
        })
    }
})

export const {removeSelectedProduct,findProduct}=productSlice.actions;

export default productSlice.reducer;