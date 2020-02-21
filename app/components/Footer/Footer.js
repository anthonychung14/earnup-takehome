import React from "react";
import Avatar from "react-avatar";
import { useSelector } from "react-redux";
import { useFirebase, isLoaded, isEmpty } from "react-redux-firebase";

import Box from "components/Box";

import "./style.scss";

const UserWelcome = ({ displayName, photoURL, uid }) => {
  const firebase = useFirebase();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flex: 1
      }}
    >
      <Avatar round src={photoURL} size={50} style={{ marginRight: "15px" }} />
      <h3>Hello {displayName}</h3>
    </div>
  );
};

const Footer = () => {
  const firebase = useFirebase();
  const auth = useSelector(state => state.firebase.auth);

  return (
    <footer>
      {isLoaded(auth) && isEmpty(auth) ? (
        <div>
          <section>
            Built by{" "}
            <a href="https://github.com/anthonychung14/earnup-takehome">
              Anthony Chung
            </a>
          </section>
          <section>
            TY to <a href="https://twitter.com/flexdinesh">Dinesh Pandiyan</a>{" "}
            for the boilerplate{" "}
            <span role="img" aria-label="heart-emoji">
              ❤️
            </span>{" "}
          </section>
        </div>
      ) : (
        <UserWelcome {...auth} />
      )}
    </footer>
  );
};

export default Footer;
