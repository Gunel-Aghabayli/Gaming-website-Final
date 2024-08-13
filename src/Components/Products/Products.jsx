import React from "react";
import style from "./Products.module.css";
import { useSearchParams } from "react-router-dom";
import { supabase } from "../../supabase";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const Products = () => {
  const [searchParam] = useSearchParams();
  const selectedProductID = searchParam.get("product");
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (selectedProductID) {
        const { data, error } = await supabase
          .from("products") 
          .select("*")
          .eq("id", selectedProductID)
          .single();

        if (error) {
          console.error("Error");
        } else {
          setProduct(data);
        }
      }
    };

    fetchProduct();
  }, [selectedProductID]);

  if (!product) return <div>Loading...</div>;
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
            PRODUCT <span>DETAIL</span>
          </h1>
        </div>
      </div>
      <div className={style.proInfo}>
        <div className={style.image}>
          <img src={product.image} />
        </div>
        <div className={style.items}>
          <div className={style.name}>{product.title}</div>
          <div>{renderStars(product.isNew)}</div>
          <div className={style.line}></div>
          <div className={style.describe}>{product.description}</div>
          <div className={style.price}>${product.price}</div>
          <h2>Size:</h2>
          <div className={style.sizes}>
            <a className={style.size}>S</a>
            <a className={style.size}>M</a>
            <a className={style.size}>L</a>
            <a className={style.size}>XL</a>
          </div>
          <div className={style.line}></div>
          <h5>Guarantee Safe & Secure Checkout</h5>
          <img
            className={style.company}
            src="https://demo2.wpopal.com/gamico/wp-content/uploads/2024/04/payment.png"
          />
          <div className={style.tags}>
            <div>Categories:  <span>{product.category}</span></div>
            <div>Tags:  <span>Games, Gifts</span></div>
            <div className={style.alink}>
              Share:
              <a href="#" className={style.icon}>
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className={style.icon}>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className={style.icon}>
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
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

export default Products;
