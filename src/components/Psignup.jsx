import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const theme = createTheme({
  palette: {
    primary: {
      main: '#77d5cb',
    },
  },
});

const CustomContainer = ({ children }) => (
  <Container maxWidth="m" style={{ marginTop: '65px' }}>
    {children}
  </Container>
);
const Psignup = () => {
  const [inputs, setInputs] = useState({
    Name: '',
    Address: '',
    Phone: '',
    Email: '',
    Age: '',
    Gender: '',
    Username: '',
    Password: '',
  });

  const navigate = useNavigate();

  const InputHandler = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const SaveData = () => {
    axios.post("http://localhost:5007/api/pnew", inputs)
      .then((response) => {
        alert("Record Saved");
        navigate('/Patient login');
      })
      .catch((err) => console.log(err));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <center>
      <CustomContainer component={Paper} >
      <Paper elevation={3} style={{ padding: '20px', width: '500px' }}>
        <Typography variant="h4">Let's Get Started</Typography>
        <Typography variant="subtitle1">It's Okay, Now Create User's Account.</Typography>
        <br>
        
        </br>
        
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="Name"
              label="Name"
              variant="outlined"
              fullWidth
              onChange={InputHandler}
              value={inputs.Name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="Address"
              label="Address"
              variant="outlined"
              fullWidth
              onChange={InputHandler}
              value={inputs.Address}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="Phone"
              label="Phone"
              variant="outlined"
              fullWidth
              onChange={InputHandler}
              value={inputs.Phone}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="Email"
              label="Email"
              variant="outlined"
              fullWidth
              onChange={InputHandler}
              value={inputs.Email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="Age"
              label="Age"
              variant="outlined"
              fullWidth
              onChange={InputHandler}
              value={inputs.Age}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="Gender"
              label="Gender"
              variant="outlined"
              fullWidth
              onChange={InputHandler}
              value={inputs.Gender}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="Username"
              label="Username"
              variant="outlined"
              fullWidth
              onChange={InputHandler}
              value={inputs.Username}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="Password"
              label="Password"
              variant="outlined"
              fullWidth
              type="password"
              onChange={InputHandler}
              value={inputs.Password}
            />
          </Grid>
        </Grid>

        <Button  variant="contained"
              color="primary"
              fullWidth
                            style={{ marginTop: '20px' }} onClick={SaveData}>
          Sign Up
        </Button>
        </Paper>
      </CustomContainer>
      </center>
    </ThemeProvider>
  );
};

export default Psignup;