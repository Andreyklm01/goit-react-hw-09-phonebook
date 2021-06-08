import { createAction } from '@reduxjs/toolkit';

export const registerRequest = createAction('auth/REGISTER_REQUEST');
export const registerSuccess = createAction('auth/REGISTER_SUCCESS');
export const registerError = createAction('auth/REGISTER_ERROR');

export const loginRequest = createAction('auth/LOGIN_REQUEST');
export const loginSuccess = createAction('auth/LOGIN_SUCCESS');
export const loginError = createAction('auth/LOGIN_ERROR');

export const logoutRequest = createAction('auth/LOGOUT_REQUEST');
export const logoutSuccess = createAction('auth/LOGOUT_SUCCESS');
export const logoutError = createAction('auth/LOGOUT_ERROR');

export const getCurrentUserRequest = createAction('auth/GET_USER_REQUEST');
export const getCurrentUserSuccess = createAction('auth/GET_USER_SUCCESS');
export const getCurrentUserError = createAction('auth/GET_USER_ERROR');
