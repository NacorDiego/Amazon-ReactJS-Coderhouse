import ItemListContainer from "./pages/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./pages/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLoginContainer from "./pages/UserLoginContainer";

// import AuthContext from "./store/auth-context";

function App() {
  return (
    //? El Provider es el proveedor de contexto.
    // <AuthContext value={{
    //   isLoggedIn:
    // }}>
      <BrowserRouter >

        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:catid" element={<ItemListContainer />} />
          <Route path="/item/:itemid" element={<ItemDetailContainer />} />
          <Route path="/user/login" element={<UserLoginContainer />} />
        </Routes>

      </BrowserRouter>
    // </AuthContext>
  );
}

export default App;
