import React from "react";
import { Helmet } from "react-helmet";

import Navigation from "../Navigation.page";
import { Footer } from "../Footer.page";
import { AddressModal } from "../AddressModal.page";

const $ = window.$;
class SupportHelpPage extends React.Component {
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
    return (
      <div>
        <Helmet>
          <title>Support & Help</title>
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
              <h2>Mi Support & Help</h2>
              <div className="row">
                <div className="col-sm-12">
                  <div className="cart-search-head">
                    <span>Coming soon.</span>
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
export default SupportHelpPage;
