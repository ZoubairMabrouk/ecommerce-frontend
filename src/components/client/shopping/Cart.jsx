import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import { Link } from "react-router-dom";
import "./panier.css";
import Menu from "../../menu";
const Cart = () => {
  const {
    cartDetails,
    removeItem,
    clearCart,
    totalPrice,
    cartCount,
    incrementItem,
    decrementItem,
  } = useShoppingCart();
  const computedTotalPrice = Object.values(cartDetails)
    .reduce((acc, cartItem) => acc + (parseFloat(cartItem.price) * cartItem.quantity), 0)
    .toFixed(2);
  return (
    
    <div className="cart-container">
        <Menu/>
      <h2>Shopping Cart</h2>
      {cartCount === 0 ? (
        <div className="cart-empty">
          <p>Panier Vide</p>
          <div className="start-shopping">
            <Link to="/articlescard">
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
            {cartDetails &&
              Object.values(cartDetails).map((cartItem) => {
                return (
                  <div className="cart-item" key={cartItem.id}>
                    <div className="cart-product">
                      <img src={`${cartItem.image}`} alt={cartItem.title} />
                      <div>
                        <h3>{cartItem.title}</h3>
                        <button onClick={() => removeItem(cartItem.id)}>
                          <i
                            className="fa-solid fa-trash-can"
                            style={{ fontSize: "14px", color: "red" }}
                          ></i>
                        </button>
                      </div>
                    </div>
                    <div className="cart-product-price">
                      {" "}
                      {cartItem.price}
                      TND
                    </div>
                    <div className="cart-product-quantity">
                      <button
                        className="button-actions"
                        onClick={() => decrementItem(cartItem.id)}
                      >
                        -
                      </button>
                      <div className="count">{cartItem.quantity}</div>
                      <button
                        className="button-actions"
                        onClick={() => incrementItem(cartItem.id)}
                      >
                        +
                      </button>
                    </div>
                    <div className="cart-product-total-price">
                      {cartItem.quantity * parseFloat(cartItem.price)} TND
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="cart-summary">
            <button className="clear-btn" onClick={() => clearCart()}>
              Clear Cart
            </button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">{computedTotalPrice} TND</span>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
              <button> Check Out" </button>
              <div className="continue-shopping">
                <Link to="/articlescard">
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;
