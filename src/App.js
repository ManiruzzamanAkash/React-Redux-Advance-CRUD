import React from 'react';
import { Switch, Route } from "react-router-dom";
import routes from './routes';

function App() {
  return (
    <div className="App">
      <Switch>
        {
          routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              name={route.name}
              component={route.component}
              exact={route.exact}
            />
          ))
        }
      </Switch>
    </div>
  );
}

export default App;
