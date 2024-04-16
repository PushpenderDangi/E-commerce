
import './App.css';
import { Cart } from "./Pages/Cart";
import { Product } from "./Pages/Product";
import { LoginSignup } from './Pages/LoginSignup';
import { Shop } from './Pages/Shop';
import { ShopCategory } from './Pages/ShopCategory';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
      
     <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      {/* I have used category as props */}
      <Route path='/mens' element={<ShopCategory category="mens" />}/>
      <Route path='/womens' element={<ShopCategory category="womens" />}/>
      <Route path='/kids' element={<ShopCategory category="kids" />}/>
      <Route path='/product' element={<Product/>}/>
        <Route path=':productId' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
    </Routes>
    <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
