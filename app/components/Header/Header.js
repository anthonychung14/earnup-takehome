import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFirebase, isLoaded, isEmpty } from "react-redux-firebase";

import "./style.scss";

const Header = () => {
  const dispatch = useDispatch();
  const toggleUserList = React.useCallback(() => {
    dispatch({ type: "TOGGLE_DRAWER" });
  });
  const firebase = useFirebase();
  const auth = useSelector(state => state.firebase.auth);
  const isOut = isLoaded(auth) && isEmpty(auth);

  return (
    <div className="header">
      <section className="nav-bar">
        <button onClick={toggleUserList}>Users</button>
      </section>
      <section className="nav-bar">
        <h2>Chat up</h2>
      </section>
      <section className="nav-bar">
        {!isOut && <button onClick={() => firebase.logout()}>Logout</button>}
      </section>
    </div>
  );
};

export default Header;
