import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./landing/LandingPage";
import SocialPage from "./social/socialPage";
import Login from "./auth/LoginPage";
import AccountActivation from "./auth/AccountActivationPage";
import ResetPassword from "./auth/ResetPasswordPage";
import Settings from "./settings/Settings";
import Profile from "./profile/Profile";

import EditUser from "./settings/EditUser";
import NotFoundPage from "./auth/NotFoundPage";
import { useSelector } from "react-redux"; 

function Body() {
    const auth = useSelector(state => state.auth);
    const { isLogged, isAdmin } = auth;

    return (
        <section>
            <Switch>
                <Route path="/" component={LandingPage} exact />
                <Route path="/social" component={SocialPage} exact />

                <Route path="/login" component={isLogged ? NotFoundPage : Login} exact />
                <Route path="/user/reset/:token" component={isLogged ? NotFoundPage : ResetPassword} exact />
                <Route path="/user/activate/:activation_token" component={AccountActivation} exact />
                <Route path="/profile/:username" component={Profile} exact />

                <Route path="/settings" component={isLogged ? Settings : NotFoundPage} exact />
                <Route path="/edit_user/:id" component={isAdmin ? EditUser : NotFoundPage} exact />
 
                <Route component={NotFoundPage} />
            </Switch>
        </section>
    );
};

export default Body;