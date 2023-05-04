import logo from './logo.svg';
import Header from './layouts/components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Bill from './pages/Bill/Bill';
import Cart from './pages/Cart/Cart';
import Footer from './layouts/components/Footer/Footer';
import { data } from './data/data';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState,createContext } from 'react';

export const AppContext = createContext()

function App() {


  const [dataProduct, setDataProduct] = useState(() => {
    let dataCartStorage = localStorage.getItem('KEYDATAPRODUCT');
    if (dataCartStorage) {
      return JSON.parse(dataCartStorage);
    } else {
      localStorage.setItem('KEYDATAPRODUCT', JSON.stringify(data));
      return [];
    }
  })

  const [dataCart, setDataCart] = useState(() => {
    let dataCartStorage = localStorage.getItem('KEYDATACART');
    if (dataCartStorage) {
      return JSON.parse(dataCartStorage);
    } else {
      localStorage.setItem('KEYDATACART', JSON.stringify([]));
      return [];
    }
  });
  return (
    <AppContext.Provider value={{ dataCart, setDataCart, dataProduct, setDataProduct }}>
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/bill">
              <Bill />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </AppContext.Provider >
  );
}

export default App;
