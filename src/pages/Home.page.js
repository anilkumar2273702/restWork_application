import React from "react";
import Reflux from "reflux";
import { productCategoryList } from "../_services/product.service";
import Navigation from "./include/Navigation.page";
import { AddressModal } from "./include/AddressModal.page";
import { Footer } from "./include/Footer.page";
import { Helmet } from "react-helmet";

const $ = window.$;

class HomePage extends Reflux.Component {
  constructor(props) {
    super(props);

    this.state = {
      productCategoryLists: [],
      loading: true,
    };
  }

  componentDidMount() {
    $(document).ready(function () {
      let owl = $(".owl-carousel");
      owl.owlCarousel({
        items: 3,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            nav: true,
          },
          700: {
            items: 3,
            nav: true,
            loop: false,
          },
        },
      });

      $(".location-map-popup").hide();
      $("#show-location-map").click(function () {
        $(".location-map-popup").show();
        $(".location-popup").hide();
      });
    });

    // USING METHOD TO GET ALL CATEGORIES
    this.fetchAllCategoryList();
  }

  // USING METHOD TO GET ALL CATEGORIES
  fetchAllCategoryList = async () => {
    productCategoryList().then(
      (response) => {
        // IF GETTING RESPONSE TRUE THEN SHOULD BE LOGIN AND REDIRCT
        if (response.completed) {
          this.setState({ productCategoryLists: response.categories });
        }
        this.setState({ loading: false });
      },
      (error) => this.setState({ error, loading: false })
    );
  };

  render() {
    const { productCategoryLists } = this.state;
    let category1 = [];
    let category2 = [];
    let category3 = [];
    if (productCategoryLists.length > 0) {
      category1 = productCategoryLists[0];
      category2 = productCategoryLists[1];
      category3 = productCategoryLists[2];
    }
    // console.log("Categories ---- ", category1)
    return (
      <div>
        <Helmet>
          <title>RestWork</title>
        </Helmet>

        <header className="App-header">
          <span className="main-hero-section-shape"></span>
          {/*  MAIN NAVBAR  */}
          <Navigation props={this.props} />
          {/* <!-- MAIN HERO SECTION --> */}
          <div className="main-hero-section">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="main-hero__text">
                        <h1 className="main-hero-title">
                          Elige entre lo más <strong>destacado</strong>
                        </h1>
                        <a className="scrollBtn">
                          <img src="assets/images/scroll-icon.png" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="hero-portrait-img">
                        {category1 != "" ? (
                          <a
                            onClick={() => this.props.history.push("/products")}
                          >
                            <img
                              src={category1 != "" ? category1.imagePath : "assets/images/hero-cat-01.jpg"}
                              alt={category1 != "" ? category1.name : ""}
                            />
                            <h3>{category1 != "" ? category1.name : ""}</h3>
                          </a>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className="col-sm-12 home-head-content web-box">
                      <h2>
                        Ofrecemos la mejor comida reconfortante
                        <br />a la altura de tu paladar y lo calsificamos paa ti
                      </h2>
                      <a
                        onClick={() => {
                          this.props.history.push("/products");
                        }}
                        className="search-cat-btn"
                      >
                        Buscar por categoría
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="hero-landscape-img">
                        {category2 != "" ? (
                          <a
                            onClick={() => this.props.history.push("/products")}
                          >
                            <img
                              src={category2 != "" ? category2.imagePath : "assets/images/hero-cat-02.jpg"}
                              alt={category2 != "" ? category2.name : ""}
                            />
                            <h3>{category2 != "" ? category2.name : ""}</h3>
                          </a>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="hero-portrait-img">
                        {category3 != "" ? (
                          <a
                            onClick={() => this.props.history.push("/products")}
                          >
                            <img
                              src={category3 != "" ? category3.imagePath : "assets/images/hero-cat-03.jpg"}
                              alt={category3 != "" ? category3.name : ""}
                            />
                            <h3>{category3 != "" ? category3.name : ""}</h3>
                          </a>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className="col-sm-12 home-head-content mobile-box">
                      <h2>
                        Ofrecemos la mejor comida reconfortante
                        <br />a la altura de tu paladar y lo calsificamos paa ti
                      </h2>
                      <a className="search-cat-btn">Buscar por categoría</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="most-request-section">
          <div className="container">
            <h2>Lo más solicitado!</h2>
            <div className="row">
              <div className="col-sm-12">
                <div className="owl-carousel owl-theme">
                  <div className="item">
                    <div className="request-item-box">
                      <a onClick={() => this.props.history.push("/products")}>
                        <div className="request-item-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/brownies-img.jpg"
                            }
                            alt=""
                          />
                        </div>
                        <div className="request-item-content">
                          <h4>Brownies</h4>
                          <span>Visita la categoria de dulces</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="request-item-box">
                      <a onClick={() => this.props.history.push("/products")}>
                        <div className="request-item-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/pancakes-img.jpg"
                            }
                            alt=""
                          />
                        </div>
                        <div className="request-item-content">
                          <h4>Panqueques de ricotta</h4>
                          <span>Visita la categoria de dulces</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="request-item-box">
                      <a onClick={() => this.props.history.push("/products")}>
                        <div className="request-item-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/fiber-img.jpg"
                            }
                            alt=""
                          />
                        </div>
                        <div className="request-item-content">
                          <h4>Comida de fibra</h4>
                          <span>Visita la categoria de dulces</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="request-item-box">
                      <a onClick={() => this.props.history.push("/products")}>
                        <div className="request-item-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/mexican-img.jpg"
                            }
                            alt=""
                          />
                        </div>
                        <div className="request-item-content">
                          <h4>Comida de langosta</h4>
                          <span>Visita la categoria de dulces</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 text-center">
                <a
                  onClick={() => {
                    this.props.history.push("/products");
                  }}
                  className="search-cat-btn"
                >
                  Buscar por categoría
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="promotion-box-section">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="promotion-box-bg">
                  <h3>Quieres conseguir promociones?</h3>
                  <a
                    onClick={() => {
                      this.props.history.push("/register");
                    }}
                    className="yellow-cat-btn"
                  >
                    Registrate
                  </a>
                </div>
              </div>
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

export default HomePage;
