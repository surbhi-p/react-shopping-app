import './App.scss';
import Cart from './component/Cart';
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './page/Home';
import store from './store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header />
      <Home />
      <Footer />
      <Cart />
    </div>
    </Provider>
  );
}

export default App;
