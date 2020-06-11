import React from "react";
import Navigation from "./include/Navigation.page";
import { AddressModal } from "./include/AddressModal.page";
import { Footer } from "./include/Footer.page";
import { Helmet } from "react-helmet";

const $ = window.$;
class FavoritePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Favorite</title>
        </Helmet>

        <header>
          <span className="favorite-hero-section-bg"></span>
          {/* <!-- MAIN NAVBAR --> */}
          <Navigation props={this.props} />
          {/* <!-- MAIN HERO SECTION --> */}
          <div className="main-hero-section">
            <div className="container">
              <div className="row">
                <div className="col-md-10">
                  <div className="main-hero__text favorite-head-section">
                    <h1 className="main-hero-title">
                      No tienes tiempo
                      <br />
                      para preparar <strong>comida</strong>?
                    </h1>
                    <p className="fav-desc">
                      Elige uno de nuestros planes, ingresa el tiempo de entrega
                      y disfruta de una deliciosa comida sin salir de tu casa!
                    </p>
                    <a onClick={() => this.props.history.push("/products")} className="search-cat-btn">
                      Buscar por categoría
                    </a>
                    <ul className="fav-social-icon">
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-dribbble" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 text-center">
                  <a href="#" className="scrollBtn">
                    <img src="assets/images/scroll-icon.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="most-request-section">
          <div className="container">
            <h2>Mis Favoritos</h2>
            <div className="row">
              <div className="col-sm-12 favorite-slider-box">
                <div className="owl-carousel owl-theme">
                  <div className="item">
                    <div className="favorite-item-box">
                      <a onClick={() => this.props.history.push("/products")}>
                        <div className="favorite-item-img">
                          <img
                            src="assets/images/favorite-product01.jpg"
                            alt=""
                          />
                        </div>
                        <div className="favorite-item-content">
                          <div className="favorite-icon">
                            <img src="assets/images/favorite-icon.png" alt="" />
                          </div>
                          <h4>Tabule con menta y Tomatitos</h4>
                          <span>S/- 10.50</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="favorite-item-box">
                      <a onClick={() => this.props.history.push("/products")}>
                        <div className="favorite-item-img">
                          <img
                            src="assets/images/favorite-product01.jpg"
                            alt=""
                          />
                        </div>
                        <div className="favorite-item-content">
                          <div className="favorite-icon">
                            <img src="assets/images/favorite-icon.png" alt="" />
                          </div>
                          <h4>Tabule con menta y Tomatitos</h4>
                          <span>S/- 10.50</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="favorite-item-box">
                      <a onClick={() => this.props.history.push("/products")}>
                        <div className="favorite-item-img">
                          <img
                            src="assets/images/favorite-product01.jpg"
                            alt=""
                          />
                        </div>
                        <div className="favorite-item-content">
                          <div className="favorite-icon">
                            <img src="assets/images/favorite-icon.png" alt="" />
                          </div>
                          <h4>Tabule con menta y Tomatitos</h4>
                          <span>S/- 10.50</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="favorite-item-box">
                      <a onClick={() => this.props.history.push("/products")}>
                        <div className="favorite-item-img">
                          <img
                            src="assets/images/favorite-product01.jpg"
                            alt=""
                          />
                        </div>
                        <div className="favorite-item-content">
                          <div className="favorite-icon">
                            <img src="assets/images/favorite-icon.png" alt="" />
                          </div>
                          <h4>Tabule con menta y Tomatitos</h4>
                          <span>S/- 10.50</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="favorite-item-box">
                      <a onClick={() => this.props.history.push("/products")}>
                        <div className="favorite-item-img">
                          <img
                            src="assets/images/favorite-product01.jpg"
                            alt=""
                          />
                        </div>
                        <div className="favorite-item-content">
                          <div className="favorite-icon">
                            <img src="assets/images/favorite-icon.png" alt="" />
                          </div>
                          <h4>Tabule con menta y Tomatitos</h4>
                          <span>S/- 10.50</span>
                        </div>
                      </a>
                    </div>
                  </div>
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

export { FavoritePage };
