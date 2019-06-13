import io from "socket.io-client";
import store from "./store";

const getToken = () => {
  return store.getState().authenticationState.token;
};

const socket = io.connect("http://localhost:5000", {
  query: "token=" + getToken()
});

export default socket;
