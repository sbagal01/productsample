import React, { useEffect, useState } from "react";

import {
  Typography,
  Button,
  CardContent,
  CardActions,
  Card,
  CardMedia,
  Rating,
  Paper,
  Grid,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { remove, CartState } from "../store/CartSlice";

function Cart() {
  let products = useSelector(CartState);
  console.log("products---->", products);
  // const [products,setProducts]=useState([]);
  let dispatch = useDispatch();

  // useEffect(()=>{
  //     fetch('https://fakestoreapi.com/products').then(data=>data.json()).then((response)=>console.log('response----->',response));
  // },[])
  // console.log(products);
  //let dispatch=useDispatch();

  const removeFromCart = (id) => {
    console.log('id----->',id);
    dispatch(remove(id));
  };
  return (
    <>
      <h1>Cart</h1>
      <Grid
        container
        style={{ margin: "10px" }}
        alignItems="center"
        rowSpacing={2}
        columns={{ xs: 4, md: 12 }}
        columnSpacing={{ xs: 1, sm: 4, md: 3 }}
      >
        {products &&
          products.map((product) => (
            <Grid
              key={product.id}
              item
              xs={4}
              sx={{ mt: 5 }}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Card sx={{ maxWidth: 345, pt: 5 }}>
                <CardMedia sx={{ height: 140 }} image={product.image} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                  <Rating name="rate" value={product.rating.rate} readOnly />
                  <Paper variation="outlined" sx={{ maxWidth: 50 }}>
                    <Typography> Rs. {product.price}</Typography>
                  </Paper>
                </CardContent>
                <CardActions>
                 <Button variant="outlined">Add</Button>
                 <Button variant="outlined" onClick={() => removeFromCart(product.id)}>Remove</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </>
  );
}

export default Cart;
