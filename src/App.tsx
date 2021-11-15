import React from 'react';
import 'assets/css/app.css';
import NotFound from 'pages/NotFound';
import Home from 'pages/Home';
import Team from 'pages/Team';
import { LanguageContext } from 'contexts';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  withRouter
} from "react-router-dom";


function App() {
  const [languange, setLanguage] = useState<'en' | 'id'>('en');

  const changeLanguage = (lang: 'en' | 'id') => setLanguage(lang);

  function _ScrollToTop(props: any) {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return props.children
  }

  const ScrollToTop = withRouter(_ScrollToTop)
  return (
    <LanguageContext.Provider value={{ value: languange, change: changeLanguage }}>
      <Router>
        <ScrollToTop>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/team" exact component={Team} />
            <Route component={NotFound} />
          </Switch>
        </ScrollToTop>
      </Router>
    </LanguageContext.Provider>
  );
}

export default App;
