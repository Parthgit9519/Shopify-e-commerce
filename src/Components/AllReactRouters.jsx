import React from 'react'
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './../Screens/HomePage';
import ProductDescription from '../Screens/ProductDescription';
import CartPage from '../Screens/CartPage';
import Deals from '../Screens/Deals';
import ComingSoon from '../Screens/ComingSoon';
import { ThemeProvider } from '../Screens/ContextData/ThemeContext';

const AllReactRouters = () => {
   return (
      <ThemeProvider>
         <div>

            <Navbar></Navbar>

            <Routes>
               <Route path='/' element={<HomePage></HomePage>}></Route>
               <Route path='/cartPage' element={<CartPage></CartPage>}></Route>
               <Route path='/deals' element={<Deals></Deals>}></Route>
               <Route path='/comingSoon' element={<ComingSoon></ComingSoon>}></Route>
               <Route path='/productDescription/:id' element={<ProductDescription></ProductDescription>}></Route>
            </Routes>


         </div>
      </ThemeProvider >
   )
}

export default AllReactRouters