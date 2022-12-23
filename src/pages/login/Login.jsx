import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { fetchAuth, selectIsAuth } from '../../redux/slices/auth';
import { useForm } from 'react-hook-form';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import styles from './Login.module.scss';

export const Login = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));

    if (!data.payload) {
      return alert('Authorization Failed');
    }

    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
<Container classes={{ root: styles.wrapper }}>
<Paper classes={{ root: styles.form }} >
        <Typography classes={{ root: styles.title }} variant="h5">
          Enter to Account
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            className={styles.field}
            label="E-Mail"
            error={Boolean(errors.email?.message)}
            helperText={errors.email?.message}
            type="email"
            {...register('email', { required: 'Enter Email' })}
            fullWidth
          />
          <TextField
            className={styles.field}
            label="Password"
            error={Boolean(errors.password?.message)}
            helperText={errors.password?.message}
            {...register('password', { required: 'Enter Password' })}
            fullWidth
          />
          <Button
            disabled={!isValid}
            type="submit"
            size="large"
            variant="contained"
            fullWidth
          >
            LogIn
          </Button>
        </form>
      </Paper>
</Container>
  );
};
