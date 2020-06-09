import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Picker } from '@react-native-community/picker';
import Background from '~/components/Background';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';
import { signUpRequest } from '~/store/modules/auth/actions';

export default function SignIn({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [uplay, setUplay] = useState('');
  const [region, setRegion] = useState('South America');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const passwordRef = useRef();
  const emailRef = useRef();
  const uplayRef = useRef();

  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit() {
    dispatch(signUpRequest(name, email, uplay, region, password));
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
          <Picker
            selectedValue={region}
            style={{
              height: 50,
              color: '#FFF',
              // background: 'rgba(0, 0, 0, 0.1)',
              borderRadius: '4%',
              marginBottom: 10,
            }}
            onValueChange={(itemValue, itemIndex) => setRegion(itemValue)}
          >
            <Picker.Item label="Africa" value="Africa" />
            <Picker.Item label="Asia" value="Asia" />
            <Picker.Item label="Europe" value="Europe" />
            <Picker.Item label="North America" value="North America" />
            <Picker.Item label="Oceania" value="Oceania" />
            <Picker.Item label="South America" value="South America" />
          </Picker>
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
            SIGN UP
          </SubmitButton>
        </Form>
        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>Already have a login!</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
