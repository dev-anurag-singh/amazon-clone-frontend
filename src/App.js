import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ErrorBox from './components/ErrorBox';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';

// IMPORTING PAGES FOR ROUTING
import HomePage from './components/pages/HomePage';
import ProductPage from './components/pages/ProductPage';
import CartPage from './components/pages/CartPage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/products/:slug/:id' component={ProductPage} />
          <Route path='/mycart' component={CartPage} />
          <Route component={ErrorBox} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
