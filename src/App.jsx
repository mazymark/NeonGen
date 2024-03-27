import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import OrderComplete from "./pages/OrderComplete";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import { data } from "../data";
export const MyContext = createContext();

export default function App() {
  const storedItems = JSON.parse(localStorage.getItem("cart"));
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState(storedItems || []);
  const [showPopup, setShowPopup] = useState(false);
  const totalCartItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const [paid, setPaid] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product, quantity, size) {
    if (!size) {
      alert("Please select a size");
      return;
    }

    const newItem = { product, quantity, size };
    if (
      cart.some((item) => item.product.id === product.id && item.size === size)
    ) {
      setCart((prev) =>
        prev.map((item) =>
          item.product.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
      setSize("");
      setQuantity(1);
      popup();
      buttonLoader();
    } else {
      setCart([...cart, newItem]);
      setSize("");
      setQuantity(1);
      popup();
      buttonLoader();
    }
  }

  function popup() {
    setTimeout(() => {
      setShowPopup(true);
    }, 300);

    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  }

  function buttonLoader() {
    setLoadingButton(true);

    setTimeout(() => {
      setLoadingButton(false);
    }, 1000);
  }

  function handleDecrementCartItem(product) {
    if (product.quantity <= 1) return;
    setCart(
      cart.map((item) =>
        item.product.id === product.product.id && item.size === product.size
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }

  function handleIncrementCartItem(product) {
    if (product.quantity >= 10) return;
    setCart(
      cart.map((item) =>
        item.product.id === product.product.id && item.size === product.size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function handleRemoveCartItem(product) {
    setCart(
      cart.filter(
        (item) =>
          item.product.id !== product.product.id || item.size !== product.size
      )
    );
  }

  function orderDone() {
    setPaid(true);
    setCart([]);
  }

  return (
    <MyContext.Provider
      value={{
        data,
        size,
        setSize,
        quantity,
        setQuantity,
        addToCart,
        cart,
        totalCartItems,
        handleDecrementCartItem,
        handleIncrementCartItem,
        handleRemoveCartItem,
        showPopup,
        orderDone,
        loadingButton,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:id" element={<ProductDetails />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="cart/:id" element={<ProductDetails />} />(
          {paid && (
            <Route path="cart/order-complete" element={<OrderComplete />} />
          )}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}
