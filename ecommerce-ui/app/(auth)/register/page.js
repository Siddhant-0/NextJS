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
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Register = () => {
  const router = useRouter();
  return (
    <Box>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={loginUserValidationSchema}
        onSubmit={async (values) => {
          // console.log(values);
          try {
            const response = await axios.post(
              'http://localhost:8080/user/login',
              values
            );
            // console.log(response);
            localStorage.setItem('token', response?.data?.accessToken);

            router.push('/');
          } catch (error) {
            console.log('error ayo');
          }
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
                User Registration
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
                Signup
              </Button>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default Register;
