import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './containers/Home';
import Explore from './containers/Explore';
import Waiting from './containers/Waiting';
import Follow from './containers/Follow';
import Hot from './containers/Hot';
import { Globalstyle } from './style';
import { Iconfontstyle } from './statics/iconfont/iconfont';
import store from './redux/store';

const App = (props) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Globalstyle />
          <Iconfontstyle />
          <Switch>
            <Route path="/explore" component={Explore} />
            <Route path="/question/waiting" component={Waiting} />
            <Route path="/follow" component={Follow} />
            <Route path="/hot" component={Hot} />
            <Route path="/" exact component={Home} />
            <Redirect to="/" />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
