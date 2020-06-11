import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

// APP STYLE
import "./App.css";

// SCREENS IMPORT
import { LoginPage } from "./pages/Login.page";
import { RegisterPage } from "./pages/Register.page";
import { RecoverPassword } from "./pages/RecoverPassword.page";

import HomePage from "./pages/Home.page";
import { AboutUsPage } from "./pages/AboutUs.page";
import { FavoritePage } from "./pages/Favorite.page";
import ProductsPage from "./pages/Products.page";
import CartPage from "./pages/Cart.page";
import { TrackOrderPage } from "./pages/TrackOrder.page";
import { UserPersonalInfoPage } from "./pages/UserPersonalInfo.page";

// FOOTER PAGES IMPORT
import TestimonialsPage from "./pages/include/FooterPages/Testimonials.page";
import SupportHelpPage from "./pages/include/FooterPages/SupportHelp.page";
import PrivacyPolicyPage from "./pages/include/FooterPages/PrivacyPolicy.page";
import TermsConditionsPage from "./pages/include/FooterPages/TermsConditions.page";

import { DashboardPage } from "./pages/Dashboard.page";

// ROUTES HANDLING
import PrivateRoute from "./_services/PrivateRoute";
import PublicRoute from "./_services/PublicRoute";

// USING SERVICE TO CHECK ACTIVATION OF USERS
import { getToken, logout, login } from "./_services/user.service";

function App() {
  const apiUrl = global.config.apiBaseURL.url;
  const [authLoading, setAuthLoading] = useState(true);

  // console.log("URL --- ", apiUrl);
  // useEffect(() => {
  //   const token = getToken();
  //   if (!token) {
  //     return;
  //   }

  //   axios.get(`http://localhost:4000/verifyToken?token=${token}`).then(response => {
  //     setUserSession(response.data.token, response.data.user);
  //     setAuthLoading(false);
  //   }).catch(error => {
  //     removeUserSession();
  //     setAuthLoading(false);
  //   });
  // }, []);

  // if (authLoading && getToken()) {
  //   return <div className="content">Checking Authentication...</div>
  // }
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about_us" component={AboutUsPage} />
      <Route exact path="/products" component={ProductsPage} />
      <Route exact path="/cart" component={CartPage} />

      <Route exact path="/testimonial" component={TestimonialsPage} />
      <Route exact path="/support-help" component={SupportHelpPage} />
      <Route exact path="/privacy-policy" component={PrivacyPolicyPage} />
      <Route exact path="/terms-conditions" component={TermsConditionsPage} />      
      
      <PublicRoute exact path="/login" component={LoginPage} />
      <PublicRoute exact path="/register" component={RegisterPage} />
      <PublicRoute exact path="/recover-password" component={RecoverPassword} />
      
      <PrivateRoute exact path="/personal-info" component={UserPersonalInfoPage} />
      <PrivateRoute exact path="/favourites" component={FavoritePage} />
      <PrivateRoute exact path="/track-order" component={TrackOrderPage} />
      <PrivateRoute exact path="/dashboard" component={DashboardPage} />

      <Route path="*" component={() => "404 Not Found!"} />
    </Switch>
  );
}

export default App;
