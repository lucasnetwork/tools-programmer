/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import Routers from "./routes";

render(() => <Routers />, document.getElementById("root") as HTMLElement);
