import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../App";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Shop() {
  const { data } = useContext(MyContext);

  return (
    <>
      <NavBar />
      <h1 className="section-title">Essentials</h1>
      <section>
        {data.map((product) => (
          <div key={product.id} className="product">
            <Link
              className="product-link"
              key={product.id}
              to={`${product.id}`}
            >
              <img
                className="product-image"
                src={product.image}
                alt="product-image"
              />
              <h3>{product.title}</h3>
              <h3>₩ {product.price}</h3>
            </Link>
          </div>
        ))}
      </section>
      <div className="shop-footer">
        <Footer />
      </div>
    </>
  );
}
