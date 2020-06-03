import React from "react";

export const ProductDetails = (props) => {
  const productDetail = props.productDetails;
  console.log("Details of Product --- ", props.productDetails);

  return (
    <div id="cartDetailPopup" className="modal fade" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <div className="cart-detail-box">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
              <div className="cart-detail-left">
                <div className="wishlist-icon">
                  <a
                    onClick={() =>
                      props.favouriteProducts(
                        productDetail.productId,
                        true,
                        111111
                      )
                    }
                  >
                    <i
                      className="fa fa-heart-o"
                      aria-hidden="true"
                      id={"itemNumber_111111"}
                    ></i>
                  </a>
                </div>
                <img src={productDetail.imagePath} alt="" />
              </div>
              <div className="cart-detail-right">
                <h4 className="modal-title">{productDetail.name}</h4>
                <div className="rating">
                  <span className="review-no">4.3</span>
                  <div className="stars">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                  </div>
                  <span className="review-user">
                    Valoracion de 1000 usuarios
                  </span>
                </div>
                <div className="price-stock-qty">
                  <h3 className="cart-price">S/. {productDetail.price}</h3>
                  <span className="cart-stock">Stok en cocina</span>
                  <div className="product-item-switch">
                    <div className="number">
                      <span className="minus">-</span>
                      <input type="text" value="1" />
                      <span className="plus">+</span>
                    </div>
                  </div>
                  <div className="concept-content">
                    Concepto: <span>Ensalada simple, Mayonesa, Incakola</span>
                    <a href="#" className="show-indicaciones">
                      <i className="fa fa-plus" aria-hidden="true"></i> Agregar
                      Concepto
                    </a>
                    <textarea
                      className="form-control indicaciones-box"
                      rows="4"
                      data-min-rows="4"
                      placeholder="Indicaciones"
                    ></textarea>
                  </div>
                </div>
                <div className="include-division-box">
                  <h6>Seleccione para incluir</h6>
                  <span>{productDetail.description}</span>
                </div>
                <div className="cart-include-box">
                  <h6>Cremas:</h6>
                  <ul>
                    <li>
                      <a href="#">Mayonesa</a>
                    </li>
                    <li>
                      <a href="#">Aji</a>
                    </li>
                  </ul>
                </div>
                <div className="cart-include-box">
                  <h6>Bebidas:</h6>
                  <ul>
                    <li>
                      <a href="#">Pepsi</a>
                    </li>
                    <li>
                      <a href="#" className="active">
                        Coca Cola
                      </a>
                    </li>
                    <li>
                      <a href="#">Inca kola</a>
                    </li>
                  </ul>
                </div>
                <div className="cart-btn-area">
                  <button className="search-btn" type="submit">
                    Aceptar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
