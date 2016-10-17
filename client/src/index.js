import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './components/App/App';
import Overview from './components/Overview/Overview';
import ReportOverview from './components/Reports/ReportOverview';
import UserOverview from './components/Users/UserOverview';
import EntryPanel from "./components/EntryPanel/EntryPanel";
import Main from "./components/Main/Main";
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './dashboard.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/main" component={Main} >
        <IndexRoute component={EntryPanel} />
        <Route path="/" component={EntryPanel} />
        <Route path="/folders/:folderId" component={EntryPanel} />
        <Route path="/reports" component={ReportOverview} />
        <Route path="/overview" component={Overview} />
        <Route path="/users" component={UserOverview} />
      </Route> 
    </Route>
  </Router>
  ),document.getElementById('root')
);
