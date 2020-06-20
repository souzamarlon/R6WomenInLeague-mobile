import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '~/services/api';
import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const {
      name,
      email,
      uplay,
      competition,
      ranked,
      region,
      play_style,
      times,
      ...rest
    } = payload.data;

    const uplayExists = yield call(api.get, '/stats', {
      params: {
        username: uplay,
        platform: 'pc',
        type: 'generic',
      },
    });

    if (!uplayExists) {
      Alert.alert('Uplay nickname not found!');
    }

    const profile = {
      name,
      email,
      uplay,
      competition,
      ranked,
      region,
      play_style,
      times,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, 'users', profile);

    Alert.alert('Your profile was successfully updated!');
    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    Alert.alert('Error', 'Error to update your profile!');
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
