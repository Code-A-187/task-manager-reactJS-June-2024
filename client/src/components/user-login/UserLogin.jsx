import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../../api/auth-api'
import { useForm } from '../../hooks/useForm';
import { useAuthContext } from '../../contexts/AuthContext'
import { validateLogin } from '../../api/valid-api';
import { useErrorModal } from '../../hooks/useErrorModal';

import './UserLogin.error.css';


const initialValues = { email: '', password: ''}

export default function UserLogin() {
    const navigate = useNavigate();
    const { changeAuthState } = useAuthContext()
    const { showErrorModal, ErrorModalComponent } = useErrorModal();

    const loginHandler = async ({ email, password }) => {
    try {
        const { password: _, ...authData } = await login(email, password);

        changeAuthState(authData)

        navigate('/')
    } catch (err) {
      // Log the full error object for debugging
      console.error('Login failed', err);

      // Default error message
      let errorMessage = 'An unexpected error occurred. Please try again later.';

      // Check if error is an instance of Error
      if (err instanceof Error) {
          errorMessage = err.message;
      }

      // Display the error message in the modal
      showErrorModal(errorMessage);
    }
  };

const {values, changeHandler, submitHandler, errors} = useForm (initialValues, loginHandler, validateLogin)


    

  return (
      <>
        <div className="font-[sans-serif] bg-white flex items-center justify-center md:h-screen p-4">
        <div className="shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)] max-w-6xl max-md:max-w-lg rounded-md p-6">
        <div className="grid md:grid-cols-2 items-center gap-8">
          <div className="max-md:order-1 lg:min-w-[450px]">
          <Link to="/login" className="inline-block">
          <img 
              src="images/main_logo.png" 
              alt="Task Manager" 
              className='w-40' 
          />
        </Link>
            <img src="https://readymadeui.com/signin-image.webp" className="lg:w-11/12 w-full object-cover" alt="login-image" />
          </div>
          <form className="md:max-w-md w-full mx-auto" onSubmit={submitHandler}>
            <div className="mb-12">
              <h3 className="text-4xl font-extrabold text-blue-600">Sign in</h3>
            </div>

            <div>
              <div className="relative flex items-center">
                <input 
                  className="w-full text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                  autoComplete="email"
                  id="email"
                  name="email" 
                  type="text"
                  value={values.email}
                  onChange={changeHandler}
                  required 
                  placeholder="Enter email" 
                />
                {errors.email && (
                    <p className="error">
                        <span className="error-icon">⚠️</span> {errors.email}
                    </p>
                )}
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 682.667 682.667">
                  <defs>
                    <clipPath id="a" clipPathUnits="userSpaceOnUse">
                      <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                    </clipPath>
                  </defs>
                  <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                    <path fill="none" strokeMiterlimit="10" strokeWidth="40" d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" data-original="#000000"></path>
                    <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" data-original="#000000"></path>
                  </g>
                </svg>
              </div>
            </div>

            <div className="mt-8">
              <div className="relative flex items-center">
                <input
                    className="w-full text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                    autoComplete="current-password"
                    name="password"
                    id="password"
                    type="password"
                    value={values.password}
                    onChange={changeHandler}
                    required  
                    placeholder="Enter password" />
                  {errors.password && (
                    <p className="error">
                        <span className="error-icon">⚠️</span> {errors.password}
                    </p>
                  )}
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2 cursor-pointer" viewBox="0 0 128 128">
                  <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                </svg>
              </div>
            </div>

            <div className="mt-12">
              <button type="submit" value="Login" className="w-full shadow-xl py-2.5 px-5 text-sm font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                Sign in
              </button>
              <p className="text-gray-800 text-sm text-center mt-6">Don't have an account?<Link to="/register" className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">Register here</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
    <ErrorModalComponent />
  </>
    
    );  
}