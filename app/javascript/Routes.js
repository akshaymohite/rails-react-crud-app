// app/javascript/routes.js
import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import HelloWorld from './bundles/HelloWorld/components/HelloWorld';
import Posts from './bundles/posts/index';
import PostDetails from './bundles/posts/PostDetails';

export default () => {
  return (
    <Switch>
      <Route exact path="/">
        <Posts />
      </Route>
      <Route
        path="/posts/:id"
        exact
        component={PostDetails}
       />
    </Switch>
  );
}
