import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export default function Register() {
  const Myswal = withReactContent(Swal);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };

  function login() {
    localStorage.removeItem('jwt');
    navigate('/login');
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "fname": inputs.fname,
      "lname": inputs.lname,
      "username": inputs.username,
      "password": inputs.password,
      "email": inputs.email,
      "avatar": inputs.avatar
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://www.melivecode.com/api/users/create", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.status === 'ok') {
            Myswal.fire({
                html: <i>{result.message}</i>,
                icon: 'success'
              }).then((value) => {
                navigate('/login');
              })
              ;
        } else {
          Myswal.fire({
            html: <i>{result.message}</i>,
            icon: 'error'
          });
        }
      })
      .catch(error => console.log('error', error));
  };

  return (
    <Container sx={{ p: 2 }} maxWidth="sm">
      <div>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container sx={{ pt: 2 }} spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="First Name"
                name="fname"
                value={inputs.fname || ''}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Last Name"
                name="lname"
                value={inputs.lname || ''}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Username"
                name="username"
                value={inputs.username || ''}
                onChange={handleChange}
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
                value={inputs.password || ''}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Email"
                name="email"
                value={inputs.email || ''}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Avatar"
                name="avatar"
                value={inputs.avatar || ''}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Register
              </Button>
            </Grid>
          </Grid>
        </form>
        <Grid container sx={{ pt: 2 }} spacing={2}>
          <Grid item xs={12}>
            <Link to="/login" onClick={login}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
              >
                Login
              </Button>
            </Link>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
