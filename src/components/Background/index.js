import React from 'react';
import { ImageBackground } from 'react-native';
import SignInPic from '~/assets/games.jpg';

// import { Container } from './styles';

export default function Background() {
  return (
    <ImageBackground
      source={SignInPic}
      style={{ flex: 1, resizeMode: 'cover' }}
    />
  );
}
