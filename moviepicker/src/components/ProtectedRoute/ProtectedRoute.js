import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, ...props  }) => {
  return (
    <Route>
      {() => props.loggedIn.loggedIn ? <Component {...props} /> : setTimeout(<Redirect to="/" />, 500)}
    </Route>
  )
}
