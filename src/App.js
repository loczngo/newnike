import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Masterlayout from './components/Masterlayout';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ProductDetails from './components/ProductDetails/ProductDetails';
import About from './components/About/About';
import Productlist from './components/ProductList/Productlist';
import Checkout from './components/Checkout/Checkout';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Masterlayout children={<Home />} />} ></Route>
        <Route path='/login' element={<Masterlayout children={<Login />} />} ></Route>
        <Route path='/productdetails/:id' element={<Masterlayout children={<ProductDetails />} />} ></Route>
        <Route path='/about' element={<Masterlayout children={<About />} />} ></Route>
        <Route path='/productlist' element={<Masterlayout children={<Productlist />} />} ></Route>
        <Route path='/checkout' element={<Masterlayout children={<Checkout />} />} ></Route>
        <Route path='/contact' element={<Masterlayout children={<Contact />} />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
