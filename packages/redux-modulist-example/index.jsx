import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./src/store";
import router from "./src/router";

ReactDOM.render(<Provider store={store}>{router}</Provider>, document.getElementById("app"));
