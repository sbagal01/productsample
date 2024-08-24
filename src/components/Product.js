import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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
import { useDispatch, useSelector } from "react-redux";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { add } from "../store/CartSlice";
import { useNavigate } from "react-router-dom";
import {
  fetchProductAsync,
  fetchIndProductAsync,
  findProduct,
} from "../store/ProductSlice";

function Product() {
  //const [products,setProducts]=useState([]);
  let { product: products, status } = useSelector((state) => state.product);
  const navigate = useNavigate();
  console.log("product from map", products);
  let dispatch = useDispatch();
  useEffect(() => {
    // fetch('https://fakestoreapi.com/products').then(data=>data.json()).then((response)=>setProducts(response));
    dispatch(fetchProductAsync());
  }, []);
  //console.log(products);
  if (status === "Loading") {
    return <Alert severity="info">Loading ...</Alert>;
  }
  if (status === "error") {
    return (
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        Something went wrong !!! Please try again later
        <strong>check it out!</strong>
      </Alert>
    );
  }
  const addToCart = (product) => {
    dispatch(add(product));
  };
  const viewProduct = (product) => {
    //dispatch(fetchIndProductAsync(product));
    dispatch(findProduct(product));

    navigate(`/${product.id}`);
  };

  console.log("products-->", products);

  return (
    <>
      <h1>Products Dashboard</h1>
      <Grid
        container
        style={{ margin: "10px" }}
        alignItems="center"
        rowSpacing={2}
        columns={{ xs: 4, md: 12 }}
        columnSpacing={{ xs: 1, sm: 4, md: 3 }}
      >
        {Array.isArray(products) &&
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
                    <Typography> $ {product.price}</Typography>
                  </Paper>
                </CardContent>
                <CardActions>
                  {/* <Button variant="outlined"><Link to={`/${product.id}`}>View</Link></Button> */}
                  <Button
                    variant="outlined"
                    onClick={() => viewProduct(product)}
                  >
                    View
                  </Button>
                  <Button variant="outlined" onClick={() => addToCart(product)}>
                    {" "}
                    Cart
                  </Button>
                </CardActions>
              </Card>{" "}
            </Grid>
          ))}
      </Grid>
    </>
  );
}

export default Product;
