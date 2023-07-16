import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContextProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import AppRouter from './router/AppRouter';
function App() {
  return (
    <AuthContextProvider>
      <CartProvider>
        <AppRouter/>
      </CartProvider>
    </AuthContextProvider>
  )
}

export default App;
