import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ImageBackground } from 'react-native';
import PropTypes from 'prop-types';

import SignInPic from '~/assets/games.jpg';

import {
  Container,
  Content,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
  Title,
  WelcomeText,
  AppTitle,
} from './styles';
import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const passwordRef = useRef();

  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

  return (
    <ImageBackground
      source={SignInPic}
      style={{ flex: 1, resizeMode: 'cover' }}
    >
      <Container>
        <AppTitle>R6 WOMEN'S ALLIANCE</AppTitle>
        <Content>
          <Title>Welcome,</Title>
          <WelcomeText>
            In order to fight against discrimination, our goal is to help women
            in R6 to find a safe space during the game experience and connect
            with other women around the globe.
          </WelcomeText>
          <Form>
            <FormInput
              icon="mail-outline"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="exemplo@email.com"
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current.focus()}
              value={email}
              onChangeText={setEmail}
            />

            <FormInput
              icon="lock-outline"
              secureTextEntry
              placeholder="**********"
              returnKeyType="send"
              ref={passwordRef}
              onSubmitEditing={handleSubmit}
              value={password}
              onChangeText={setPassword}
            />

            <SubmitButton loading={loading} onPress={handleSubmit}>
              LOGIN
            </SubmitButton>
          </Form>
          <SignLink onPress={() => navigation.navigate('SignUp')}>
            <SignLinkText>SIGN UP</SignLinkText>
          </SignLink>
        </Content>
      </Container>
    </ImageBackground>
  );
}

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
