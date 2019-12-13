import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SidebarNavbar from './Layout/AdminPageLayout/SidebarNavbar';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <div className="App">
            <SidebarNavbar />
            <div id="board">
              <Switch>
                {Routes.map((route, index) => {
                  return <Route path={route.path} component={route.main} exact={route.exact} key={index} />
                })}
              </Switch>
            </div>
          </div>
        </Fragment>
      </Router>
    )
  }
}

export default App;