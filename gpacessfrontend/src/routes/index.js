import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';
import ForgotPass from '../pages/ForgotPass';
import ListUsers from '../pages/ListUsers';
import Management from '../pages/Management';
import Register from '../pages/Register';
import Updates from '../pages/Updates';
import EditUser from '../pages/EditUser';
import EditUserTag from '../pages/EditUser/EditUserTag';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/forgotpass" component={ForgotPass} />
      <Route path="/management" component={Management} isPrivate />
      <Route path="/listusers" component={ListUsers} isPrivate />
      <Route path="/edituser" component={EditUser} isPrivate />
      <Route path="/edituser/:userId" component={EditUser} isPrivate />
      <Route path="/register" component={Register} />
      <Route path="/updates" component={Updates} isPrivate />
      <Route path="/editusertag/" component={EditUserTag} isPrivate />
      <Route path="/editusertag/:userId" component={EditUserTag} isPrivate />
    </Switch>
  );
}
