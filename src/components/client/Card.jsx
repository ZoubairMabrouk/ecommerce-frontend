import React from "react";
import "./stylecard.css";
import { useShoppingCart } from "use-shopping-cart";

const Card = ({ imageart, reference, designation, prix, article }) => {
  const { addItem } = useShoppingCart();
  const AddToCart = (art) => {
    const target = {
      id: art.id,
      title: art.designation,
      image: art.imageart,
      price: art.prix,
      qtestock: art.qtestock,
      quantity: 1,
    };
    addItem(target);
    console.log("Item added to cart:", target);
  };
  return (
    <div>
      <div className="card">
        {article.imageart && (
          <img src={article.imageart} alt={article.reference} />
        )}
        <div className="card-content">
          <h1 className="card-title">{article.reference}</h1>
          <p className="card-description">
            {article.designation.substr(0, 20)}
          </p>
          <p className="card-quantité">Stock :{article.qtestock}</p>
          <h1 className="card-title">Prix : {article.prix} TND</h1>
          <button
            disabled={article.qtestock < 1}
            onClick={() => AddToCart(article)}
            className="card-button"
          >
            <i className="fa-solid fa-basketshopping"></i>Add to card
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
