import React from 'react';
import { Box } from '@mui/material';
import LoginForm from '../components/LoginForm';
import { CssBaseline } from '@mui/material';
import { useNavigate } from "react-router-dom";

const styles = {
  background: {
    background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    padding: 0,
  },
  box: {
    backgroundColor: '#FFFFFF',
    padding: '2rem',
    borderRadius: '1rem',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 300
  },
  icon: {
    color: 'action',
  }
};

const LoginPage = () => {
  const navigate = useNavigate();
  const handleLogin = (username, password) => {
    navigate(`/home`);
  };
  return (
    <div style={styles.background}>
      <CssBaseline />
      <Box style={styles.box}>
        <LoginForm handleLogin={handleLogin}/>
      </Box>
    </div>
  );
}

export default LoginPage;
