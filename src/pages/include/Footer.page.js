import React from "react";

export const Footer = (props) => {
  return (
    <footer className="footer-section">
      <div className="footer-main">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="footer_logo">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/footer-logo.png"
                  }
                  alt=""
                />
                <p className="address-info">Av.La Marina, #239 Restwork</p>
                <p className="phone-text">Teléfono: 958654784</p>
                <p className="email-text">clientes@restwork.com</p>
              </div>
            </div>
            <div className="col-sm-2">
              <h6>Información</h6>
              <ul>
                <li>
                  <a
                    title="About Us"
                    onClick={() => {
                      props.props.history.push("/about_us");
                    }}
                  >
                    Sobre nosotros
                  </a>
                </li>
                <li>
                  <a href="#">Buscar comida</a>
                </li>
                <li>
                  <a href="#">Testimonios</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-2">
              <h6>Nuestro menú</h6>
              <ul>
                <li>
                  <a href="#">Desayuno</a>
                </li>
                <li>
                  <a href="#">Almuerzo</a>
                </li>
                <li>
                  <a href="#">Cena</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-2">
              <h6>Enlaces Útiles</h6>
              <ul>
                <li>
                  <a href="#">Soporte / ayuda</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-2">
              <div className="social-icons">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter" aria-hidden="true"></i>{" "}
                      Gorjeo
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook-square"></i> Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-instagram"></i> Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <p className="copyright-text">
                Copyright © 2020 Rest Work. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
