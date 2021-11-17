import {Redirect} from 'react-router-dom'

function PrivateRoute({ isAuth, component: Component, ...props }) {
  return isAuth ? (
    <Component isAuth={isAuth} {...props} />
  ) : (
    <Redirect to="/login" />
  );
}

export default PrivateRoute;