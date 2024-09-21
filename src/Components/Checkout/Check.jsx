// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate, useSearchParams } from 'react-router-dom';
// import style from './Check.module.css';
// import Navbar from '../Navbar/Navbar';

// const Check = () => {
//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();
//   const [product, setProduct] = useState(null);
//   const [cardDetails, setCardDetails] = useState({
//     cardNumber: '',
//     cardHolder: '',
//     expiration: '',
//     cvv: '',
//   });

//   useEffect(() => {
  
//     const param = searchParams.get('product');
//     if (param) {
//       const parsedProduct = JSON.parse(decodeURIComponent(param));
//       setProduct(parsedProduct);
//     }
//   }, [searchParams]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setCardDetails({ ...cardDetails, [name]: value });
//   };

//   const handleCheckout = () => {
//     navigate('/thanks');
//   };

//   if (!product) return <p>Loading...</p>;

//   const totalPrice = product.price * product.quantity;

//   return (
//     <div>
//       <div className={style.bgabout}>
//         <Navbar />
//         <div className={style.content}>
//           <h1>
//             CHECK<span>OUT</span>
//           </h1>
//         </div>
//       </div>

//       <div className={style.item}>
//         <div className={style.orderSummary}>
//           <div className={style.product}>
//             <img src={product.image} alt={product.title} />
//             <div className={style.details}>
//               <h3>{product.title}</h3>
//               <p>{product.category}</p>
//               <p>Quantity: {product.quantity}</p>
//             </div>
//           </div>
//           <div className={style.total}>
//             <h3>Total: ${totalPrice.toFixed(2)}</h3>
//           </div>
//         </div>

//         <div className={style.paymentSection}>
//           <h2>Payment Information</h2>
//           <form>
//             <div className={style.inputGroup}>
//               <label>Card Number</label>
//               <input
//                 type="text"
//                 name="cardNumber"
//                 placeholder="1234 5678 9012 3456"
//                 value={cardDetails.cardNumber}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className={style.inputGroup}>
//               <label>Card Holder Name</label>
//               <input
//                 type="text"
//                 name="cardHolder"
//                 placeholder="John Doe"
//                 value={cardDetails.cardHolder}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className={style.inputRow}>
//               <div className={style.inputGroup}>
//                 <label>Expiration Date</label>
//                 <input
//                   type="text"
//                   name="expiration"
//                   placeholder="MM/YY"
//                   value={cardDetails.expiration}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className={style.inputGroup}>
//                 <label>CVV</label>
//                 <input
//                   type="text"
//                   name="cvv"
//                   placeholder="123"
//                   value={cardDetails.cvv}
//                   onChange={handleInputChange}
//                 />
//               </div>
//             </div>
//             <button type="button" className={style.checkoutBtn} onClick={handleCheckout}>
//               Complete Payment
//             </button>
//           </form>
//         </div>
//       </div>
//       <div className={style.container}>
      
//         <div className={style.flexContainer}>
//           <div className={style.qamico}>
//             <a href="../../Pages/Home.jsx" className={style.brand}>
//               <img
//                 src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/logo_light.svg"
//                 className={style.logo}
//               />
//             </a>
//             <p>
//               Qamico is an independent game studio making original games for PC,
//               consoles, and mobile platforms.
//             </p>
//             <hr />
//             <div className={style.location}>
//               <i class="fa-regular fa-building"></i>
//               <span>2972 Westheimer Rd. Santa Ana, Illinois 85486</span>
//             </div>
//           </div>
//           <div className={style.footerLinks}>
//             <h5>Our Studio</h5>
//             <Link to='/'>Home</Link>
//             <Link to='/about'>About Us</Link>
//             <Link to='/contact'>Contact us</Link>
//            </div>
//           <div className={style.footerLinks}>
//             <h5>Services</h5>
//             <Link to='/shop'>Shop</Link>
//             <Link to='/faq'>FAQ</Link>
//           </div>
//           <div className={style.footerContact}>
//             <h5>Say Hello</h5>
//             <p>hello@example.com</p>
//             <p>+123 888 000 33</p>
//           </div>
//         </div>
//         <div className={style.footerBottom}>
//           <img src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/ft-img.png" />
//           <span>© 2023 Qamico™. All Rights Reserved.</span>
//           <div className={style.socialIcons}>
//             <a href="#" className={style.icon}>
//               <i className="fab fa-facebook"></i>
//             </a>
//             <a href="#" className={style.icon}>
//               <i className="fab fa-twitter"></i>
//             </a>
//             <a href="#" className={style.icon}>
//               <i className="fab fa-instagram"></i>
//             </a>
//             <a href="#" className={style.icon}>
//               <i class="fa-brands fa-youtube"></i>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Check;
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import style from './Check.module.css';
import Navbar from '../Navbar/Navbar';

const Check = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardHolder: '',
    expiration: '',
    cvv: '',
  });

  useEffect(() => {
    const params = searchParams.getAll('product');
    if (params.length > 0) {
      const parsedProducts = params.map(param => JSON.parse(decodeURIComponent(param)));
      setProducts(parsedProducts);
    }
  }, [searchParams]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const handleCheckout = () => {
    navigate('/thanks');
  };

  const totalPrice = products.reduce((total, product) => total + product.price * product.quantity, 0);

  if (products.length === 0) return <p>Loading...</p>;

  return (
    <div>
      <div className={style.bgabout}>
        <Navbar />
        <div className={style.content}>
          <h1>CHECK<span>OUT</span></h1>
        </div>
      </div>

      <div className={style.item}>
        <div className={style.orderSummary}>
          {products.map((product, index) => (
            <div key={index} className={style.product}>
              <img src={product.image} alt={product.title} />
              <div className={style.details}>
                <h3>{product.title}</h3>
                <p>{product.category}</p>
                <p>Quantity: {product.quantity}</p>
              </div>
            </div>
          ))}
          <div className={style.total}>
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
          </div>
        </div>

        <div className={style.paymentSection}>
          <h2>Payment Information</h2>
          <form>
            <div className={style.inputGroup}>
              <label>Card Number</label>
              <input
                type="text"
                name="cardNumber"
                placeholder="1234 5678 9012 3456"
                value={cardDetails.cardNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className={style.inputGroup}>
              <label>Card Holder Name</label>
              <input
                type="text"
                name="cardHolder"
                placeholder="John Doe"
                value={cardDetails.cardHolder}
                onChange={handleInputChange}
              />
            </div>
            <div className={style.inputRow}>
              <div className={style.inputGroup}>
                <label>Expiration Date</label>
                <input
                  type="text"
                  name="expiration"
                  placeholder="MM/YY"
                  value={cardDetails.expiration}
                  onChange={handleInputChange}
                />
              </div>
              <div className={style.inputGroup}>
                <label>CVV</label>
                <input
                  type="text"
                  name="cvv"
                  placeholder="123"
                  value={cardDetails.cvv}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <button type="button" className={style.checkoutBtn} onClick={handleCheckout}>
              Complete Payment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Check;

