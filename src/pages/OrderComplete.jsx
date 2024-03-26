import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { v4 as uuid } from "uuid";

export default function OrderComplete() {
  const randomId = uuid().slice(0, 8).toUpperCase();
  return (
    <>
      <NavBar />
      <div className="order-complete">
        <h1 className="order-complete-header">Your order has been received</h1>
        <img
          className="check-mark"
          src="/images/checkmark.svg"
          alt="Order Received"
        />
        <h2 className="order-complete-header-2">
          Thank you for your purchase!
        </h2>
        <p className="order-complete-paragraph">Your order ID is: {randomId}</p>
        <p className="order-complete-paragraph">
          You will receive an order confirmation email with details of your
          order
        </p>
        <Link to="/shop" className="continue-shopping-complete">
          CONTINUE SHOPPING
        </Link>
      </div>
    </>
  );
}
