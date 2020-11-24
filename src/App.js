import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AdminRoute from './routes/AdminRoutes';
import { connect } from "react-redux";
import { login } from "./services/actions/auth";
import { bindActionCreators } from "redux";
import {Topbar} from "./components/Topbar/topbar";
import Login from "./container/Login";

const App = (props, { location }) => {
  // if (props.unauthorized.unauthorized === true) {
  //   props.history.push("/auth/login");
  //   props.login();
  // }
  return (
    <BrowserRouter>
    <Topbar className="outerpage"/>
    <Switch>
    <Route location={location} path="/" component={Login} />
    <AdminRoute location ={location} path=""/>
    </Switch>
    </BrowserRouter>
  );
};

const mapDispatch = (dispatch) => {
  return bindActionCreators(
    {
      login,
    },
    dispatch
  );
};

const mapGetState = (state) => {
  return {
    unauthorized: state.auth,
  };
};
export default connect(mapGetState, mapDispatch)(App);

