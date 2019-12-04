import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getSessionId, getSessionLoading } from '../selectors/sessionSelectors';
import { sessionVerify } from '../actions/sessionActions';
import SignupUser from '../containers/SignupUser';
import UrlForm from '../components/makeURL/UrlForm';

const PrivateRoute = ({ ...rest }) => {
  const sessionId = useSelector(getSessionId);
  const loading = useSelector(getSessionLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    if(!sessionId) dispatch(sessionVerify());
  }, []);
  
  if(loading) {
    return <h1>Loading...</h1>;
  }
  
  if(!loading && !sessionId) {
    return <Redirect to="/login" />;
  }
  console.log(sessionId);
  return <Route {...rest} />;
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={SignupUser} />
        <PrivateRoute exact path="/" component={UrlForm} />
      </Switch>
    </Router>
  );
}
