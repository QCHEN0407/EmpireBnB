import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/SplashPage/NavBar/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./store/session";
import { LoginSignupModalProvider } from "./context/LoginSignupModalContext";
import SplashPage from "./components/SplashPage/Splash";

function App() {
  const user = useSelector(state => state.session.user)
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setIsLoaded(true);
    })();
  }, []);

  if (!isLoaded) {
    return null;
  }

  return (
    <>
      <LoginSignupModalProvider>
        {isLoaded && (
          <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <NavBar isLoaded={isLoaded} />
              <SplashPage />
            </Route>

            <Route path="/listings/:id(\d+)">
            </Route>

            <Route path="/bookings">
            </Route>

            <Route exact path="/search">
            </Route>

            <Route path="/search/:category">
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
