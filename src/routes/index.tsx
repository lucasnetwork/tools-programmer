import DefaultLayout from "../layout/default";
import { Router, Route,  } from "@solidjs/router";
import GenerateCPF from "../pages/GenerateCPF";
const Routers=
  () => (
    <Router>
        <Route path="/" component={DefaultLayout} >

        <Route path="/" component={GenerateCPF} />
        </Route>
    </Router>

  )
  export default Routers