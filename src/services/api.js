import axios from 'axios';
import { Alert } from 'react-native';
import { signOut } from '../store/modules/auth/actions';

const api = axios.create({
  // baseURL: 'http://7.212.4.61:3333',
  // baseURL: 'http://localhost:3333',
  baseURL: 'http://192.168.25.32:3333',
});

api.registerInterceptWithStore = (store) => {
  api.interceptors.response.use(
    (response) => response,

    async (err) => {
      if (err.response.status === 401) {
        const { error } = err.response.data;
        Alert.alert(`Authentication failure!, ${error}`);

        await store.dispatch(signOut());

        // history.go('/');
      }
      if (err.response.status === 400) {
        const { error } = err.response.data;
        Alert.alert(`Failure, something is wrong!, ${error}`);
      }
    }
  );
};

export default api;
