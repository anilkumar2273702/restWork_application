import React from "react";
import Navigation from "./include/Navigation.page";
import { Footer } from "./include/Footer.page";
import { AddressModal } from "./include/AddressModal.page";
import { getUserDetails } from "../_services/user.service";
import { Helmet } from "react-helmet";

const $ = window.$;
class UserPersonalInfoPage extends React.Component {
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

  render() {
    const userDetails = getUserDetails();
    return (
      <div>
        <Helmet>
          <title>Personal Info</title>
        </Helmet>

        <header>
          <span className="favorite-hero-section-bg"></span>
          {/* <!-- MAIN NAVBAR --> */}
          <Navigation props={this.props} />
          {/* <!-- MAIN HERO SECTION --> */}
        </header>

        <section className="products-contant-section">
          <div className="container">
            <div className="personal-info-section">
              <h2>Mis Datos Personales</h2>
              <form id="personal-form" method="post" action="#" role="form">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label for="form_name">Nombres</label>
                      <input
                        id="form_name"
                        type="text"
                        name="fname"
                        className="form-control"
                        value={userDetails.username}
                        placeholder="Nombre Usuario"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label for="form_name">First Nombres</label>
                      <input
                        id="form_name"
                        type="text"
                        name="fname"
                        className="form-control"
                        placeholder="Nombre Usuario"
                        value={userDetails.firstName}
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label for="form_sname">Apellidos</label>
                      <input
                        id="form_sname"
                        type="text"
                        name="surname"
                        className="form-control"
                        value={userDetails.lastName}
                        placeholder="Apellidos Usuario"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label for="form_email">Correo Electronico</label>
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        className="form-control"
                        value={userDetails.email}
                        placeholder="Usuario@correo.com"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label for="form_phone">Numero de Telefono</label>
                      <input
                        id="form_phone"
                        type="tel"
                        name="phone"
                        value={userDetails.phoneNumber}
                        className="form-control"
                        placeholder="959645725"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label for="form_pass">Contrasena</label>
                      <input
                        id="form_pass"
                        type="text"
                        name="password"
                        className="form-control"
                        placeholder="************"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label for="form_address">Dirección</label>
                      <input
                        id="form_address"
                        type="text"
                        name="address"
                        className="form-control"
                        value={userDetails.address}
                        placeholder="Dirección usuario"
                        required="required"
                      />
                    </div>
                  </div>
                </div>
                <div className="clearfix"></div>

                <div className="row">
                  <div className="col-md-12 text-center">
                    <button className="yellow-full-btn width400" type="button" disabled>
                      Aceptar
                    </button>
                  </div>
                </div>
              </form>
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

export { UserPersonalInfoPage };
