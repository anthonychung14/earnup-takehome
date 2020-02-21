/*
 * Chat Page
 *
 */
import React from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useFirebase, useFirebaseConnect } from "react-redux-firebase";
import Avatar from "react-avatar";
import R from "ramda";

import Box from "components/Box";
import AuthorizedView from "components/AuthorizedView";
import UserList from "components/UserList";
import MessageWindow from "components/MessageWindow";
import TextInput from "components/TextInput";

import "./style.scss";

export default class ChatPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className="feature-page">
        <Helmet>
          <title>Chat Page</title>
          <meta name="description" content="Chat page" />
        </Helmet>
        <AuthorizedView>
          {({ auth }) => (
            <Box>
              <Box style={{ flexDirection: "row" }}>
                <UserList />
                <MessageWindow />
              </Box>
              <TextInput />
            </Box>
          )}
        </AuthorizedView>
      </div>
    );
  }
}
