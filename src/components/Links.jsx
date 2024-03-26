import { NavLink } from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import { MyContext } from "../App";
import { useContext } from "react";

export default function Links() {
  const { totalCartItems } = useContext(MyContext);
  return (
    <>
      <div className="links">
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive ? "isActive nav-link" : "nav-link"
          }
        >
          Shop
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "isActive nav-link" : "nav-link"
          }
        >
          <ContactSupportOutlinedIcon />
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? "isActive nav-link" : "nav-link"
          }
        >
          <ShoppingBagOutlinedIcon />
          <h6 className="cart-amount">{totalCartItems}</h6>
        </NavLink>
      </div>
    </>
  );
}
