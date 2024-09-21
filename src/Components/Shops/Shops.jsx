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
import { useTheme } from "../../ThemeContext";

const Shops = () => {
  const { darkMode } = useTheme();
  const [products, setProducts] = useState([]);
  const { wishlist, cart, addToWishlist, addToCart } = useAppContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [selectedRating, setSelectedRating] = useState("all");
  const [selectedSort, setSelectedSort] = useState("none");
  useEffect(() => {
    fetchProducts();
  }, [searchParams, searchQuery, selectedSort]);

  const fetchProducts = async () => {
    let query = supabase.from("products").select("*");

    const category = searchParams.get("category") || selectedCategory;
    const price = searchParams.get("price") || selectedPrice;
    const rating = searchParams.get("rating") || selectedRating;

    if (category && category !== "all") {
      query = query.eq("category", category);
    }

    if (price && price !== "all") {
      query = query.lte("price", price);
    }

    if (rating && rating !== "all") {
      query = query.eq("isNew", rating === "5");
    }

    if (searchQuery) {
      query = query.ilike("title", `%${searchQuery}%`);
    }

    const { data, error } = await query;

    if (error) {
      console.error("Error fetching products:", error);
    } else {
      let sortedData = data;
      if (selectedSort === "A-Z") {
        sortedData = data.sort((a, b) => a.title.localeCompare(b.title));
      } else if (selectedSort === "Z-A") {
        sortedData = data.sort((a, b) => b.title.localeCompare(a.title));
      }
      setProducts(sortedData);
    }
  };

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
    fetchProducts();
  };

  const handleFilterChange = (filterType, value) => {
    setSearchParams((prevParams) => {
      const params = new URLSearchParams(prevParams);
      if (value === "all") {
        params.delete(filterType);
      } else {
        params.set(filterType, value);
      }
      if (filterType === "category") {
        setSelectedCategory(value);
      } else if (filterType === "price") {
        setSelectedPrice(value);
      } else if (filterType === "rating") {
        setSelectedRating(value);
      }
      fetchProducts();

      return params;
    });
  };
  const handleSortChange = (e) => {
    setSelectedSort(e.target.value);
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
    <div className={darkMode ? style.darkMode : style.lightMode}>
      <div className={style.bgabout}>
        <Navbar />
        <div className={style.content}>
          <h1 data-aos="fade-down" data-aos-delay="200">
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
              onChange={handleSearchQueryChange}
              placeholder="Search products by name..."
            />
            <button className={style.butSearch} onClick={fetchProducts}>
              <FontAwesomeIcon className={style.search} icon={faSearch} />
            </button>
          </div>

          <div className={style.filters}>
            <select
              onChange={(e) => handleFilterChange("category", e.target.value)}
              value={selectedCategory}
            >
              <option value="all">All Categories</option>
              <option value="Games,Gifts">Games,Gifts</option>
              <option value="T-Shirt">T-Shirt</option>
              <option value="Figures">Figures</option>
              <option value="Gifts">Gifts</option>
            </select>

            <select
              onChange={(e) => handleFilterChange("price", e.target.value)}
              value={selectedPrice}
            >
              <option value="all">All Prices</option>
              <option value="20">Under $20</option>
              <option value="40">Under $40</option>
              <option value="60">Under $60</option>
              <option value="100">Under $100</option>
              <option value="300">Under $300</option>
            </select>
            <select
            onChange={handleSortChange}
            value={selectedSort}
          >
            <option value="none">Sort by</option>
            <option value="A-Z">A to Z</option>
            <option value="Z-A">Z to A</option>
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
              <i className="fa-regular fa-building"></i>
              <span>2972 Westheimer Rd. Santa Ana, Illinois 85486</span>
            </div>
          </div>
          <div className={style.footerLinks}>
            <h5>Our Studio</h5>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact us</Link>
          </div>
          <div className={style.footerLinks}>
            <h5>Services</h5>
            <Link to="/shop">Shop</Link>
            <Link to="/faq">FAQ</Link>
          </div>
          <div className={style.footerContact}>
            <h5>Say Hello</h5>
            <p>hello@example.com</p>
            <p>+123 888 000 33</p>
          </div>
        </div>
        <div className={style.footerBottom}>
          <img src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/ft-img.png" />
          <div className={style.footerBottomContent}>
            <span>© 2023 Qamico™. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shops;
