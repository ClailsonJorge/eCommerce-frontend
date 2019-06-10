import React from "react";
import { Link } from "react-router-dom";
import styles from "./product.module.scss";

export default function({ product }) {
  return (
    <div className={`column is-3 ${styles.is_6_tablet}`}>
      <article className={styles.product_card}>
        <figure className="product_card-figure image is-square">
          <Link to={`/products/${product.product_id}`}>
            <img
              className="product_card-image"
              src={`https://backendapi.turing.com/images/products/${
                product.thumbnail
              }`}
              alt={`${product.name} thumbnail`}
              title={`${product.name} thumbnail`}
            />
          </Link>
        </figure>
        <div className="product_card-body mt-1">
          <h4 className="product_card-title">{product.name}</h4>
          <div className={`${styles.product_card_text} is-flex mt-1`}>
            <div className={`${styles.discounted_price}`}>
              <span className="">{`$${product.discounted_price}`}</span>
            </div>
            <div className="price">
              <span>
                <del>{`$${product.price}`}</del>
              </span>
            </div>
          </div>
          <div className="product_cta">
            <button className="button is-rounded mt-2 is-uppercase">
              Add to cart
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
