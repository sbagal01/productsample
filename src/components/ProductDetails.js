import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom';
import {Typography,Button,CardContent,CardActions,Card,CardMedia,Rating,Paper,Grid} from '@mui/material';
import {useDispatch,useSelector} from 'react-redux';
import { removeSelectedProduct } from '../store/ProductSlice';
import {add} from '../store/CartSlice';
function ProductDetails() {
    const dispatch=useDispatch();
    let {product}=useSelector(state=>state.product);
    
    //let [product,setProduct]=useState({});
    let {id}=useParams();
    // const fetchIndProduct=async ()=>
    // {
    //     let data=await fetch(`https://fakestoreapi.com/products/${id}`);
    //     let response=await data.json();
    //     setProduct(response);
    // }

    // useEffect(()=>{
    //     fetchIndProduct();
    // },[id]);
    //let {product}=useSelector(state=>state.product);
    const addToCart=(product)=>{
        dispatch(add(product));
    }
    useEffect(()=>{
       return ()=>{
        // dispatch(removeSelectedProduct());
       } 
    },[])
  return (
    <>
      <Grid key={product.id} item xs={4} sx={{mt:5}} style={{display:"flex", flexDirection:"column"}}>
            <Card sx={{ maxWidth: 345,pt:5 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={product.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
              {/* <Rating name="rate" value={product.rating.rate} readOnly /> */}
              <Paper variation="outlined" sx={{maxWidth:50}}><Typography> $ {product.price}</Typography></Paper>
            </CardContent>
            <CardActions>
              
              <Button variant="outlined" onClick={()=>addToCart(product)}> Cart</Button>
            </CardActions>
          </Card> </Grid>
    </>
  )
}

export default ProductDetails
