import './App.css';
import { Switch, Route } from 'react-router-dom';
import PageInlog from "./pages/PageInlog";
import PageRegister from "./pages/PageRegister";
import PageAvailableTip from "./pages/PageAvailableTip";
import PageTrade from "./pages/PageTrade";
import PageSendTips from "./pages/PageSendTips";
import PageGroup from "./pages/PageGroup";
import PageAdminLink from "./pages/PageAdminLink";
import PageAdminStandartTip from "./pages/PageAdminStandartTip";

function App() {
  return (
      <div className="App">
              <Switch>
                  <Route exact path="/">
                      <PageInlog/>
                  </Route>
                  <Route path="/register">
                      <PageRegister/>
                  </Route>
                  <Route path="/available_tips">
                      <PageAvailableTip/>
                  </Route>
                  <Route path="/trade">
                      <PageTrade/>
                  </Route>
                  <Route path="/verstuurde_tips">
                      <PageSendTips/>
                  </Route>
                  <Route path="/groep">
                      <PageGroup/>
                  </Route>
                  <Route path="/link">
                      <PageAdminLink/>
                  </Route>
                  <Route path="/standaart_tip">
                      <PageAdminStandartTip/>
                  </Route>
              </Switch>
      </div>
  );
}

export default App;

