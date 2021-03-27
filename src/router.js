import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/index";
import OrganizationPortfolios from "./pages/OrganizationPortfolios/index";
import OrganizationStrategy from "./pages/OrganizationStrategy/index";
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path={"/"} exact component={Homepage} />
      <Route
        path={"/organization-portfolios"}
        exact
        component={OrganizationPortfolios}
      />
      <Route
        path={"/organization-strategy"}
        exact
        component={OrganizationStrategy}
      />
    </Switch>
  </BrowserRouter>
);

export default Router;
