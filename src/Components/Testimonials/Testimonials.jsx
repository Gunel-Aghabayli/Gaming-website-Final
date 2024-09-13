import React, { useEffect, useState } from "react";
import style from "./Testionials.module.css";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { supabase } from "../../supabase";
import { toast } from "react-toastify";
import { useAppContext } from "../../AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";
const Testimonials = () => {
  const [products, setProducts] = useState([]);

  const { wishlist, cart, addToWishlist, addToCart } = useAppContext();
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data, error } = await supabase.from("products").select("*");

    if (error) {
      console.error("Error fetching products:", error);
    } else {
     setProducts(data.slice(0, 3));
    }
  };

  const isProductInWishlist = (product) => {
    return wishlist.some((item) => item.id === product.id);
  };

  const isProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  const handleAddToWishlist = (product) => {
    if (!isProductInWishlist(product)) {
      addToWishlist(product);
      toast.success("Added successfully to Wishlist");
    }
  };

  const handleAddToCart = (product) => {
    if (!isProductInCart(product)) {
      addToCart(product);
      toast.success("Added successfully to Cart");
    }
  };

  const renderStars = (isNew) => {
    const filledStars = isNew ? 5 : 4;
    const totalStars = 5;

    return (
      <div>
        {[...Array(filledStars)].map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            style={{ color: "#000", marginRight: "5px" }}
          />
        ))}
        {[...Array(totalStars - filledStars)].map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faStarEmpty}
            style={{ color: "#000", marginRight: "5px" }}
          />
        ))}
      </div>
    );
  };
  return (
    <div>
      <div className={style.reviews}>
        <h1>
          GAME <span>REVIEWS</span>
        </h1>
        <div className={style.allReviews}>
          <div className={style.review}>
            <h2>MASTERPIECE</h2>
            <hr />
            <p>
              “Animated space-exploration drama combines gorgeous animation with
              an exciting and emotional story”
            </p>
            <h6>ROBERT FOX, GAMER</h6>
          </div>
          <div className={style.review}>
            <h2>AMAZING</h2>
            <hr />
            <p>
              “Excellent job, your games is phenomenal. This is the way people
              will play in the future.”
            </p>
            <h6>JOHN DOE, PC GAMER</h6>
          </div>
          <div className={style.review}>
            <h2>GREAT</h2>
            <hr />
            <p>
              “Mesmerizing, serious gameplay. An exceptional work of the
              videogame scene!”
            </p>
            <h6>KEVIN JONES, GAME REVIEW</h6>
          </div>
        </div>
        <div className={style.heading}>
          <hr />
          <h3>RECENT CLIENTS</h3>
          <hr />
        </div>
        <Marquee>
          <div className={style.logos}>
            <img
              src="https://cdn-icons-png.flaticon.com/256/5969/5969151.png"
              width="120"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/256/13/13973.png"
              width="120"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/256/1/1321.png"
              width="100"
              height="100"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/256/588/588330.png"
              width="120"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/256/588/588338.png"
              width="100"
            />
          </div>
        </Marquee>
      </div>
      <h2 className={style.featured}>
        FEATURED <span>PRODUCTS</span>
      </h2>
      <div className={style.shopBox}>
        {products.length > 0 ? (
          products.map((product) => (
            <div className={style.box} key={product.id}>
              <img src={product.image} alt={product.title} />
              <Link to={`/shops/products?product=${product.id}`}>
                {product.title}
              </Link>
              <div>{renderStars(product.isNew)}</div>
              <h3>${product.price}</h3>
              <div className={style.btnS}>
                <button
                  className={style.btn}
                  onClick={() => handleAddToWishlist(product)}
                  disabled={isProductInWishlist(product)}
                >
                  {isProductInWishlist(product)
                    ? "Already Added"
                    : "Add to Wishlist"}
                </button>
                <button
                  className={style.btn}
                  onClick={() => handleAddToCart(product)}
                  disabled={isProductInCart(product)}
                >
                  {isProductInCart(product) ? "Already Added" : "Add to Cart"}
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
      <Link className={style.view} to='/shop'>GO TO SHOP</Link>
    </div>
  );
};

export default Testimonials;
