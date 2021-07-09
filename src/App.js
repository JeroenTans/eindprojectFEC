import './App.css';
import React, {useContext} from 'react'
import { Switch, Route } from 'react-router-dom';
import PageInlog from "./pages/PageInlog";
import PageRegister from "./pages/PageRegister";
import PageAvailableTip from "./pages/PageAvailableTip";
import PageTrade from "./pages/PageTrade";
import PageSendTips from "./pages/PageSendTips";
import PageGroup from "./pages/PageGroup";
import PageAdminLink from "./pages/PageAdminLink";
import PageAdminStandartTip from "./pages/PageAdminStandartTip";
import RouteProtector from "./componenten/routeProtector/RouteProtector";
import ProtectedRouteAdmin from "./componenten/routeProtector/RouteProtectorAdmin";
import PageNotFound from "./pages/PageNotFound";
import {useAuthContext} from "./componenten/Context/AuthContextProvider";

function App() {
    const {user} = useAuthContext()
  return (
      <div className="App">
              <Switch>
                  <Route exact path="/">
                      <PageInlog/>
                  </Route>
                  <Route exact path="/register">
                      <PageRegister/>
                  </Route>
                  <RouteProtector exact path="/available_tips" component={PageAvailableTip}/>
                  <RouteProtector exact path="/trade" component={PageTrade}/>
                  <RouteProtector exact path="/verstuurde_tips" component={PageSendTips}/>
                  <RouteProtector exact path="/groep" component={PageGroup}/>
                  {user && user.authority === "ADMIN"?
                  <RouteProtector exact path="/link" component={PageAdminLink}/>:""}
                  {user && user.authority === "ADMIN"?
                  <RouteProtector exact path="/standaart_tip" component={PageAdminStandartTip}/>:""}
                  <Route path="/*" component={PageNotFound}/>
              </Switch>
      </div>
  );
}

export default App;

