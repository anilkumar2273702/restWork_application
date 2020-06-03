import React from "react";
import Auth from "../../Auth";

export const AddressModal = (props) => {
  return (
    <div id="locationPopup" className="modal fade" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Información de la dirección</h4>
            <button type="button" className="close" data-dismiss="modal">
              &times;
            </button>
          </div>
          <div className="modal-body">
            <div className="location-popup">
              <h5>Escoge un a ciudad</h5>
              <ul>
                <li>
                  <div className="custom-control custom-checkbox mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="limaCheck"
                      name="example1"
                    />
                    <label className="custom-control-label" htmlFor="limaCheck">
                      Lima
                    </label>
                  </div>
                </li>
                <li>
                  <div className="custom-control custom-checkbox mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="cajamarcaCheck"
                      name="example2"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="cajamarcaCheck"
                    >
                      Cajamarca
                    </label>
                  </div>
                </li>
                <li>
                  <div className="custom-control custom-checkbox mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="trujilloCheck"
                      name="example3"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="trujilloCheck"
                    >
                      Trujillo
                    </label>
                  </div>
                </li>
                <li>
                  <div className="custom-control custom-checkbox mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="cuscoCheck"
                      name="example4"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="cuscoCheck"
                    >
                      Cusco
                    </label>
                  </div>
                </li>
                <li>
                  <div className="custom-control custom-checkbox mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="tacnaCheck"
                      name="example5"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="tacnaCheck"
                    >
                      Tacna
                    </label>
                  </div>
                </li>
                <li>
                  <div className="custom-control custom-checkbox mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="arequipaCheck"
                      name="example6"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="arequipaCheck"
                    >
                      Arequipa
                    </label>
                  </div>
                </li>
                <li>
                  <div className="custom-control custom-checkbox mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="juliacaCheck"
                      name="example7"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="juliacaCheck"
                    >
                      Juliaca
                    </label>
                  </div>
                </li>
              </ul>
              <button
                type="submit"
                className="yellow-full-btn"
                id="show-location-map"
              >
                Añadir nueva dirección
              </button>
            </div>
            <div className="location-map-popup">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingresa tu dirección para descubrir tu zona"
                  id="location"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Descripcion de la direccion (ej. apto, torre)"
                  id="address"
                />
              </div>
              <div className="map-location">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1796.6098200797928!2d-73.27791367122106!3d40.77245960977026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e82e00258a6abd%3A0x4f8c8d4d13e00a2b!2sPine%20Aire%20Dr%2C%20Islip%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1589101471046!5m2!1sen!2sin"
                  width="100%"
                  height="235"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
                <span>Usa el mapa para ajustar tu ubicación</span>
              </div>
              <div className="map-address">
                <h4>Esta es la dirección de mi</h4>
                <ul>
                  <li>
                    <a href="#">Casa</a>
                  </li>
                  <li>
                    <a href="#">Oficina</a>
                  </li>
                  <li>
                    <a href="#">Novi@</a>
                  </li>
                  <li>
                    <a href="#">Otro</a>
                  </li>
                </ul>
              </div>
              <button type="submit" className="yellow-full-btn" id="">
                Añadir nueva dirección
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
