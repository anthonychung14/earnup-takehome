/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from "redux-saga/effects";
import firebase from "firebase/app";
import "firebase/database";

import { getChatroomPath } from "containers/App/selectors";

export function* addFBMessage({ message, senderId, senderPhotoURL }) {
  const chatroomPath = yield select(getChatroomPath);

  try {
    const repos = yield firebase.ref(chatroomPath).push({
      message_text: message,
      sender_id: senderId,
      sender_photo_url: senderPhotoURL
    });
  } catch (err) {
    console.log(err);
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* messageWatcher() {
  yield takeLatest("SEND_MESSAGE", addFBMessage);
}
