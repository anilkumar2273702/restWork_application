import React from "react";
import Navigation from "./include/Navigation.page";
import { Footer } from "./include/Footer.page";
import { AddressModal } from "./include/AddressModal.page";
import { Helmet } from "react-helmet";

const $ = window.$;
class AboutUsPage extends React.Component {
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
    });
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>About Us</title>
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
                        <a>
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="fa fa-dribbble" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 text-center">
                  <a className="scrollBtn">
                    <img src="assets/images/scroll-icon.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="about-content-section">
          <div className="container">
            <div className="row">
              <div className="col-sm-5">
                <img
                  src="assets/images/about-img.jpg"
                  className="about-img"
                  alt=""
                />
              </div>
              <div className="col-sm-7">
                <h2>Acerca De</h2>
                <ul>
                  <li>
                    <h4>Menú del día</h4>
                    <p>
                      Elige el plato que mas te agrade y programalo para
                      entrega!
                    </p>
                  </li>
                  <li>
                    <h4>Platos a la carta</h4>
                    <p>
                      Elige uno de nuestros platos, ingresa el tiempo de entrega
                      y disfruta de una deliciosa y exclusiva comida sin salir
                      de tu casa!
                    </p>
                  </li>
                  <li>
                    <h4>Bebidas y comida rápida</h4>
                    <p>Platos rápidos al nivel de tu paladar</p>
                  </li>
                </ul>
                <a
                  onClick={() => this.props.history.push("/products")}
                  className="search-cat-btn"
                >
                  Ordenar comida
                </a>
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

export { AboutUsPage };
