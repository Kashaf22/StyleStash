import './App.css';
import Navigation from './customer/components/Navigation/Navigation.jsx';
import Footer from './customer/components/Footer/Footer'
import HomePage from './customer/Pages/HomePage';
import Product from './customer/components/Product/Product';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <div>
       <Product/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;