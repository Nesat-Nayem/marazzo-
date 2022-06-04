import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import Card from './Components/Card/Card';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewProduct from './Components/ViewProduct/ViewProduct';
import FilteredProduct from './Components/FilteredProduct/FilteredProduct';

function App() {
  return (
    <div >
        <BrowserRouter>
        <Header></Header>
    <Routes>
      <Route path="/" element={<Home />} />
    
        <Route path="/products" element={<Products />} />
        <Route path="/products/:category" element={<FilteredProduct />} />
        <Route path="/products/:category/:productId" element={<ViewProduct />} />
       
     
       
      
    </Routes>
    <Footer></Footer> 
  </BrowserRouter>
     {/* 
     <Home></Home>
     <Card></Card>
     */}
    </div>
  );
}

export default App;
