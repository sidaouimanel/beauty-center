import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthForm.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('auth-form-page');
    return () => document.body.classList.remove('auth-form-page');
  }, []);

  const handleFormToggle = () => {
    setIsLogin(prevState => !prevState);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    const loginData = {
      username,
      password,
    };

    try {
      const response = await fetch('http://localhost:5002/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        // Redirection en fonction des informations d'identification
        if (username === 'useradmin' && password === 'admin12') {
          navigate('/admin');
        } else {
          navigate('/user');
        }
      } else {
        alert('Invalid username or password');
      }
    } catch (err) {
      console.error('Error:', err);
      alert('An error occurred. Please try again.');
    }
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    const registerData = {
      username,
      password,
    };

    try {
      const response = await fetch('http://localhost:5002/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData),
      });

      if (response.ok) {
        alert('Registration successful! Please login.');
        setIsLogin(true);
      } else {
        alert('Failed to register. Please try again.');
      }
    } catch (err) {
      console.error('Error:', err);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="wrapper">
      <div className="login_box">
        <div className="login-header">
          <span>{isLogin ? 'Login' : 'Register'}</span>
        </div>
        {isLogin ? (
          <form onSubmit={handleLogin}>
            <div className="input_box">
              <input
                type="text"
                id="user"
                className="input-field"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label htmlFor="user" className="label">Username</label>
              <i className="bx bx-user icon"></i>
            </div>
            <div className="input_box">
              <input
                type="password"
                id="pass"
                className="input-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label htmlFor="pass" className="label">Password</label>
              <i className="bx bx-lock-alt icon"></i>
            </div>
            <div className="remember-forgot">
              <div className="remember-me">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <div className="forgot">
                <a href="#">Forgot password?</a>
              </div>
            </div>
            <div className="input_box">
              <input type="submit" className="input-submit" value="Login" />
            </div>
            <div className="register">
              <span>Don't have an account? <a href="#" onClick={handleFormToggle}>Register</a></span>
            </div>
          </form>
        ) : (
          <form onSubmit={handleRegister}>
            <div className="input_box">
              <input
                type="text"
                id="registerUser"
                className="input-field"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label htmlFor="registerUser" className="label">Username</label>
              <i className="bx bx-user icon"></i>
            </div>
            <div className="input_box">
              <input
                type="password"
                id="registerPass"
                className="input-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label htmlFor="registerPass" className="label">Password</label>
              <i className="bx bx-lock-alt icon"></i>
            </div>
            <div className="input_box">
              <input type="submit" className="input-submit" value="Register" />
            </div>
            <div className="register">
              <span>Already have an account? <a href="#" onClick={handleFormToggle}>Login</a></span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
