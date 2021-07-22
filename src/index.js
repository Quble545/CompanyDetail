import App from "./App";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";

const app = <App />;

ReactDOM.render(app, document.getElementById("root"));

serviceWorker.unregister();
