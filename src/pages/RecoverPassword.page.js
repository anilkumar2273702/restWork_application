import React from "react";
import { recoverPassword } from "../_services/user.service";

class RecoverPassword extends React.Component {
  constructor(props) {
    super(props);

    // userService.logout();

    this.state = {
      email: "",
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
    const { email } = this.state;

    // stop here if form is invalid
    if (!(email)) {
      return;
    }

    this.setState({ loading: true });
    recoverPassword(email).then(
      (response) => {
        const { from } = this.props.location.state || {
          from: { pathname: "/" },
        };
        this.setState({ loading: false });

        // IF GETTING RESPONSE TRUE
        if (response.completed) {
          // this.props.history.push(from);
          alert(response.message);
        }
      },
      (error) => this.setState({ error, loading: false })
    );
  }

  render() {
    const { email, loading, error } = this.state;
    return (
      <div className="container-login login-section-bg">
        <div className="wrap-login">
          <h5>Olvidaste contraseña</h5>
          <form
            className="form-signin"
            name="recoverPasswordForm"
            onSubmit={this.handleSubmit}
          >
            <div className="form-group">
              <input
                type="email"
                id="inputEmail"
                name="email"
                className="form-control"
                placeholder="Correo electrónico"
                value={email}
                onChange={this.handleChange}
                required
                autoFocus
              />
            </div>
            <button
              className="yellow-full-btn"
              type="submit"
              disabled={loading}
            >
              {loading ? "Enviar....." : "Enviar"}
            </button>

            <hr className="my-4" />
            <div className="login-create">
              Usuario nuevo?{" "}
              <a
                onClick={() => {
                  this.props.history.push("/register");
                }}
              >
                Registrate
              </a>
              {" "}
              |
              {" "}
              <a
                onClick={() => {
                  this.props.history.push("/login");
                }}
              >
                Iniciar sesión
              </a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export { RecoverPassword };
