import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { withRouter } from "react-router";
import {
  selectCurrentUser,
  selectToggleHidden,
} from "../../Redux/User/user-selectors";
import { ToggleMenuHidden } from "../../Redux/User/user-actions";
import { connect } from "react-redux";
import { compose } from "redux";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__options">
        <div className="navbar__options-primary">
          <Link className="navbar__option" to="/movies">
            ACTION
          </Link>
          <Link className="navbar__option" to="/tvshows">
            RACING
          </Link>
          <Link className="navbar__option" to="/movies">
            ACTION
          </Link>
          <Link className="navbar__option" to="/tvshows">
            RACING
          </Link>
          <Link className="navbar__option" to="/movies">
            ACTION
          </Link>
          <Link className="navbar__option" to="/tvshows">
            RACING
          </Link>
          <Link className="navbar__option" to="/movies">
            ACTION
          </Link>
          <Link className="navbar__option" to="/tvshows">
            RACING
          </Link>
          <Link className="navbar__option" to="/movies">
            ACTION
          </Link>
          <Link className="navbar__option" to="/tvshows">
            RACING
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  hidden: selectToggleHidden(state),
});

const mapDispatchToProps = (dispatch) => ({
  ToggleMenuHidden: () => dispatch(ToggleMenuHidden()),
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Navbar);
