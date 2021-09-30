import { BrowserRouter, Route } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';

// IMPORTING PAGES FOR ROUTING
import HomePage from './components/pages/HomePage';
import ProductPage from './components/pages/ProductPage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route path='/' exact component={HomePage} />
        <Route path='/products/:slug/:id' component={ProductPage} />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
