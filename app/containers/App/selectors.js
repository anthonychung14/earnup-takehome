import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectGlobal = state => state.global || initialState;

const selectRoute = state => state.router;
const selectOrderedData = state => state.firebase.ordered;
const selectAuth = state => state.firebase.auth;

const getActiveChatroom = createSelector(
  selectGlobal,
  globalState => globalState.activeChatroom
);
const makeSelectActiveChatroom = () => getActiveChatroom;

const makeSelectLocation = () =>
  createSelector(selectRoute, routeState => routeState.location);

const getLoggedInId = createSelector([selectAuth], auth => auth.uid || null);

const getChatroomKey = createSelector(
  [getActiveChatroom, getLoggedInId],
  (activeChatroom, loggedInId) => {
    let messageRoomId;
    if (activeChatroom === "GENERAL") {
      messageRoomId = activeChatroom;
    } else {
      const [first, second] = [activeChatroom, loggedInId].sort();
      messageRoomId = `${first}-${second}`;
    }

    return messageRoomId;
  }
);

const getChatroomPath = createSelector([getChatroomKey], key => {
  return `messages/${key}`;
});

const getMessages = createSelector(
  [getChatroomKey, selectOrderedData],
  (key, ordered) => {
    if (ordered.messages) {
      return ordered.messages[key];
    }
    return null;
  }
);

export {
  selectGlobal,
  makeSelectActiveChatroom,
  makeSelectLocation,
  getChatroomPath,
  getChatroomKey,
  getMessages
};
