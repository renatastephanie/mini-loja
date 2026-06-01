import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { CartPage } from "./pages/CartPage"
import { OrdersPage } from "./pages/OrdersPage"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/orders" element={<OrdersPage /> } />
      </Routes>
    </>
  )
}

export default App
