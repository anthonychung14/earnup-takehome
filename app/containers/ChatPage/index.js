import { compose } from "redux";

import injectSaga from "utils/injectSaga";
import saga from "./saga";

import ChatPage from "./ChatPage";
const withSaga = injectSaga({ key: "chat", saga });

export default compose(withSaga)(ChatPage);
