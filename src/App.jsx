import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./pages/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer";
import UserLoginContainer from "./pages/UserLoginContainer";
import CartContainer from "./pages/CartContainer";
import { CartProvider } from "./store/cart-context";

// import AuthContext from "./store/auth-context";

function App() {
  return (
      <CartProvider>
        <BrowserRouter >

          <NavBar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:catid" element={<ItemListContainer />} />
            <Route path="/item/:itemid" element={<ItemDetailContainer />} />
            <Route path="/user/login" element={<UserLoginContainer />} />
            <Route path="/cart" element={<CartContainer />} />
          </Routes>

        </BrowserRouter>
      </CartProvider>
  );
}

export default App;
