import React from 'react';
import 'assets/css/app.css';
import NotFound from 'pages/NotFound';
import Home from 'pages/Home';
import Team from 'pages/Team';
import { LanguageContext } from 'contexts';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [languange, setLanguage] = useState<'en' | 'id'>('en');

  const changeLanguage = (lang: 'en' | 'id') => setLanguage(lang);

  return (
    <LanguageContext.Provider value={{ value: languange, change: changeLanguage }}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/team" exact component={Team} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </LanguageContext.Provider>
  );
}

export default App;
