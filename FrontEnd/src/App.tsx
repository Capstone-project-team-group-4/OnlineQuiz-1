import React, { ChangeEvent, MouseEvent, ReactElement, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { User } from './model/User';
import { UserAPI } from './common/service/UserAPI';

function App (): ReactElement {
  let [user, setUser] = useState<User> (new User ());
  let updatedUser: User | undefined;
  let inputField: HTMLInputElement | HTMLTextAreaElement | undefined;
  let userAPI: UserAPI | undefined;

  function updateUser (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): User {
    inputField = event.target;
    updatedUser = user;
    updatedUser[inputField.name as keyof User] = inputField.value;
    return updatedUser;
  } 
  
  function signUp (event: MouseEvent<HTMLButtonElement | MouseEvent>){
    userAPI = new UserAPI ();
    console.log (user);
    event.preventDefault ();
    userAPI.registerUser (user);
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="userID"
                name="userID"
                variant="outlined"
                required
                fullWidth
                id="userID"
                label="User ID"
                // value = {user.userID}
                autoFocus
                onChange = {(event) => {setUser (updateUser (event));}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="userName"
                label="User Name"
                type="text"
                id="userName"
                autoComplete="User-name"
                onChange = {(event) => {setUser (updateUser (event));}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="Email-address"
                onChange = {(event) => {setUser (updateUser (event));}}
              />
            </Grid>
            <Grid item xs={12}>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick = {(event) => {signUp (event);}}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default App;
