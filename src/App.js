import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Tables from './pages/Tables';
import Billing from './pages/Billing';
import WorkerManagePage from './pages/WorkerManagePage';
import FundManagePage from './pages/FundManagePage';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Main from '@components/layout/Main';
import 'antd/dist/antd.css';
import './assets/styles/main.css';
import './assets/styles/responsive.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/sign-in" exact component={SignIn} />
        <Main>
          <Route exact path="/dashboard" component={Home} />
          <Route exact path="/tables" component={Tables} />
          <Route exact path="/billing" component={Billing} />
          <Route exact path="/workers" component={WorkerManagePage} />
          <Route exact path="/funds" component={FundManagePage} />
          <Redirect from="*" to="/dashboard" />
        </Main>
      </Switch>
    </div>
  );
}

export default App;
