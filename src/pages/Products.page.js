import React from "react";
import { Helmet } from "react-helmet";

import { Navigation } from "./include/Navigation.page";
import { Footer } from "./include/Footer.page";
import { AddressModal } from "./include/AddressModal.page";

import { ProductDetails } from "./ProductDetails.page";
import { ProductsFillterPage } from "./ProductsFillter.page";

import { productsList, productFavourit } from "../_services/product.service";
import { getToken } from "../_services/user.service";

const $ = window.$;
class ProductsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productsData: [],
      loading: true,
      productsDetails: [],
    };
  }

  componentDidMount() {
    console.log("Hello");
    $(function () {
      $("#slider-range").slider({
        range: true,
        min: 0,
        max: 500,
        values: [0, 100],
        slide: function (event, ui) {
          $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        },
      });
      $("#amount").val(
        "$" +
          $("#slider-range").slider("values", 0) +
          " - $" +
          $("#slider-range").slider("values", 1)
      );
    });

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

    this.fetchAllProducts();
  }

  // USING METHOD TO GET ALL PRODCUTS
  fetchAllProducts = async () => {
    this.setState({ loading: true });
    productsList().then(
      (response) => {
        // IF GETTING RESPONSE TRUE THEN SHOULD BE LOGIN AND REDIRCT
        if (response.completed) {
          this.setState({ loading: false, productsData: response.products });
        } else {
          this.setState({ loading: false });
        }
      },
      (error) => this.setState({ error, loading: false })
    );
  };

  // USING METHOD TO ADD PRODUCT INTO FAVOURITE
  favouriteProducts = async (productId, trueORfalse, index) => {
    document.getElementById("itemNumber_" + index).style.color = "red";
    this.setState({ loading: true });
    productFavourit(productId, trueORfalse).then(
      (response) => {
        this.setState({ loading: false });
        alert(response.message);
        document.getElementById("itemNumber_" + index).style.color = "red";
      },
      (error) => this.setState({ error, loading: false })
    );
  };

  // USING METHOD TO ADD PRODUCT INTO FAVOURITE
  viewProductDetails = async (productDetail) => {
    this.setState({ productsDetails: productDetail });
  };

  render() {
    const { productsData, productsDetails } = this.state;
    return (
      <div>
        <Helmet>
          <title>Products</title>
        </Helmet>

        <header>
          <span className="main-hero-about-section"></span>
          {/* <!-- MAIN NAVBAR --> */}
          <Navigation props={this.props} />
          {/* <!-- MAIN HERO SECTION --> */}
        </header>

        <section className="products-contant-section">
          <div className="container">
            <div className="products-head-section">
              <h2>¿Qué quieres pedir hoy?</h2>
              <form action="#">
                <input
                  type="text"
                  id="searchProducts"
                  placeholder="Buscar Productos.."
                />
                <button className="search-btn" type="submit">
                  Buscar
                </button>
              </form>
            </div>
            <div className="products-list-section">
              <div className="row">
                {/* FILLTER OF PRODUCT PAGE */}
                <ProductsFillterPage />

                <div className="col-sm-8">
                  <h3>Explora la variedad de nuestras ensaladas</h3>
                  {productsData.length > 0 ? (
                    <ul>
                      {productsData.map((items, index) => {
                        return (
                          <li key={index}>
                            <div className="favorite-item-box">
                              <div className="favorite-item-img">
                                <img
                                  src={items.imagePath}
                                  // src="assets/images/favorite-product01.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="favorite-item-content">
                                {getToken() ? (
                                  <div className="favorite-icon">
                                    <a
                                      onClick={() =>
                                        this.favouriteProducts(
                                          items.productId,
                                          true,
                                          index
                                        )
                                      }
                                    >
                                      <i
                                        className="fa fa-heart-o"
                                        aria-hidden="true"
                                        id={"itemNumber_" + index}
                                      ></i>
                                    </a>
                                  </div>
                                ) : (
                                  <div></div>
                                )}

                                <h4>{items.name}</h4>
                                <span>S/- {items.price}</span>
                                <a
                                  href="#"
                                  onClick={() => this.viewProductDetails(items)}
                                  className="add-cart-btn"
                                  data-toggle="modal"
                                  data-target="#cartDetailPopup"
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <ul>
                      <li>Nothing Found!</li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer props={this.props} />

        {/* <!-- Modal --> */}
        <AddressModal />
        {/* <!-- Modal --> */}
        <ProductDetails productDetails={productsDetails} favouriteProducts = {this.favouriteProducts} />
      </div>
    );
  }
}

export { ProductsPage };
