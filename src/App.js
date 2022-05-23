import Header from './Components/Shear/Header/Header'
import './App.css';
import Home from './Components/Home/Home';
import {
  Routes,
  Route,
} from "react-router-dom";
import Login from './Components/Page/Login/Login';
import SignUp from './Components/Page/SignUp/SignUp';
import Blog from './Components/Page/Blog/Blog';
import DashBoard from './Components/DashBoard.js/DashBoard';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import AddProduct from './Components/DashBoard.js/AddProduct.js/AddProduct';
import Products from './Components/Page/Products/Products';
import Review from './Components/DashBoard.js/Review/Review';
import ManageProducts from './Components/DashBoard.js/ManageProducts/ManageProducts';
import ManageOrder from './Components/DashBoard.js/ManageOrder/ManageOrder';
import AllUser from './Components/DashBoard.js/AllUser/AllUser';
import Tools from './Components/Page/Tools/Tools';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/blog' element={<Blog />} />
        <Route path="dashboard" element={<RequireAuth>
          <DashBoard />
        </RequireAuth>} >
          <Route index element={<ManageOrder></ManageOrder>}></Route>
          <Route path='review' element={<Review></Review>}></Route>
          <Route path='all-user' element={<AllUser></AllUser>}></Route>
          <Route path='manage-products' element={<ManageProducts></ManageProducts>}></Route>
          <Route path='manage-order' element={<ManageOrder></ManageOrder>}></Route>
          <Route path='add-product' element={<AddProduct></AddProduct>}></Route>
          <Route path='add-product' element={
              <AddProduct></AddProduct>
          }></Route>
        </Route>
        <Route path='/tools-parts' element={<RequireAuth>
          <Tools></Tools>
        </RequireAuth>} />
      </Routes>
    </>
  );
}

export default App;
