import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
export default function Login() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };
  function register() {
    localStorage.removeItem('jwt');
    
    window.location.href = './register';
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('https://www.melivecode.com/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then((res) => res.json())
      .then((result) => {
        alert(result['message']);
        if (result['status'] === 'ok') {
          // Store user data in local storage
          localStorage.setItem('jwt', result.accessToken);
          localStorage.setItem('user', JSON.stringify(result.user)); // Store user data
          window.location.href = './'; // Redirect to the main page
        }
      });
  };

  
  return (
    <Container sx={{ p: 2 }} maxWidth="sm">
      <div>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container sx={{ pt: 2 }} spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Username"
                name="username"
                value={credentials.username}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Password"
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleInputChange}
              />
            </Grid>
           
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
              Login
              </Button>
            </Grid>
          </Grid>
          <Grid container sx={{ pt: 2 }} spacing={2}>
          <Grid item xs={12}>
          <Link to="/register" onClick={register}>
           <Button 
             type="submit"
             fullWidth
             variant="contained"
              color="primary"
            >
            Register
           </Button>
        </Link>
      </Grid>
      </Grid>
        </form>
      </div>
    </Container>
  );
}
