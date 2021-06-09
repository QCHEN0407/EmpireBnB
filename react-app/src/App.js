import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/SplashPage/NavBar/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import Footer from "./components/Footer/Footer";
import { authenticate } from "./store/session";
import { LoginSignupModalProvider } from "./context/LoginSignupModalContext";
import SplashPage from "./components/SplashPage/Splash";
import NavBarWhite from "./components/SplashPage/NavBar/NavBarWhite";
import SearchPage from "./components/SearchPage/SearchPage";
import ListingDetail from "./components/ListingDetailPage/ListingDetail";
import ScrollToTop from "./context/ScrollToTop";
import ConfirmationPage from "./components/ConfirmationPage/ConfirmationPage";
import ProfilePage from "./components/ProfilePage/ProfilePage"
import './reset.css';

function App() {
  const user = useSelector(state => state.session.user)
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setIsLoaded(true);
    })();
  }, [dispatch]);

  if (!isLoaded) {
    return null;
  }

  return (
    <>
      <LoginSignupModalProvider>
        {isLoaded && (
          <BrowserRouter>
          <ScrollToTop />
          <Switch>
            <Route exact path="/">
              <NavBar isLoaded={isLoaded} />
              <SplashPage />
              <Footer />
            </Route>

            <Route path="/listings/:id(\d+)">
              <NavBarWhite />
              <ListingDetail />
              <Footer />
            </Route>

            <Route path="/confirm_reservation">
              <NavBarWhite />
              <ConfirmationPage />
              <Footer />
            </Route>

            <Route exact path="/search">
              <NavBarWhite />
              <SearchPage />
              <Footer />
            </Route>

            <Route path="/search/:category">
            </Route>

            <Route path="/profile">
              <NavBarWhite />
              <ProfilePage />
              <Footer />
            </Route>

            <Route path="/users/:id(\d+)">
            </Route>

            <Route path="/login">
              <LoginForm />
            </Route>

            <Route path="/signup">
              <SignUpForm />
            </Route>
          </Switch>
          </BrowserRouter>
        )}
      </LoginSignupModalProvider>
    </>
  );
}

export default App;
