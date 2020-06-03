import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import routes from "../constants/routes";
import { AuthContext } from "../App";
import protectedRoutes from './protectedRoutes'
import ProtectedRouteHoc from './ProtectedRouteHoc'

const AppRouter = () => {
    const {isLoggedIn} = useContext(AuthContext);
    return(
            <Switch>
              {protectedRoutes.pages.map(route => (
                <ProtectedRouteHoc
                  key={route.path}
                  isLoggedIn={isLoggedIn}
                  path={route.path}
                  component={route.main}
                  exact={route.exact}
                  public={route.public}
                />
              ))}
              {routes.pages.map(route => (
                <Route
                  key={route.path}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              ))}
            </Switch>
  );
}

export default AppRouter;