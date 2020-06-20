import React, { useState, useRef } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { useDispatch, useSelector } from 'react-redux';
import { Picker } from '@react-native-community/picker';
import { ImageBackground } from 'react-native';
import SignInPic from '~/assets/games.jpg';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
  RegionField,
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

  async function handleSubmit() {
    dispatch(signUpRequest(name, email, uplay, region, password));
  }

  return (
    <ImageBackground
      source={SignInPic}
      style={{ flex: 1, resizeMode: 'cover' }}
    >
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
            ref={emailRef}
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="exemplo@email.com"
            returnKeyType="next"
            onSubmitEditing={() => uplayRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon="videogame-asset"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Uplay NickName"
            ref={uplayRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={uplay}
            onChangeText={setUplay}
          />

          <RegionField>
            <Icon name="place" size={20} color="rgba(255, 255, 255, 0.6)" />
            <Picker
              selectedValue={region}
              style={{
                height: 50,
                width: 170,
                color: '#ddd',
                marginLeft: 8,
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
          </RegionField>

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
          <SignLink onPress={() => navigation.navigate('SignIn')}>
            <SignLinkText>Already have a login!</SignLinkText>
          </SignLink>
        </Form>
      </Container>
    </ImageBackground>
  );
}
