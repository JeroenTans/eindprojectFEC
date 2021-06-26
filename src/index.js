import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router} from 'react-router-dom';
import AuthContextProvider from "./componenten/Context/AuthContextProvider";
import StandardTipContextProvider from "./componenten/Context/StandardTipContextProvider";
import PublicTipContextProvider from "./componenten/Context/PublicTipContextProvider";
import PrivateTipContextProvider from "./componenten/Context/PrivateTipContextProvider";

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <AuthContextProvider>
              <StandardTipContextProvider>
                  <PublicTipContextProvider>
                      <PrivateTipContextProvider>
                            <App />
                      </PrivateTipContextProvider>
                  </PublicTipContextProvider>
              </StandardTipContextProvider>
          </AuthContextProvider>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
