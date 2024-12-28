'use client';
import React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { loginUserValidationSchema } from '@/validation/login.user.validation.schema';

const Login = () => {
  return (
    <Box>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={loginUserValidationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => {
          return (
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col justify-between items-center min-w-[350px] shadow-2xl shadow-gray-500 min-h-[350px] px-6 py-8 rounded-2xl"
            >
              <p className="text-3xl font-bold">
                {/* className="text-red-600" */}
                Sign In
              </p>
              {/* <FormControl> is equivalent to <div> */}
              {/* Email */}
              <FormControl fullWidth>
                <TextField
                  label="Email"
                  {...formik.getFieldProps('email')}
                ></TextField>
                {formik.touched.email && formik.errors.email ? (
                  <FormHelperText error>{formik.errors.email}</FormHelperText>
                ) : //  <p className="text-red-600"></p> can be written to replace <FormHelperText></FormHelperText>
                null}
              </FormControl>

              {/* Password */}
              <FormControl fullWidth>
                <TextField
                  label="Password"
                  {...formik.getFieldProps('password')}
                ></TextField>
                {formik.touched.password && formik.errors.password ? (
                  <FormHelperText error>
                    {formik.errors.password}
                  </FormHelperText>
                ) : //  <p className="text-red-600"></p> can be written to replace <FormHelperText></FormHelperText>
                null}
              </FormControl>

              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="secondary"
              >
                Login
              </Button>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default Login;
