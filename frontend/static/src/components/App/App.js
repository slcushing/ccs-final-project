import {useEffect, useState} from 'react';
import {Route, Switch, withRouter, useHistory} from 'react-router-dom';
import './App.css';
import RegistrationForm from './../Registration/RegistrationForm';
import LoginForm from './../Login/LoginForm';
import Header from './../Header/Header';
import LandingPage from './../Landing/LandingPage';


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
      <Header isAuth={isAuth} isAdmin={isAdmin}/>
      <Switch>
        {/* <Route path='/'>
          <LandingPage/>
        </Route> */}
        <Route path='/registration'>
          <RegistrationForm isAuth={isAuth} setUser={setUser}/>
        </Route>
        <Route path='/login'>
          <LoginForm isAuth={isAuth} setUser={setUser}/>
        </Route>
      </Switch>
    </>
  );
}

export default withRouter(App);
