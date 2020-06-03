import React from "react";
import { login } from "../_services/user.service";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    // userService.logout();

    this.state = {
      username: "",
      password: "",
      submitted: false,
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

    this.setState({ submitted: true });
    const { username, password } = this.state;

    // stop here if form is invalid
    if (!(username && password)) {
      return;
    }

    this.setState({ loading: true });
    login(username, password).then(
      (response) => {
        const { from } = this.props.location.state || {
          from: { pathname: "/" },
        };
        // IF GETTING RESPONSE TRUE THEN SHOULD BE LOGIN AND REDIRCT
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
    const { username, password, submitted, loading, error } = this.state;
    return (
      <div className="container-login login-section-bg">
        <div className="wrap-login">
          <h5>Iniciar Sesión</h5>
          <form
            className="form-signin"
            name="loginForm"
            onSubmit={this.handleSubmit}
          >
            <div className="form-group">
              <input
                type="text"
                id="inputEmail"
                name="username"
                className="form-control"
                placeholder="Usuario"
                autoComplete="new-password"
                value={username}
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
                placeholder="Contraseña"
                autoComplete="new-password"
                value={password}
                onChange={this.handleChange}
                required
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
              {loading ? "Ingresar....." : "Ingresar"}
            </button>

            <hr className="my-4" />
            <button className="btn-google login-social" type="submit">
              <img
                src={process.env.PUBLIC_URL + "assets/images/google-icon.png"}
                alt=""
              />{" "}
              Inicia sesión con Google
            </button>
            <button className="btn-facebook login-social" type="submit">
              <img
                src={process.env.PUBLIC_URL + "assets/images/facebook-icon.png"}
                alt=""
              />{" "}
              Iniciar sesión con Facebook
            </button>
            <button className="btn-twitter login-social" type="submit">
              <img
                src={process.env.PUBLIC_URL + "assets/images/twitter-icon.png"}
                alt=""
              />{" "}
              Iniciar sesión con Gorjeo
            </button>
            <div className="login-create">
              Usuario nuevo?{" "}
              <a
                onClick={() => {
                  this.props.history.push("/register");
                }}
              >
                Registrate
              </a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export { LoginPage };
