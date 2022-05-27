import './App.css';
import Home from './pages/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Carts from './components/Carts';
import { CartProvider } from 'react-use-cart';

function App() {
  return (
    <div>
        <CartProvider>
          <Home />
          <Carts />
        </CartProvider>
    </div>
  );
}

export default App;
