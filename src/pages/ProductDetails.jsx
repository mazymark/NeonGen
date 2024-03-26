import { useParams } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../App";
import NavBar from "../components/NavBar";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

export default function ProductDetails() {
  const { data, size, setSize, quantity, setQuantity, addToCart, showPopup } =
    useContext(MyContext);
  const { id } = useParams();
  const product = data.find((product) => product.id === Number(id));

  function handleDecrement() {
    if (quantity <= 1) return;
    setQuantity((prev) => prev - 1);
  }

  function handleIncrement() {
    if (quantity >= product.stock) return;
    setQuantity((prev) => prev + 1);
  }
  return (
    <>
      <NavBar />
      {showPopup && (
        <div className="popup">
          <p>Item(s) Added To Your Cart</p>
        </div>
      )}
      <div className="product-details-container" key={product.id}>
        <img
          className="product-details-image"
          src={product.image}
          alt="product-image"
        />
        <div className="product-text-details">
          <h1 className="product-details-title">{product.title}</h1>
          <h2 className="product-details-price">₩ {product.price}</h2>
          {product.stock <= 9 && (
            <h4 style={{ color: "#e60000" }}>Low Stock!</h4>
          )}
          <p className="product-details-description">{product.description}</p>

          {product.type === "T-Shirt" && (
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small-label">Size</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={size}
                label="Size"
                onChange={(e) => setSize(e.target.value)}
                required
                sx={{
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "black",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "black",
                  },
                }}
              >
                <MenuItem value="S">S</MenuItem>
                <MenuItem value="M">M</MenuItem>
                <MenuItem value="L">L</MenuItem>
                <MenuItem value="XL">XL</MenuItem>
              </Select>
            </FormControl>
          )}

          {product.type === "Sneakers" && (
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small-label">Size</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={size}
                label="Size"
                onChange={(e) => setSize(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "black",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "black",
                  },
                }}
              >
                <MenuItem value="255">255</MenuItem>
                <MenuItem value="260">260</MenuItem>
                <MenuItem value="265">265</MenuItem>
                <MenuItem value="270">270</MenuItem>
              </Select>
            </FormControl>
          )}

          {product.type === "Rings" && (
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small-label">Size</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={size}
                label="Size"
                onChange={(e) => setSize(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "black",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "black",
                  },
                }}
              >
                <MenuItem value="M">M</MenuItem>
                <MenuItem value="L">L</MenuItem>
                <MenuItem value="XL">XL</MenuItem>
              </Select>
            </FormControl>
          )}

          {product.type === "Backpack" && (
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small-label">Size</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={size}
                label="Size"
                onChange={(e) => setSize(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "black",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "black",
                  },
                }}
              >
                <MenuItem value="One Size">One Size</MenuItem>
              </Select>
            </FormControl>
          )}
          <br />
          <RemoveIcon className="decrement-icon" onClick={handleDecrement} />
          <span className="quantity"> {quantity} </span>
          <AddIcon className="increment-icon" onClick={handleIncrement} />
          <button
            onClick={() => addToCart(product, quantity, size)}
            className="add-to-cart-button"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
}
