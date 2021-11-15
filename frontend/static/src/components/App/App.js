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
import Workout from './../Workout/Workout';
import Clients from './../Clients/Clients';
import ProfileForm from './../Profile/ProfileForm';
import ProfileEdit from './../Profile/ProfileEdit';
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

 

  if(!user) {
    return <div>I am loading!</div>
  }

  const isAuth = user?.isAuth;
  const isAdmin = user?.isAdmin;
  const username = user?.username;
  

  return (
    <>
      <MainHeader isAuth={isAuth} isAdmin={isAdmin} handleLogout={handleLogout}/>
      {isAuth && <DashboardHeader username={username} isAdmin={isAdmin}/> }
      <Switch>
        <Route path='/registration'>
          <RegistrationForm isAuth={isAuth} setUser={setUser}/>
        </Route>
        <Route path='/login'>
          <LoginForm isAuth={isAuth} isAdmin={isAdmin} setUser={setUser}/>
        </Route>
        <PrivateRoute path='/profile' isAuth={isAuth}>
          <ProfileForm isAuth={isAuth}/>
        </PrivateRoute>
        <PrivateRoute path='/dashboard' isAuth={isAuth} isAdmin={isAdmin}>
          <Dashboard isAuth={isAuth} isAdmin={isAdmin}/>
        </PrivateRoute>
        <PrivateRoute path='/clients/:filter?' isAuth={isAuth} isAdmin={isAdmin}>
          <Clients isAuth={isAuth} isAdmin={isAdmin}/>
        </PrivateRoute>
        <PrivateRoute path='/calendar' isAuth={isAuth} isAdmin={isAdmin}>
          <CommunityCalendar isAuth={isAuth} isAdmin={isAdmin}/>
        </PrivateRoute>
        <PrivateRoute path='/manage' isAuth={isAuth} isAdmin={isAdmin}>
          <ProfileEdit isAuth={isAuth} isAdmin={isAdmin}/>
        </PrivateRoute>
        <PrivateRoute path='/workouts' isAuth={isAuth} isAdmin={isAdmin}>
          <Workout isAuth={isAuth} isAdmin={isAdmin}/>
        </PrivateRoute>
        <Route path='/' exact>
          <LandingPage isAuth={isAuth} isAdmin={isAdmin}/>
        </Route>
      </Switch>
    </>
  );
}

export default withRouter(App);
