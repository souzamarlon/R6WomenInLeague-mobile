import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    // history.push('/dashboard');
  } catch (err) {
    yield put(signFailure());

    const { error } = err.response.data;
    Alert.alert(`Authentication failure!, ${error}`);
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, uplay, region, password } = payload;

    const response = yield call(api.post, 'users', {
      name,
      email,
      uplay,
      region,
      password,
    });

    if (response) {
      Alert.alert('Your account has been created successfully!');

      // history.push('/');
    }
  } catch (err) {
    Alert.alert(`Failure, something is wrong!`);

    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
