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
import {AuthContext} from "./componenten/Context/AuthContextProvider";

function App() {

    const {user} = useContext(AuthContext);

  return (
      <div className="App">
              <Switch>
                  <Route exact path="/">
                      <PageInlog/>
                  </Route>
                  <Route path="/register">
                      <PageRegister/>
                  </Route>
                  {user.authority === "USER" || user.authority === "ADMIN" ? (
                  <Route path="/available_tips">
                      <PageAvailableTip/>
                  </Route>):""}
                  {user.authority === "USER" || user.authority === "ADMIN" ? (
                  <Route path="/trade">
                      <PageTrade/>
                  </Route>):""}
                  {user.authority === "USER" || user.authority === "ADMIN" ? (
                  <Route path="/verstuurde_tips">
                      <PageSendTips/>
                  </Route>):""}
                  <Route path="/groep">
                      <PageGroup/>
                  </Route>
                  {user.authority === "ADMIN" ? (
                  <Route path="/link">
                      <PageAdminLink/>
                  </Route>):""}
                  {/*{user.authority === "ADMIN" ? (*/}
                  <Route path="/standaart_tip">
                      <PageAdminStandartTip/>
                  </Route>
                  {/*):""}*/}
              </Switch>
      </div>
  );
}

export default App;

