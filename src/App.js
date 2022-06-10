import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Tables from './pages/Tables';
import Billing from './pages/Billing';
import EmployeeManagePage from './pages/EmployeeManagePage';
import FundManagePage from './pages/FundManagePage';
import LostStockManagePage from './pages/LostStockManagePage';
import TransactionManagePage from './pages/TransactionManagePage';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Main from '@components/layout/Main';
import 'antd/dist/antd.css';
import './assets/styles/main.css';
import './assets/styles/responsive.css';
import { client } from './apollo';
import { ApolloProvider } from '@apollo/client';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Switch>
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/sign-in" exact component={SignIn} />
          <Main>
            <Route exact path="/dashboard" component={Home} />
            <Route exact path="/tables" component={Tables} />
            <Route exact path="/billing" component={Billing} />
            <Route exact path="/employees" component={EmployeeManagePage} />
            <Route exact path="/funds" component={FundManagePage} />
            <Route exact path="/loststocks" component={LostStockManagePage} />
            <Route exact path="/transactions" component={TransactionManagePage} />
            <Redirect from="*" to="/dashboard" />
          </Main>
        </Switch>
      </div>
    </ApolloProvider>
  );
}

export default App;
