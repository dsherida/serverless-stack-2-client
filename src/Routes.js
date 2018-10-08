import React from "react";
import { Route, Switch } from "react-router-dom";
import AppliedRoute from "./components/AppliedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import Loadable from 'react-loadable';
import MyLoadingComponent from "./components/MyLoadingComponent";

const AsyncHome = Loadable({loader: () => import("./containers/Home"), loading: MyLoadingComponent});
const AsyncNotes = Loadable({loader: () => import("./containers/Notes"), loading: MyLoadingComponent});
const AsyncLogin = Loadable({loader: () => import("./containers/Login"), loading: MyLoadingComponent});
const AsyncSignup = Loadable({loader: () => import("./containers/Signup"), loading: MyLoadingComponent});
const AsyncNewNote = Loadable({loader: () => import("./containers/NewNote"), loading: MyLoadingComponent});
const AsyncNotFound = Loadable({loader: () => import("./containers/NotFound"), loading: MyLoadingComponent});
const AsyncSettings = Loadable({loader: () => import("./containers/Settings"), loading: MyLoadingComponent});
const AsyncResetPassword = Loadable({loader: () => import("./containers/ResetPassword"), loading: MyLoadingComponent});
const AsyncChangePassword = Loadable({loader: () => import("./containers/ChangePassword"), loading: MyLoadingComponent});
const AsyncChangeEmail = Loadable({loader: () => import("./containers/ChangeEmail"), loading: MyLoadingComponent});

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={AsyncHome} props={childProps} />
    <UnauthenticatedRoute path="/login" exact component={AsyncLogin} props={childProps} />
    <UnauthenticatedRoute path="/signup" exact component={AsyncSignup} props={childProps} />
    <UnauthenticatedRoute path="/login/reset" exact component={AsyncResetPassword} props={childProps} />
    <AuthenticatedRoute path="/settings" exact component={AsyncSettings} props={childProps} />
    <AuthenticatedRoute path="/settings/email" exact component={AsyncChangeEmail} props={childProps} />
    <AuthenticatedRoute path="/settings/password" exact component={AsyncChangePassword} props={childProps} />
    <AuthenticatedRoute path="/notes/new" exact component={AsyncNewNote} props={childProps} />
    <AuthenticatedRoute path="/notes/:id" exact component={AsyncNotes} props={childProps} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={AsyncNotFound} />
  </Switch>;
