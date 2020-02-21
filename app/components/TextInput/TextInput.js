/*
 * Chat Page
 *
 */
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Box from "components/Box";
const getFirebaseAuth = state => state.firebase.auth;

const sendMessage = (message, senderId, senderPhotoURL) => ({
  type: "SEND_MESSAGE",
  message,
  senderId,
  senderPhotoURL
});

const useTextInputState = () => {
  const [message, setMessage] = React.useState("");
  const dispatch = useDispatch();
  const auth = useSelector(getFirebaseAuth);

  const updateTextValue = React.useCallback(evt => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    setMessage(evt.target.value);
  });

  const sendTextMessage = React.useCallback(() => {
    dispatch(sendMessage(message, auth.uid, auth.photoURL));
    setMessage("");
  });

  return [message, updateTextValue, sendTextMessage];
};

const InputWindow = () => {
  const [message, updateTextValue, sendTextMessage] = useTextInputState();

  return (
    <Box>
      <div
        style={{
          height: "50px",
          margin: "2%"
        }}
      >
        <input
          className="message"
          type="text"
          value={message}
          onChange={updateTextValue}
        />
      </div>
      <button disabled={message === ""} onClick={sendTextMessage}>
        Send Message
      </button>
    </Box>
  );
};

export default InputWindow;
