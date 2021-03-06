import React from "react";
import Navigation from "./include/Navigation.page";
import { Footer } from "./include/Footer.page";
import { AddressModal } from "./include/AddressModal.page";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import {
  removeItem,
  addQuantity,
  subtractQuantity,
} from "../components/actions/cartActions";

const $ = window.$;
class CartPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    $(document).ready(function () {
      $(".location-map-popup").hide();
      $("#show-location-map").click(function () {
        $(".location-map-popup").show();
        $(".location-popup").hide();
      });

      $(".indicaciones-box").hide();
      $(".show-indicaciones").click(function () {
        $(".indicaciones-box").show();
      });
    });
  }

  _handelToRemoveCartProduct(productId) {
    if (window.confirm("Are you sure to remove product from cart?")) {
      this.props.removeItem(productId);
    }
  }

  render() {
    let totalPriceForCart = 0;
    if (Number(this.props.totalprice) > 0) {
      totalPriceForCart = Number(this.props.totalprice);
    }
    return (
      <div>
        <Helmet>
          <title>Cart</title>
        </Helmet>

        <header>
          <span className="main-hero-about-section"></span>
          {/* <!-- MAIN NAVBAR --> */}
          <Navigation props={this.props} />
          {/* <!-- MAIN HERO SECTION --> */}
        </header>

        <section className="products-contant-section">
          <div className="container">
            <div className="personal-info-section">
              <h2>
                Mi pedido
              </h2>
              {this.props.items.length > 0 ? (
                <form id="personal-form" method="post" action="#" role="form">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="cart-search-head">
                        <input
                          type="text"
                          id="searchProducts"
                          placeholder="Ingrese una direccion de envio"
                        />
                        <span>
                          Nota: Estimado Usuario, su pedido sera enviado a: AV.
                          Aviacion #323
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-12 text-center">
                      <div className="cart-total-amount">
                        <span className="total-txt">Total a pagar</span>
                        <span className="total-amount">
                          S/{totalPriceForCart}
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="form_name">Ingrese</label>
                        <input
                          id="form_name"
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Nombres usuario"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="form_sname">Apellidos</label>
                        <input
                          id="form_sname"
                          type="text"
                          name="surname"
                          className="form-control"
                          placeholder="Apellidos Usuario"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="form_email">Correo Electronico</label>
                        <input
                          id="form_email"
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Usuario@correo.com"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="form_phone">Numero de Telefono</label>
                        <input
                          id="form_phone"
                          type="tel"
                          name="phone"
                          className="form-control"
                          placeholder="959645725"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 cart-checkbox">
                      <div className="form-group">
                        <label className="lbl-check">Forma de pago</label>
                        <div className="custom-control custom-checkbox mb-3">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="efectivo"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="efectivo"
                          >
                            En efectivo
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox mb-3">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="tarjeta"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="tarjeta"
                          >
                            Tarjeta de Debito/Credito
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 cart-checkbox">
                      <div className="form-group">
                        <label className="lbl-check">
                          Tipo de comprobante de pago
                        </label>
                        <div className="custom-control custom-checkbox mb-3">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="boleta"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="boleta"
                          >
                            Boleta
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox mb-3">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="factura"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="factura"
                          >
                            Factura
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="clearfix"></div>

                  <div className="row">
                    <div className="col-md-8">
                      <ul className="product-item-list-section">
                        {this.props.items.map((items, index) => {
                          let quantityOfProduct = "0";

                          if (this.props.items.length > 0) {
                            let existed_item = this.props.items.find(
                              (item) => item.productId === items.productId
                            );
                            if (existed_item) {
                              quantityOfProduct = existed_item.quantity;
                            }
                          }
                          return (
                            <li key={index}>
                              <div className="product-item-list">
                                <div className="product-item-img">
                                  <img src={items.imagePath} alt={items.name} />
                                </div>
                                <div className="product-item-title">
                                  <h4>{items.name}</h4>
                                  <span>{items.categoryName}</span>
                                </div>
                                <div className="product-item-switch">
                                  <div className="number">
                                    <span
                                      className="minus"
                                      onClick={() => {
                                        this.props.subtractQuantity(items);
                                      }}
                                    >
                                      -
                                    </span>
                                    <input
                                      type="text"
                                      value={quantityOfProduct}
                                    />
                                    <span
                                      className="plus"
                                      onClick={() => {
                                        this.props.addQuantity(items);
                                      }}
                                    >
                                      +
                                    </span>
                                  </div>
                                </div>
                                <div className="product-item-price">
                                  {items.price}
                                </div>
                                <div className="product-item-action">
                                  {/* <a href="#">
                                  <img
                                    src="assets/images/edit-icon.png"
                                    alt=""
                                  />
                                </a> */}
                                  <a
                                    onClick={() =>
                                      this._handelToRemoveCartProduct(
                                        items.productId
                                      )
                                    }
                                  >
                                    <img
                                      src="assets/images/cancel-icon.png"
                                      alt=""
                                    />
                                  </a>
                                </div>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <div className="cart-details-section">
                        <div className="item-coupon-box">
                          <form action="#">
                            <input
                              type="text"
                              id="couponCode"
                              placeholder="Código promocional"
                            />
                            <button className="coupon-btn" type="submit">
                              Aplicar
                            </button>
                          </form>
                        </div>
                        <div className="item-amount-box">
                          <p>
                            Total parcial:{" "}
                            <span className="price">S/{totalPriceForCart}</span>
                          </p>
                          {/* <p>
                            Envoltura especial:{" "}
                            <span className="price">S/.2.00</span>
                          </p> */}
                          <p>
                            Envio: <span className="price">S/0.00</span>
                          </p>
                          {/* <p>
                            Cupón:{" "}
                            <span className="price">
                              <a href="#">
                                <img
                                  src="assets/images/cancel-code.png"
                                  alt=""
                                />
                              </a>
                              GRATIS
                            </span>
                          </p> */}
                          <p>
                            Total{" "}
                            <span className="price">
                              <b>S/{totalPriceForCart}</b>
                            </span>
                          </p>
                        </div>
                        <div className="item-btn-box">
                          <input
                            type="submit"
                            value="Lr a la tienda"
                            className="cart-blue-btn"
                          />
                          <input
                            type="submit"
                            value="Pagar"
                            className="cart-yellow-btn"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              ) : (
                <div className="row">
                  <div className="col-sm-12">
                    <div className="cart-search-head">
                      <span>You don't have products in Cart.</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <Footer props={this.props} />

        {/* <!-- Modal --> */}
        <AddressModal />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
    totalprice: state.total,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => {
      dispatch(removeItem(id));
    },
    addQuantity: (id) => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: (id) => {
      dispatch(subtractQuantity(id));
    },
  };
};
// export { ProductsPage };
export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
