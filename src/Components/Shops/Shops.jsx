import React, { useEffect, useState } from "react";
import { supabase } from "../../supabase";
import style from "./Shops.module.css";
import Navbar from "../Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";
import { Link, useSearchParams } from "react-router-dom";
import { useAppContext } from "../../AppContext";
import { toast } from "react-toastify";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Shops = () => {
  const [products, setProducts] = useState([]);
  const { wishlist, cart, addToWishlist, addToCart } = useAppContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [selectedRating, setSelectedRating] = useState("all");

  useEffect(() => {
    fetchProducts();
  }, [searchParams]);

  const fetchProducts = async () => {
    let query = supabase.from("products").select("*");

    const category = searchParams.get("category");
    const price = searchParams.get("price");
    const rating = searchParams.get("rating");
    const search = searchParams.get("search");

    if (category && category !== "all") {
      
      query = query.eq("category", category);
    }

    if (price && price !== "all") {
      query = query.lte("price", price);
    }

    if (rating && rating !== "all") {
      query = query.eq("isNew", rating === "5");
    }

    if (search) {
      query = query.ilike("title", `%${search}%`);
    }

    const { data, error } = await query;

    if (error) {
      console.error("Error fetching products:", error);
    } else {
      setProducts(data);
    }
  };

  const handleSearch = () => {
    setSearchParams({ search: searchQuery });
  };

  const handleFilterChange = (filterType, value) => {
    setSearchParams((prevParams) => {
      const params = new URLSearchParams(prevParams);
      if (value === "all") {
        params.delete(filterType);
      } else {
        params.set(filterType, value);
      }
      return params;
    });
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
      <div className={style.bgabout}>
        <Navbar />
        <div className={style.content}>
          <h1>
            OUR <span>SHOP</span>
          </h1>
        </div>
      </div>
      <div>
        <div className={style.filterSection}>
          <div className={style.searchBox}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products by name..."
            />
            <button onClick={handleSearch}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>

          <div className={style.filters}>
            <select
              onChange={(e) => handleFilterChange("category", e.target.value)}
              value={selectedCategory}
            >
              <option value="all">All Categories</option>
              <option value="Games, Gifts">Games,Gifts</option>
              <option value="T-Shirt">T-Shirt</option>
              <option value="Figures">Figures</option>
              <option value="Gifts">Gifts</option>
              
            </select>

            <select
              onChange={(e) => handleFilterChange("price", e.target.value)}
              value={selectedPrice}
            >
              <option value="all">All Prices</option>
              <option value="50">Under $40</option>
              <option value="100">Under $50</option>
              <option value="200">Under $100</option>
            </select>

            <select
              onChange={(e) => handleFilterChange("rating", e.target.value)}
              value={selectedRating}
            >
              <option value="all">All Ratings</option>
              <option value="4">4 Stars & Up</option>
              <option value="5">5 Stars</option>
            </select>
          </div>
        </div>

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
            <p>No products...</p>
          )}
        </div>
      </div>
      <div className={style.container}>
        <div className={style.flexContainer}>
          <div className={style.qamico}>
            <a href="../../Pages/Home.jsx" className={style.brand}>
              <img
                src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/logo_light.svg"
                className={style.logo}
              />
            </a>
            <p>
              Qamico is an independent game studio making original games for PC,
              consoles, and mobile platforms.
            </p>
            <hr />
            <div className={style.location}>
              <i class="fa-regular fa-building"></i>
              <span>2972 Westheimer Rd. Santa Ana, Illinois 85486</span>
            </div>
          </div>
          <div className={style.footerLinks}>
            <h5>Our Studio</h5>
            <Link>Home</Link>
            <Link>About Us</Link>
            <Link>Blog</Link>
          </div>
          <div className={style.footerLinks}>
            <h5>Services</h5>
            <Link>Shop</Link>
            <Link>FAQ</Link>
          </div>
          <div className={style.footerContact}>
            <h5>Say Hello</h5>
            <p>hello@example.com</p>
            <p>+123 888 000 33</p>
          </div>
        </div>
        <div className={style.footerBottom}>
          <img src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/ft-img.png" />
          <span>© 2023 Qamico™. All Rights Reserved.</span>
          <div className={style.socialIcons}>
            <a href="#" className={style.icon}>
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className={style.icon}>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className={style.icon}>
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className={style.icon}>
              <i class="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shops;
