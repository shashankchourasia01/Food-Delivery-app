// import React, { useContext } from 'react';
// import './Cart.css';
// import { StoreContext } from '../../context/StoreContext';

// const Cart = () => {
//   const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

//   return (
//     <div className='cart'>
//       <div className="cart-items">
//         <div className="cart-items-title">
//           <p>Items</p>
//           <p>Title</p>
//           <p>Price</p>
//           <p>Quantity</p>
//           <p>Total</p>
//           <p>Remove</p>
//         </div>
//         <br />
//         <hr />
//         {food_list.map((item) => {
//           const quantity = cartItems[item._id] || 0; // Use item._id to check quantity
//           if (quantity > 0) {
//             const total = item.price * quantity; // Calculate total
//             return (
//               <div key={item._id} className='cart-items-item'>
//                 <p>{item.name}</p>
//                 <p>${item.price.toFixed(2)}</p>
//                 <p>{quantity}</p>
//                 <p>${total.toFixed(2)}</p>
//                 <button onClick={() => removeFromCart(item._id)}>Remove</button>
//               </div>
//             );
//           }
//           return null; // Return null if the quantity is 0
//         })}
//       </div>
//     </div>
//   );
// };

// export default Cart;

// import React, { useContext } from 'react'
// import './Cart.css'
// import { StoreContext } from '../../context/StoreContext'

// const Cart = () => {

//     const {cartItems, food_list,removeFromCart} = useContext(StoreContext);

//   return (
//     <div className='cart'>
//       <div className="cart-items">
//         <div className="cart-items-title">
//           <p>Items</p>
//           <p>Title</p>
//           <p>Price</p>
//           <p>Quantity</p>
//           <p>Total</p>
//           <p>Remove</p>
//         </div>
//         <br />
//         <hr />
//         {food_list.map((item,index) => {
//           if(cartItems[cartItems._id]>0)
//           {
//             return(
//               <div key={item._id} className='cart-items-title cart-items-item'>
//                <img src={item.image} alt="" />
//                <p>{item.name}</p>
//                 <p>{item.price}</p>
//                 <p>{cartItems[item._id]}</p>
//                 <p>{item.price*cartItems[item._id]}</p>
//                 <p>x</p>
//               </div>
//             )
//           }
//         })}
//       </div>

//     </div>
//   )
// }

// export default Cart

import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmout } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          const quantity = cartItems[item._id] || 0; // Get the quantity for the current item
          if (quantity > 0) {
            // Check if the item is in the cart
            const total = item.price * quantity; // Calculate total price
            return (
              <div>
                <div key={item._id} className="cart-items-item">
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>${item.price.toFixed(2)}</p>
                  <p>{quantity}</p>
                  <p>${total.toFixed(2)}</p>
                  <p onClick={()=>removeFromCart(item._id)} className="cross">x</p>
                  {/* <button onClick={() => removeFromCart(item._id)}>Remove</button> */}
                </div>
                <hr />
              </div>
            );
          }
          return null; // Return null if the quantity is 0
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-detail">
              <p>Subtotal</p>
              <p>${getTotalCartAmout()}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmout()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <b>Total</b>
              <b>${ getTotalCartAmout()=== 0 ? 0 : getTotalCartAmout() +2}</b>
            </div>
           
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promo-code">
          <div>
            <p>If you have Promo Code, Enter it here</p>
            <div className="cart-promo-code-input">
              <input type="text" placeholder="Promo Code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
