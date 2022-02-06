import React from "react";
import { Link } from "react-router-dom";
import data from "../data";
import { Rating } from "../sub_components";

function ProductScreen(props) {
  const product = data.products.find((x) => {
    // // console.log(x);
    // console.log(x._id);
    // console.log(typeof props.match.params.id);

    // console.log(x._id === props.match.params.id);
    return x._id === props.match.params.id;
  });
  //   console.log(product);

  if (!product) {
    return <div className="product">Product not found</div>;
  }

  return (
    <div>
      <Link to="/">Back to results</Link>

      <div className="row top">
        <div className="col-2">
          <img className="large" src={product.image} alt={product.name} />
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>
              <Rating rating={product.rating} numReviews={product.numReviews} />
            </li>
            <li>price: ${product.price}</li>

            <li>
              Description:
              <span> {product.description}</span>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card-body card">
            <ul>
              <li>
                <div className="row">
                  <div>Price:</div>
                  <div className="price">${product.price}</div>
                </div>
              </li>

              <li>
                <div className="row">
                  <div>Status</div>
                  <div>
                    {product.countingStock > 0 ? (
                      <span className="success"> {`In Stock`}</span>
                    ) : (
                      <span className="error">{`Unavailable`}</span>
                    )}
                  </div>
                </div>
              </li>

              <li>
                <button className="primary block">Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductScreen;
