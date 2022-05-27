import Header from './Components/Shear/Header/Header'
import './App.css';
import Home from './Components/Home/Home';
import {Routes,Route,} from "react-router-dom";
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
import AdminChecking from './Components/Page/AdminChecking/AdminChecking';
import Profile from './Components/DashBoard.js/Profile/Profile';
import MyOrder from './Components/DashBoard.js/MyOrder/MyOrder';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Purchase from './Components/Page/Purchase/Purchase';
import Payment from './Components/Page/Payment/Payment';
import Footer from './Components/Page/Footer/Footer';

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
          <Route index element={<Profile></Profile>}></Route>
          <Route path='my-order' element={<MyOrder></MyOrder>}></Route>
          <Route path='review' element={<Review></Review>}></Route>
          <Route path='all-user' element={<AdminChecking>
            <AllUser></AllUser>
          </AdminChecking>}></Route>
          <Route path='manage-products' element={
            <AdminChecking>
              <ManageProducts></ManageProducts>
            </AdminChecking>
          }></Route>
          <Route path='manage-order' element={<ManageOrder></ManageOrder>}></Route>
          <Route path='add-product' element={
            <AdminChecking>
              <AddProduct></AddProduct>
            </AdminChecking>
          }></Route>
        </Route>
        <Route path='/tools-parts' element={<RequireAuth>
          <Tools></Tools>
        </RequireAuth>} />
        <Route path='/purchase/:id' element={
        <RequireAuth>
          <Purchase />
        </RequireAuth>
        } />
        <Route path='/payment/:id' element={
        <RequireAuth>
          <Payment />
        </RequireAuth>
        } />
        <Route path='*' element={<PageNotFound />} />
      </Routes>

    </>
  );
}

export default App;
