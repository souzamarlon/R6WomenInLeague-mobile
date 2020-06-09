import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Background from '~/components/Background';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';
import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [uplay, setUplay] = useState('');
  const [region, setRegion] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const passwordRef = useRef();
  const emailRef = useRef();
  const uplayRef = useRef();

  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

  return (
    <Background>
      <Container>
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Eliza Ash Cohen"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={name}
            onChangeText={setName}
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="exemplo@email.com"
            returnKeyType="next"
            onSubmitEditing={() => uplayRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Uplay NickName"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={uplay}
            onChangeText={setUplay}
          />
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Your Region"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={region}
            onChangeText={setRegion}
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
      </Container>
    </Background>
  );
}
