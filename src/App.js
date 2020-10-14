import React from 'react';
import './App.css';
import Main from './Components/Main/Main';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Nomatch from './Components/Nomatch/Nomatch';
import Comments from './Components/Comments/Comments';
import DetailPost from './Components/DetailPost/DetailPost';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/comment/:idNum">
            <Comments />
          </Route>
          <Route path="/detailPost/:idNum">
            <DetailPost />
          </Route>
          <Route path="*">
            <Nomatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
