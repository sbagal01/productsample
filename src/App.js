import React from 'react';
//import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
//import './App.css';
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProductDetails from './components/ProductDetails.js'
import Cart from './components/Cart';
//import Product from './components/Product';
import RootLayout from './components/RootLayout.js'
function App() {
  const router=createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />}></Route>
      <Route path='/:id' element={<ProductDetails />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      {/* <Route exact path="/products" element={<Product />}></Route> */}
    </Route>
  ))
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <RouterProvider router={router} />
      {/* <Product></Product> */}
    </div>
  );
}

export default App;
