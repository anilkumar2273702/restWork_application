import React from "react";
import Navigation from "./include/Navigation.page";
import { Footer } from "./include/Footer.page";
import { AddressModal } from "./include/AddressModal.page";
import { Helmet } from "react-helmet";

const $ = window.$;
class TrackOrderPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    console.log("Hello");
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

  render() {
    return (
      <div>
        <Helmet>
          <title>Track Order</title>
        </Helmet>

        <header>
          <span className="favorite-hero-section-bg"></span>
          {/* <!-- MAIN NAVBAR --> */}
          <Navigation props={this.props} />
          {/* <!-- MAIN HERO SECTION --> */}
          <div className="main-hero-section">
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  <div className="main-hero__text trackorder-head-section">
                    <h1 className="main-hero-title">Traceo de tu pedido</h1>
                    <select id="trackOrder">
                      <option>Selecciona el codigo de tu pedido</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="order-content-section">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 order-progress-bar">
                <ul>
                  <li>
                    1{" "}
                    <div className="orders-details">
                      <h3>Usuario</h3>{" "}
                      <span>
                        Realizaste tu pedido, por un valor de S/.39.50
                      </span>{" "}
                      <em>6:00 pm</em>
                    </div>
                  </li>
                  <li>
                    2{" "}
                    <div className="orders-details">
                      <h3>Restwork</h3>{" "}
                      <span>Proceso tu pedido, par un valor de S/. 39.50</span>{" "}
                      <em>6:05 pm</em>
                    </div>
                  </li>
                  <li>
                    3{" "}
                    <div className="orders-details">
                      <h3>Restwork</h3> <span>tu pedido inicio recorrido</span>{" "}
                      <em>6:10 pm</em>
                    </div>
                  </li>
                  <li className="active">
                    4{" "}
                    <div className="orders-details">
                      <h3>Restwork</h3> <span>Tu pedido está cerca</span>{" "}
                      <em>6:30 pm</em>
                    </div>
                  </li>
                  <li>
                    5{" "}
                    <div className="orders-details">
                      <h3>Restwork</h3>{" "}
                      <span>Tu pedido arrido a lugar de destino</span>{" "}
                      <em>6:35 pm</em>
                    </div>
                  </li>
                  <li>
                    6{" "}
                    <div className="orders-details">
                      <h3>Restwork</h3> <span>Pedidi entregado</span>{" "}
                      <em>6:35 pm</em>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4 order-track-img">
                <img
                  src="assets/images/about-img.jpg"
                  className="about-img"
                  alt=""
                />
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

export { TrackOrderPage };
