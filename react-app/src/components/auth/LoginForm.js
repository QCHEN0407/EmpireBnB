import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../store/session";
import useConsumeContext from "../../context/LoginSignupModalContext";
import "./LoginForm.css";


const LoginForm = () => {
  const { handleSignupModal } = useConsumeContext();
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();


  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data.errors) {
      setErrors(data.errors);
    }
  };

  useEffect(() => {
    if (user) {
      history.push(`/users/${user.id}/1`);
    }
  }, [user, history])


  return (
    <div className="login__wrapper">
      <form onSubmit={onLogin}>
        <div className="login__header">
          <p>Login to Empirebnb</p>
        </div>
        <div className="errors">
          {errors.map((error) => (
            <div key={error}>・{error}</div>
          ))}
        </div>
        <div className="login__input">
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            autoComplete="off"
          />
        </div>
        <div className="login__input">
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            autoComplete="off"
          />
        </div>
        <div className="login__button">
          <button style={{ cursor: 'pointer' }} type="submit">Login</button>
        </div>
        <div className="goto__signup">
          <p>New to Empirebnb?</p>
          <h3 onClick={handleSignupModal} style={{ cursor: 'pointer' }}>Create an account</h3>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;