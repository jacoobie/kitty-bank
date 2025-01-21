import React from 'react';
import './Signup.css';
import user_icon from '../Assets/user.png';
import email_icon from '../Assets/love-card.png';
import password_icon from '../Assets/key.png';

const Signup = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="User Icon" />
          <input type="text" placeholder="Username" />
        </div>
      </div>

      <div className="inputs">
        <div className="input">
          <img src={email_icon} alt="Email Icon" />
          <input type="email" placeholder="Email" />
        </div>
      </div>

      <div className="inputs">
        <div className="input">
          <img src={password_icon} alt="Password Icon" />
          <input type="password" placeholder="Password" />
        </div>
      </div>

      <div className="forgot-password">
        Forgot your password? <span>Click here!!</span>
      </div>

      <div className="submit-container">
        <div className="submit">Sign Up</div>
        <div className="submit">Login</div>
      </div>
    </div>
  );
};

export default Signup;
