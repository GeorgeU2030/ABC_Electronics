import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loginpage from './pages/Loginpage';
import MenuPage from './pages/MenuPage';
import BuyPage from './pages/BuyPage';
import OrdersPage from './pages/OrdersPage';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AddInfoPage from './pages/AddInfoPage';
import RegisterPage from './pages/RegisterPage';

function isCustomer(){
  const customer = localStorage.getItem('customer')
  return customer !== null
}

const ProtectedRoute = ({ element }) => {
  return isCustomer() ? element : <Navigate to="/" />;
};

const App = () => {

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Loginpage></Loginpage>}></Route>
    <Route path='/' element={isCustomer() ? <Navigate to='/mainmenu'></Navigate>:<Loginpage></Loginpage>}></Route>
        <Route
          path="/*"
          element={
            <ProtectedRoute
              element={<Routes>
                <Route path='/register' element={<RegisterPage></RegisterPage>} />
                <Route path="/mainmenu" element={<MenuPage></MenuPage>} />
                <Route path="/product/:id" element={<BuyPage></BuyPage>} />
                <Route path="/addinfo" element={<AddInfoPage></AddInfoPage>} />
                <Route path="/orders" element={<OrdersPage></OrdersPage>} />
              </Routes>}
            />
          }
        />
    </Routes>
    <ToastContainer></ToastContainer>
    </BrowserRouter>
  )
}

export default App
