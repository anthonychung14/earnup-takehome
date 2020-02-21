/*
 * Message Window
 *
 */
import React from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useFirebase, useFirebaseConnect } from "react-redux-firebase";
import Avatar from "react-avatar";
import R from "ramda";

import Box from "components/Box";
import { getChatroomPath, getMessages } from "containers/App/selectors";

const UserMessage = ({ key, value }) => {
  return (
    <div
      key={key}
      style={{
        display: "flex",
        padding: "2%",
        border: "1px black solid"
      }}
    >
      <Avatar round src={value.sender_photo_url} size={50} />
      <div style={{ margin: "1%" }}>
        <p>{value.message_text}</p>
      </div>
    </div>
  );
};

const RenderList = R.map(UserMessage);

const EmptyMessages = () => (
  <div style={{ textAlign: "center" }}>
    <h4>No messages yet</h4>
  </div>
);

const MessageWindow = () => {
  const chatroomPath = useSelector(getChatroomPath);
  useFirebaseConnect(chatroomPath);

  const messages = useSelector(getMessages);

  return (
    <Box
      style={{
        overflow: "scroll",
        height: "400px",
        justifyContent: "flex-start",
        flex: 3
      }}
    >
      {messages ? RenderList(messages) : <EmptyMessages />}
    </Box>
  );
};

export default MessageWindow;
