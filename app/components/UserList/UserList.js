import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFirebaseConnect } from "react-redux-firebase";

import Box from "components/Box";
import Avatar from "react-avatar";

const Sidebar = ({ makeHandlePress }) => {
  useFirebaseConnect("users");
  const users = useSelector(state => state.firebase.ordered.users || []);
  const selectedRoom = useSelector(state => state.global.activeChatroom);

  return (
    <Box style={{ justifyContent: "flex-start", flex: 1 }}>
      <button
        onClick={makeHandlePress("GENERAL")}
        style={{
          backgroundColor: selectedRoom === "GENERAL" ? "#00AB61" : null,
          height: "50px"
        }}
      >
        <h4>General</h4>
      </button>

      {users.map(({ key, value }) => (
        <button
          onClick={makeHandlePress(key)}
          style={{
            backgroundColor: selectedRoom === key ? "#00AB61" : null,
            height: "50px"
          }}
          key={key}
        >
          <Avatar src={value.avatarUrl} size={40} />
        </button>
      ))}
    </Box>
  );
};

const UserList = ({ children }) => {
  const dispatch = useDispatch();
  const drawerOpen = useSelector(state => state.global.drawerOpen);

  const makeHandlePress = userId => () => {
    dispatch({
      type: "SELECT_USER",
      payload: {
        userId
      }
    });
  };

  if (!drawerOpen) return null;

  return <Sidebar makeHandlePress={makeHandlePress} />;
};

export default UserList;
