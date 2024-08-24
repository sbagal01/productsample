import React from 'react'
import {Outlet} from 'react-router-dom';
import MenuAppBar from './MenuAppBar';
import {Provider} from 'react-redux';
import store from '../store/store'
function RootLayout() {
  return (
    <>
    <Provider store={store}>
    <MenuAppBar /> 
    
      <Outlet />
    
    </Provider>

    </>
  )
}

export default RootLayout
