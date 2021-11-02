import {useEffect, useState} from 'react';
import {Route, Switch, withRouter, useHistory} from 'react-router-dom';
import './App.css';
import PrivateRoute from './../PrivateRoute/PrivateRoute'
import RegistrationForm from './../Registration/RegistrationForm';
import LoginForm from './../Login/LoginForm';
import MainHeader from '../Header/MainHeader';
import LandingPage from './../Landing/LandingPage';
import DashCalendar from './../Dashboard/DashCalendar';
import DashboardHeader from './../Header/DashboardHeader';


function App() {
  const [user, setUser] = useState(null);

  const history = useHistory();

  useEffect(() => {
    const checkAuth = async () => {
      const response = await fetch('/rest-auth/user/');
      if(!response.ok) {
        setUser({isAuth: false});
      } else {
        const data = await response.json();
        setUser({isAuth: true, isAdmin: data.is_staff})
      }
    }
    checkAuth();
  }, [history]);

  const isAuth = user?.isAuth;
  const isAdmin = user?.isAdmin;

  return (
    <>
      <MainHeader isAuth={isAuth} isAdmin={isAdmin}/>
      {/* <DashCalendar/> */}
      <Switch>
        <Route path='/'>
          <LandingPage/>
        </Route>
        <Route path='/registration'>
          <RegistrationForm isAuth={isAuth} setUser={setUser}/>
        </Route>
        <Route path='/login'>
          <LoginForm isAuth={isAuth} setUser={setUser}/>
        </Route>
        <PrivateRoute path='/dashboard' isAuth={isAuth} isAdmin={isAdmin}>
          <DashboardHeader/>
        </PrivateRoute>
      </Switch>
    </>
  );
}

export default withRouter(App);
