import React from "react";
import { register } from "../_services/user.service";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      city: "",
      address: "",
      loading: false,
      error: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    // stop here if form is invalid
    this.setState({ loading: true });

    register(this.state).then(
      (response) => {
        const { from } = this.props.location.state || {
          from: { pathname: "/login" },
        };

        if (response.completed) {
          this.props.history.push(from);
        } else {
          this.setState({ loading: false });
        }
      },
      (error) => this.setState({ error, loading: false })
    );
  }

  render() {
    const { loading, error } = this.state;
    return (
      <div className="container-login login-section-bg">
        <div className="wrap-login">
          <h5>Registro</h5>
          <form className="form-signin" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="username"
                id="inputUsernames"
                name="username"
                className="form-control"
                placeholder="Nombres de Usuario"
                // value={username}
                onChange={this.handleChange}
                required
                autoFocus
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                id="inputPassword"
                name="password"
                className="form-control"
                placeholder="Apellidos de Usuario"
                // value={password}
                onChange={this.handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                id="inputFirstName"
                name="firstName"
                className="form-control"
                placeholder="First Name"
                // value={username}
                onChange={this.handleChange}
                required
                autoFocus
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                id="inputLastName"
                name="lastName"
                className="form-control"
                placeholder="Last Name"
                // value={username}
                onChange={this.handleChange}
                required
                autoFocus
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                id="inputEmail"
                name="email"
                className="form-control"
                placeholder="Email"
                // value={username}
                onChange={this.handleChange}
                required
                autoFocus
              />
            </div>

            <div className="form-group">
              <input
                type="number"
                id="inputPhoneNumber"
                name="phoneNumber"
                className="form-control"
                placeholder="Phone Number"
                // value={username}
                onChange={this.handleChange}
                required
                autoFocus
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                id="inputCity"
                name="city"
                className="form-control"
                placeholder="City"
                // value={username}
                onChange={this.handleChange}
                required
                autoFocus
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                id="inputAddress"
                name="address"
                className="form-control"
                placeholder="Address"
                // value={username}
                onChange={this.handleChange}
                required
                autoFocus
              />
            </div>

            <div className="custom-control custom-checkbox mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Recordar contraseña
              </label>
              <span className="forgot-pass">
                <a
                  onClick={() => {
                    this.props.history.push("/recover-password");
                  }}
                >
                  Olvidaste tu contraseña?
                </a>
              </span>
            </div>
            <button
              className="yellow-full-btn"
              type="submit"
              disabled={loading}
            >
              {loading ? "Registrar....." : "Registrar"}
            </button>
            <div className="register-create">
              ¿Ya tienes una cuenta?
              <a
                onClick={() => {
                  this.props.history.push("/login");
                }}
              >
                iniciar sesión
              </a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export { RegisterPage };
