import NavBar from "../components/NavBar";
import { MyContext } from "../App";
import { useContext } from "react";
import { Link } from "react-router-dom";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import OrderSummary from "../components/OrderSummary";
import Footer from "../components/Footer";

export default function Cart() {
  const {
    cart,
    handleDecrementCartItem,
    handleIncrementCartItem,
    handleRemoveCartItem,
  } = useContext(MyContext);

  const totalSum = cart.reduce(
    (acc, product) => acc + parseInt(product.product.price) * product.quantity,
    0
  );

  return (
    <>
      <NavBar />
      <h1 className="cart-title">Your Cart</h1>

      {cart.length > 0 && (
        <Link className="continue-shopping-button" to="/shop">
          CONTINUE SHOPPING
        </Link>
      )}

      {cart.map((product, index) => (
        <div className="cart-container" key={index}>
          <Link to={`${product.product.id}`}>
            <img
              className="cart-product-image"
              src={product.product.image}
              alt="Product-Image"
            />
          </Link>

          <div className="cart-product-details">
            <h5 className="cart-product-name">{product.product.title}</h5>
            <p>Size: {product.size}</p>
          </div>

          <div className="cart-panel">
            <AddIcon
              className="increment-icon"
              onClick={() => handleIncrementCartItem(product)}
            />
            <span className="product-quantity-cart">{product.quantity}</span>
            <RemoveIcon
              className="decrement-icon"
              onClick={() => handleDecrementCartItem(product)}
            />
            <h4>₩ {product.product.price}</h4>
            <p className="product-price-cart">
              Total ₩ {parseInt(product.product.price) * product.quantity},000
            </p>
            <ClearOutlinedIcon
              className="remove-icon"
              onClick={() => handleRemoveCartItem(product)}
            />
          </div>
        </div>
      ))}
      {cart.length > 0 && <OrderSummary totalSum={totalSum} />}

      {cart.length === 0 && (
        <div className="empty-cart-container">
          <img
            className="empty-cart-image"
            src="images/empty-cart.png"
            alt="Empty Cart"
          />
          <Link className="nav-link-empty" to="/shop">
            Go To Shop
          </Link>
        </div>
      )}

      <div className="cart-footer">
        <Footer />
      </div>
    </>
  );
}
