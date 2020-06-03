import React from "react";
import Reflux from "reflux";
// import Auth from "../Auth";
import { Navigation } from "./include/Navigation.page";
import { AddressModal } from "./include/AddressModal.page";
import { Footer } from "./include/Footer.page";
import { Helmet } from "react-helmet";

const $ = window.$;

class HomePage extends Reflux.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    console.log("Hello");
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
                        <a href="#" className="scrollBtn">
                          <img src="assets/images/scroll-icon.png" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="hero-portrait-img">
                        <a href="#">
                          <img src="assets/images/hero-cat-01.jpg" alt="" />
                          <h3>Postres</h3>
                        </a>
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
                  }} className="search-cat-btn">
                        Buscar por categoría
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="hero-landscape-img">
                        <a href="#">
                          <img src="assets/images/hero-cat-02.jpg" alt="" />
                          <h3>Plato Fuerte</h3>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="hero-portrait-img">
                        <a href="#">
                          <img src="assets/images/hero-cat-03.jpg" alt="" />
                          <h3>Piqueos</h3>
                        </a>
                      </div>
                    </div>
                    <div className="col-sm-12 home-head-content mobile-box">
                      <h2>
                        Ofrecemos la mejor comida reconfortante
                        <br />a la altura de tu paladar y lo calsificamos paa ti
                      </h2>
                      <a href="#" className="search-cat-btn">
                        Buscar por categoría
                      </a>
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
                      <a href="#">
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
                      <a href="#">
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
                      <a href="#">
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
                      <a href="#">
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
