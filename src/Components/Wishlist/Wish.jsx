import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../AppContext";

const Wish = () => {
  const { wishlist, removeFromWishlist } = useAppContext();
  const navigate = useNavigate();

  return (
    <div>

      <div>
        <h1>Wishlist</h1>
        {wishlist.length > 0 ? (
          wishlist.map((product, index) => (
            <div key={index}>
              <img src={product.image} />
              <h2>{product.title}</h2>
              <h3>${product.price}</h3>
              <button onClick={() => removeFromWishlist(product)}>
                Remove
              </button>
            </div>
          ))
        ) : (
          <p>No items in wishlist.</p>
        )}
        <button onClick={() => navigate("/shop")}>Back to Shop</button>
      </div>
    </div>
  );
};

export default Wish;
