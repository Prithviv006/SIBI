// src/components/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css';
import styled from 'styled-components';

// ✅ Move styled-components OUTSIDE the functional component

const StyledWrapper = styled.div`
  button {
  width: 80%;
    font: inherit;
    background-color: #2a2a2a;
    border: 0;
    color: #e0e0e0;
    border-radius: 0.5em;
    font-size: 1.35rem;
    padding: 0.375em 1em;
    font-weight: 600;
    text-shadow: 0 0.0625em 0 #000;
    box-shadow:
      inset 0 0.0625em 0 0 #3a3a3a,0 0.0625em 0 0 #252525,0 0.125em 0 0 #202020,0 0.25em 0 0 #1c1c1c,0 0.3125em 0 0 #181818,0 0.375em 0 0 #141414,0 0.425em 0 0 #101010,0 0.425em 0.5em 0 #0a0a0a;
    transition: 0.15s ease;
    cursor: pointer;
  }

  button:active {
    translate: 0 0.225em;
    box-shadow:
      inset 0 0.03em 0 0 #3a3a3a,0 0.03em 0 0 #252525,0 0.0625em 0 0 #202020,0 0.125em 0 0 #1c1c1c,0 0.125em 0 0 #181818,0 0.2em 0 0 #141414,0 0.225em 0 0 #101010,0 0.225em 0.375em 0 #0a0a0a;
  }
`;

const StyledCard = styled.div`
  .e-card {
    margin: 100px auto;
    background: linear-gradient(135deg, #cdc8d3, #bbc6da);
    box-shadow: 0px 8px 28px -9px rgba(0, 0, 0, 0.45);
    position: relative;
    width: 640px;
    height: 660px;
    border-radius: 16px;
    overflow: hidden;
  }

  .wave {
    position: absolute;
     width: 740px;
    height: 600px;
    opacity: 0.6;
    left: 0;
    top: 0;
    margin-left: -50%;
    margin-top: -70%;
    background: linear-gradient(744deg, #af40ff, #5b42f3 60%, #00ddeb);
    border-radius: 40%;
    animation: wave 55s infinite linear;
  }
     .form-group {
    margin-bottom: 1.5rem;
  }
    .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    color: #14161a;
    font-weight: 500;
  }
 form{
   margin-top:60px;
  }
  .form-group input {
    width: 80%;
    padding: 0.8rem;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
  }
  
  .form-group input:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
  .wave:nth-child(2),
  .wave:nth-child(3) {
    top: 210px;
  }

  .wave:nth-child(2) {
    animation-duration: 50s;
  }

  .wave:nth-child(3) {
    animation-duration: 45s;
  }

  .playing .wave {
    animation: wave 3000ms infinite linear;
  }

  .playing .wave:nth-child(2) {
    animation-duration: 4000ms;
  }

  .playing .wave:nth-child(3) {
    animation-duration: 5000ms;
  }


  .infotop {
    text-align: center;
    font-size: 20px;
    position: absolute;
    top: 5.6em;
    left: 0;
    right: 0;
    color: rgb(255, 255, 255);
    font-weight: 600;
  }
  h2 {
  margin-top:-50px;
    text-align: center;
    margin-bottom: 2rem;
    color: black;
    font-size:40px;
  }

  
  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const form = new URLSearchParams();
      form.append('email', formData.email);
      form.append('password', formData.password);

      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: form,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || 'Login failed');
      }

      localStorage.setItem('username', data.username);
      navigate('/Dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <StyledCard>
        <div className="e-card playing">
          <div className="image" />
          <div className="wave" />
          <div className="wave" />
          <div className="wave" />
          <div className="infotop">
            <h2>Welcome Back to SIBI!</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
              </div>

              {error && <div className="error-message">⚠️ {error}</div>}

              <StyledWrapper>
                <button type="submit" disabled={isLoading}>
                  {isLoading ? 'Logging in...' : 'Login'}
                </button>
              </StyledWrapper>
            </form>

            <p className="auth-switch">
              Don't have an account? <a href="/signup">Sign up here</a>
            </p>

            <br />
            <div className="name" />
          </div>
        </div>
      </StyledCard>
    </div>
  );
};

export default Login;
