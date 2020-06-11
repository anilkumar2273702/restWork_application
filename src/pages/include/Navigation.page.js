import React from "react";
import { getUserDetails, logout, getToken } from "../../_services/user.service";
import { connect } from "react-redux";

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productsData: [],
      loading: true,
    };
  }
  render() {
    let userDetails = getUserDetails();

    return (
      <nav className="main-nav" id="main-nav">
        <div className="container">
          <div className="row">
            <div className="col-sm-2">
              <a
                onClick={() => this.props.props.history.push("/")}
                className="main-nav-logo"
              >
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/white-logo.png"}
                  className="web-logo"
                  alt="RestWork"
                />
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/dark-logo.png"}
                  className="mobile-logo"
                  alt="RestWork"
                />
              </a>
            </div>
            <div className="col-sm-10">
              <ul className="main-nav-list">
                <li>
                  <a
                    href="#"
                    className="change-location"
                    data-toggle="modal"
                    data-target="#locationPopup"
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/pin-white-icon.png"
                      }
                      alt=""
                    />{" "}
                    Ingrese una dirección
                  </a>
                </li>
                {getToken() ? (
                  <li></li>
                ) : (
                  <li>
                    <a
                      href="#"
                      onClick={() => {
                        // Auth.login(() => {
                        this.props.props.history.push("/login");
                        // });
                      }}
                      className="login-btn"
                    >
                      Iniciar sesión
                    </a>
                  </li>
                )}

                <li className="cart-box">
                  <a
                    onClick={() => this.props.props.history.push("/cart")}
                    className="cart-option"
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/images/cart-icon.png"
                      }
                      alt=""
                    />
                    <div className="count-item">{this.props.items.length}</div>
                  </a>
                </li>

                {getToken() ? (
                  <li className="nav-item dropdown user-option-icon">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <label>
                        <em>Hola,</em> {userDetails.firstName}
                      </label>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/avtar-img.jpg"
                        }
                        alt=""
                      />
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <a
                        className="dropdown-item"
                        onClick={() =>
                          this.props.props.history.push("/personal-info")
                        }
                      >
                        Mi cuenta
                      </a>
                      <a className="dropdown-item">Mis ordenes</a>
                      <a
                        className="dropdown-item"
                        onClick={() =>
                          this.props.props.history.push("/favourites")
                        }
                      >
                        Mis Favoritos
                      </a>
                      <div className="dropdown-divider"></div>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => logout()}
                      >
                        Cerrar sesión
                      </a>
                    </div>
                  </li>
                ) : (
                  <li></li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
  };
};
export default connect(mapStateToProps, "")(Navigation);
