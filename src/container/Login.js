import React from "react";
import { connect } from "react-redux";
import Loginform from "./Loginform";
import * as actionCreators from "../services/actions/auth";
class Login extends React.Component {
  state = {
    loader: false,
    type: "",
    data: {
      email: "",
      password: "",
      devicetype: "WEB",
      logintype: "Email",
      // profile: '',
      // facebookId: '',
      // googleId: '',
    },
    errors: {},
    input: "password",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state.data);
  };

  handleChange = (e) => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value },
    });
  };

  componentWillReceiveProps(props) {
    if (props.auth.Login.isverified === "No") {
      props.history.push("/verification", {
        email: this.state.data.email,
        pathname: props.history.location.pathname,
      });
    }
  }

  render() {
    return (
     <Loginform {...this.state}  onSubmit={this.handleSubmit} onChange={this.handleChange}/>
    );
  }
}
const mapGetState = (state) => {
  return state;
};

export default connect(mapGetState, actionCreators)(Login);
