import { BrowserRouter, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './components/pages/HomePage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route path='/' exact component={HomePage} />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
