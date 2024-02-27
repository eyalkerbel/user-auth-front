import React, {useState} from 'react';
import {useMutation} from 'react-query';
import {createUser} from "../api";
import {Button, Grid, Paper, TextField, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {validateEmail, validateName, validatePassword} from "../utils/validationForm";
import {getMessageByStatus} from "../utils/statusCode";
import {User} from "../types";


function UserForm(): JSX.Element {
  const [user, setUser] = useState<User>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<User & { serverError: string }>({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    serverError: '',
  });
  const navigate = useNavigate();

  const mutation = useMutation(createUser, {
    onSuccess: () => {
      navigate('/users');
    },
    onError: (error,) => {
      // @ts-ignore
      const serverError = getMessageByStatus(error.response.status)
      setErrors(prevErrors => ({...prevErrors, serverError: serverError}));
    },
  });

  const validateForm = () => {
    let isValid;
    const newErrors = {
      email: validateEmail(user.email),
      firstName: validateName(user.firstName),
      lastName: validateName(user.lastName),
      password: validatePassword(user.password),
      serverError: '',
    };

    setErrors(newErrors);

    isValid = Object.values(newErrors).every(error => error === '');

    return isValid;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      mutation.mutate(user);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setUser({...user, [name]: value});
    setErrors(prevErrors => ({...prevErrors, [name]: ''}));
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={6}>
        <Paper style={{padding: 16, marginTop: 16}}>
          <Typography variant="h6">Add New User</Typography>
          <TextField
            label="First Name"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
            error={!!errors.firstName}
            helperText={errors.firstName}
            InputLabelProps={{
              style: {color: errors.firstName ? 'red' : 'inherit'}, // Conditional label color
            }}
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
            error={!!errors.lastName}
            helperText={errors.lastName}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={user.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={user.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
            error={!!errors.password}
            helperText={errors.password}
          />
          <Button onClick={(e: any) => handleSubmit(e)} type="submit" variant="contained" color="primary"
                  style={{marginTop: 16}}>
            Save User
          </Button>
          {errors.serverError && (
            <Typography color="error" style={{marginBottom: 16}}>
              {errors.serverError}
            </Typography>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
}

export default UserForm;
