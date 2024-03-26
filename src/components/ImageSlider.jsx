import { Link } from "react-router-dom";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const sliderImages = [
  {
    url: "https://images.pexels.com/photos/9771508/pexels-photo-9771508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    caption: "For The Ultimate Style",
  },
  {
    url: "https://images.pexels.com/photos/9399679/pexels-photo-9399679.jpeg",
    caption: "New Items Added",
  },
  {
    url: "https://images.pexels.com/photos/9594682/pexels-photo-9594682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    caption: "Price Drop Until August, 31, 2024",
  },
];

export default function ImageSlider() {
  return (
    <>
      <Fade>
        {sliderImages.map((slideImage, index) => (
          <div className="image-slider" key={index}>
            <img
              className="image-slider-img"
              style={{ width: "100%" }}
              src={slideImage.url}
              alt={slideImage.caption}
            />
            <h2 className="image-slider-caption">{slideImage.caption}</h2>
            <Link to="/shop">
              <button className="image-slider-button">GO TO SHOP</button>
            </Link>
          </div>
        ))}
      </Fade>
    </>
  );
}
