import {useEffect, useState} from 'react';
import { Route, Switch, withRouter, useHistory } from 'react-router-dom';
import './App.css';
import PrivateRoute from './../PrivateRoute/PrivateRoute'
import RegistrationForm from './../Registration/RegistrationForm';
import LoginForm from './../Login/LoginForm';
import MainHeader from './../Header/MainHeader';
import LandingPage from './../Landing/LandingPage';
import Dashboard from './../Dashboard/Dashboard';
import DashboardHeader from './../Header/DashboardHeader';
import CommunityCalendar from './../Calendar/CommunityCalendar';
import Cookies from 'js-cookie';



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
        setUser({...data, isAuth: true, isAdmin: data.is_staff})
      }
    }
    checkAuth();
  }, [history]);

  async function handleLogout(event, props) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(user)
    };
    const response = await fetch('/rest-auth/logout/', options);
    if (!response.ok) {
      console.log(response);
    } else {
      const data = await response.json();
      Cookies.remove('Authorization');
      setUser({isAuth:false});
      history.push('/');
    }
  }

  const isAuth = user?.isAuth;
  const isAdmin = user?.isAdmin;
  const username = user?.username;

  return (
    <>
      <MainHeader isAuth={isAuth} isAdmin={isAdmin} handleLogout={handleLogout}/>
      <Switch>
        <Route path='/registration'>
          <RegistrationForm isAuth={isAuth} setUser={setUser}/>
        </Route>
        <Route path='/login'>
          <LoginForm isAuth={isAuth} setUser={setUser}/>
        </Route>
        <PrivateRoute path='/dashboard' isAuth={isAuth} isAdmin={isAdmin}>
          <DashboardHeader username={username}/>
          <Dashboard/>
        </PrivateRoute>
        <PrivateRoute path='/calendar' isAuth={isAuth} isAdmin={isAdmin}>
          <DashboardHeader username={username}/>
          <CommunityCalendar/>
        </PrivateRoute>
        <Route path='/' exact>
          <LandingPage isAuth={isAuth} isAdmin={isAdmin}/>
        </Route>
      </Switch>
    </>
  );
}

export default withRouter(App);
