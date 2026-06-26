import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { CartPage } from "./pages/CartPage"
import { ChechoutPage } from "./pages/CheckoutPage"
import { OrdersPage } from "./pages/OrdersPage"
import { LoginPage } from "./pages/LoginPages"
import { RegisterPage } from "./pages/RegisterPage"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<ChechoutPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/login" element={ <LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
      </Routes>
    </>
  );
}

export default App
