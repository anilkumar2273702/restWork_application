import React from "react";
import { Helmet } from "react-helmet";

import Navigation from "./include/Navigation.page";
import { Footer } from "./include/Footer.page";
import { AddressModal } from "./include/AddressModal.page";

import ProductDetails from "./ProductDetails.page";
import { ProductsFillterPage } from "./ProductsFillter.page";

import { productsList, productFavourit } from "../_services/product.service";
import { getToken } from "../_services/user.service";

const $ = window.$;
class ProductsPage extends React.Component {
  constructor(props) {
    super(props);

    this.offset = 1;

    this.state = {
      productsData: [],
      loading: true,
      productsDetails: [],
      hideLoadMoreButton: true,
      selectedCategories: [],
      searchedProductName: "",
      noDataFound: false,
      selectedFilter: {
        pageNumber: this.offset,
        rowsPage: 20,
        categories: "",
        subcategories: "",
        productName: "",
        priceMin: 0,
        priceMax: 0,
        isGroup: 0,
      },
    };
  }

  componentDidMount() {
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
    let filteredStates = this.state.selectedFilter;
    productsList(filteredStates).then(
      (response) => {
        if (response.products == "") {
          this.setState({ hideLoadMoreButton: false });
        }
        // IF GETTING RESPONSE TRUE THEN SHOULD BE LOGIN AND REDIRCT
        if (response.completed) {
          if (response.products.length < 20) {
            this.setState({ hideLoadMoreButton: false });
          } else {
            this.setState({ hideLoadMoreButton: true });
          }

          if(!(this.state.productsData).length > 0 && !(response.products).length > 0){
            this.setState({ noDataFound: true });
          }else{
            this.setState({ noDataFound: false })
          }

          this.setState({
            loading: false,
            productsData: [...this.state.productsData, ...response.products],
          });
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

  // LOAD MORE PRODUCTS
  fetchMoreProducts = async () => {
    this.setState({ loading: true });
    this.state.selectedFilter.pageNumber =
      this.state.selectedFilter.pageNumber + 1;
    let filteredStates = this.state.selectedFilter;
    productsList(filteredStates).then(
      (response) => {
        if (response.products == "") {
          this.setState({ hideLoadMoreButton: false });
        }

        // IF GETTING RESPONSE TRUE THEN SHOULD BE LOGIN AND REDIRCT
        if (response.completed) {
          if (response.products.length < 20) {
            this.setState({ hideLoadMoreButton: false });
          } else {
            this.setState({ hideLoadMoreButton: true });
          }

          this.setState({
            loading: false,
            productsData: [...this.state.productsData, ...response.products],
          });
        } else {
          this.setState({ loading: false });
        }
      },
      (error) => this.setState({ error, loading: false })
    );
  };

  // LOAD FILTERED DATA IN PRODUCTS LIST
  fetchFilteredProducts = async (filteredStates) => {
    this.setState({
      loading: true,
      hideLoadMoreButton: false,
      productsData: [],
    });

    productsList(filteredStates).then(
      (response) => {
        if (response.products == "") {
          this.setState({ hideLoadMoreButton: false });
        }

        // IF GETTING RESPONSE TRUE THEN SHOULD BE LOGIN AND REDIRCT
        if (response.completed) {
          if (response.products.length < 20) {
            this.setState({ hideLoadMoreButton: false });
          } else {
            this.setState({ hideLoadMoreButton: true });
          }

          if(!(this.state.productsData).length > 0 && !(response.products).length > 0){
            this.setState({ noDataFound: true });
          }else{
            this.setState({ noDataFound: false })
          }

          this.setState({
            loading: false,
            productsData: [...this.state.productsData, ...response.products],
          });
        } else {
          this.setState({ loading: false });
        }
      },
      (error) => this.setState({ error, loading: false })
    );
  };

  // USING METHOD TO CALL FILTER
  handleOnChange = async (e) => {
    const { name, value } = e.target;

    if (name === "selected_categories") {
      let existed_item = this.state.selectedCategories.find(
        (item) => item === value
      );
      if (!existed_item) {
        this.state.selectedCategories.push(value);
      } else {
        let new_items = this.state.selectedCategories.filter(
          (item) => item !== value
        );
        this.state.selectedCategories = new_items;
      }
      this.state.selectedFilter.categories = this.state.selectedCategories.join(
        ","
      );
    }
    if (name === "searched_key") {
      this.setState({ searchedProductName: value });
      this.state.selectedFilter.productName = value;
    }

    // USING METHDO TO FILTER DATAS
    if (name !== "searched_key") {
      this.state.selectedFilter.pageNumber = 1;
      this.fetchFilteredProducts(this.state.selectedFilter);
    }
    // console.log("SelectedFilter - ", this.state.selectedFilter);
  };

  handleSubmitToSearch = async (e) => {
    e.preventDefault();
    this.state.selectedFilter.pageNumber = 1;
    this.fetchFilteredProducts(this.state.selectedFilter);
  };

  render() {
    const {
      productsData,
      productsDetails,
      hideLoadMoreButton,
      loading,
      noDataFound,
    } = this.state;
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
              <form name="loginForm" onSubmit={this.handleSubmitToSearch}>
                <input
                  type="text"
                  id="searchProducts"
                  placeholder="Buscar Productos.."
                  name="searched_key"
                  onChange={this.handleOnChange}
                />
                <button className="search-btn" type="submit">
                  Buscar
                </button>
              </form>
            </div>
            <div className="products-list-section">
              <div className="row">
                {/* FILLTER OF PRODUCT PAGE */}
                <ProductsFillterPage
                  props={this.props}
                  handleOnChange={this.handleOnChange}
                />

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
                    <ul></ul>
                  )}
                  <div style={{ clear: "both" }}></div>
                  {noDataFound ? (
                    <div className="col-sm-12">
                      <a
                        style={{
                          color: "#000",
                          textAlign: "center",
                          width: "100%",
                          display: "inline-block",
                          fontSize: "24px",
                          fontWeight: "bold",
                        }}
                      >
                        No products found!
                      </a>
                    </div>
                  ) : (
                    ""
                  )}
                  <div style={{ clear: "both" }}></div>
                  {loading ? (
                    <div className="col-sm-12">
                      <a
                        class="change-location"
                        style={{ color: "#fff", textAlign: "center" }}
                      >
                        Loading....
                      </a>
                    </div>
                  ) : (
                    <div className="col-sm-12">
                      {hideLoadMoreButton ? (
                        <a
                          class="change-location"
                          style={{ color: "#fff", textAlign: "center" }}
                          onClick={() => this.fetchMoreProducts()}
                        >
                          Load More
                        </a>
                      ) : (
                        <div></div>
                      )}
                    </div>
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
        <ProductDetails
          goProps={this.props}
          productDetails={productsDetails}
          favouriteProducts={this.favouriteProducts}
        />
      </div>
    );
  }
}

export default ProductsPage;
