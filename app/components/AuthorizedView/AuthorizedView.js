import React from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import {
  useFirebase,
  isLoaded,
  isEmpty,
  useFirebaseConnect
} from "react-redux-firebase";
import { List } from "antd-mobile";
import R from "ramda";

import Avatar from "react-avatar";

import Box from "components/Box";

const Login = ({ handleGoogleLogin }) => {
  return (
    <Box>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </Box>
  );
};

const AuthorizedView = ({ children }) => {
  const firebase = useFirebase();
  const auth = useSelector(state => state.firebase.auth);

  const handleGoogleLogin = React.useCallback(() => {
    firebase.login({ provider: "google", type: "popup" });
  });

  if (auth && auth.isLoaded && auth.isEmpty) {
    return <Login handleGoogleLogin={handleGoogleLogin} />;
  }

  return children({ auth });
};

export default AuthorizedView;
