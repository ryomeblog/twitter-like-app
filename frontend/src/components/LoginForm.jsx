import React, { useState } from 'react';
import { Button, TextField, Typography, Box } from '@mui/material';

const styles = {
  headerText: {
    marginTop: '1rem',
    color: '#262626'
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

const LoginForm = ({handleLogin}) => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const onClickLogin = () => {
        handleLogin(userId, password);
    };
  return (
    <Box>
        <Typography component="h1" variant="h5" style={styles.headerText}>
          Twitter Like App
        </Typography>
        <Box component="form" noValidate>
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
            onChange={setUserId}
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
            onChange={setPassword}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={styles.button}
            onClick={onClickLogin}
          >
            ログイン
          </Button>
        </Box>
    </Box>
  );
}

export default LoginForm;
