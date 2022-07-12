import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./pages/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer";
import UserLoginContainer from "./pages/UserLoginContainer";
import CartContainer from "./pages/CartContainer";

// import AuthContext from "./store/auth-context";

function App() {
  return (
    //? El Provider es el proveedor de contexto.
    // <AuthContext.Provider value={{
    //   isLoggedIn:
    // }}>
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
    // </AuthContext.Provider>
  );
}

export default App;
