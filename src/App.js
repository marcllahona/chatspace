import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles/App.css';
import routes from './navigation/routes';
import * as S from './styles';

function App() {
  return (
    <S.AppContainer>
      <Switch>
        {routes.map(route => {
          return (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          );
        })}
      </Switch>
    </S.AppContainer>
  );
}

export default App;
