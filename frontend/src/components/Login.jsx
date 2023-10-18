import React from 'react';
import { Button, TextField, Container, Typography, Box } from '@mui/material';

const styles = {
  container: {
    background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  box: {
    backgroundColor: '#FFFFFF',
    padding: '2rem',
    borderRadius: '1rem',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
  },
  icon: {
    color: 'action',
  },
  headerText: {
    marginTop: '1rem',
    color: '#262626'
  },
  form: {
    marginTop: '1rem',
    width: '100%'
  },
  textField: {
    color: '#262626',
    borderColor: '#DBDBDB'
  },
  button: {
    marginTop: '1rem',
    marginBottom: '0.5rem',
    backgroundColor: '#E1306C',
    color: 'white'
  }
};

const Login = () => {
  return (
    <Container component="main" style={styles.container}>
      <Box maxWidth="xs" style={styles.box}>
        <Typography component="h1" variant="h5" style={styles.headerText}>
          ログイン
        </Typography>
        <Box component="form" noValidate style={styles.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="ユーザーネーム"
            name="username"
            autoFocus
            InputLabelProps={{
              style: styles.textField,
            }}
            InputProps={{
              style: styles.textField,
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="パスワード"
            type="password"
            id="password"
            InputLabelProps={{
              style: styles.textField,
            }}
            InputProps={{
              style: styles.textField,
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={styles.button}
          >
            ログイン
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
