import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../App";
export default function OrderSummary({ totalSum }) {
  const { orderDone } = useContext(MyContext);
  const shippingCost = totalSum < 200 ? 5 : 0;
  const totalCost = totalSum + shippingCost;

  return (
    <div className="order-summary-container">
      <h1 className="order-summary-title">ORDER SUMMARY</h1>
      <h3 className="order-summary-subtotal">
        Subtotal: KRW {totalSum.toLocaleString()},000
      </h3>

      <h3 className="order-summary-shipping">
        Shipping:
        {shippingCost > 0
          ? ` KRW ${shippingCost.toLocaleString()},000`
          : " FREE"}
      </h3>
      <h2 className="order-summary-total">
        Total ₩ {totalCost.toLocaleString()},000
      </h2>
      <Link to="order-complete" onClick={orderDone} className="checkout-button">
        CHECKOUT NOW
      </Link>
    </div>
  );
}
