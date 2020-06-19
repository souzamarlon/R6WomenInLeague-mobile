import React, { useState, useRef } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Picker } from '@react-native-community/picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';

import Background from '~/components/Background';

import { signOut } from '~/store/modules/auth/actions';
import { updateProfileRequest } from '~/store/modules/user/actions';

import {
  Container,
  Form,
  FormInput,
  PickerFields,
  PickerTexts,
  SubmitButton,
  LogoutButton,
} from './styles';

export default function Profile() {
  const profile = useSelector((state) => state.user.profile);

  const [selectField, setSelectField] = useState({
    competition: profile.competition,
    ranked: profile.ranked,
    region: profile.region,
    play_style: profile.play_style,
    times: profile.times,
  });
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [uplay, setUplay] = useState(profile.uplay);
  const [discord_user, setDiscord_user] = useState(profile.discord_user);
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();

  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const oldPasswordRef = useRef();
  const emailRef = useRef();
  const uplayRef = useRef();
  const discord_userRef = useRef();

  async function handleSubmit() {
    try {
      const { competition } = selectField;
      const { ranked } = selectField;
      const { play_style } = selectField;
      const { region } = selectField;
      const { times } = selectField;

      // TODO - Check if it does not have another account using the same Email or Uplay Nickname.
      const data = {
        name,
        email,
        uplay,
        competition,
        ranked,
        region,
        play_style,
        times,
        oldPassword,
        password,
        confirmPassword,
      };

      dispatch(updateProfileRequest(data));
    } catch (err) {
      Alert.alert('Failure, it is not possible to update your profile!');
    }
  }

  function handleLogout() {
    dispatch(signOut());
  }

  console.tron.log(selectField);
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
            ref={uplayRef}
            returnKeyType="next"
            onSubmitEditing={() => discord_userRef.current.focus()}
            value={uplay}
            onChangeText={setUplay}
          />

          <FormInput
            icon="videogame-asset"
            autoCorrect={false}
            autoCapitalize="none"
            ref={discord_userRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={discord_user}
            onChangeText={setDiscord_user}
          />
          <PickerFields>
            <PickerTexts>Play Style:</PickerTexts>
            <Picker
              selectedValue={selectField.play_style}
              style={{
                height: 50,
                width: 140,
                color: '#ddd',
                marginLeft: 8,
                fontSize: 11,
              }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectField({
                  ...selectField,
                  play_style: itemValue,
                })
              }
            >
              <Picker.Item label="Support" value="Support" />
              <Picker.Item label="Entry fragger" value="Entry fragger" />
              <Picker.Item label="Versatile" value="Versatile" />
            </Picker>
          </PickerFields>

          <PickerFields>
            <PickerTexts>Championship:</PickerTexts>
            <Picker
              selectedValue={selectField.competition}
              style={{
                height: 50,
                width: 115,
                color: '#ddd',
                marginLeft: 8,
              }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectField({
                  ...selectField,
                  competition: itemValue,
                })
              }
            >
              <Picker.Item label="Yes" value />
              <Picker.Item label="No" value={false} />
            </Picker>
          </PickerFields>

          <PickerFields>
            <PickerTexts>Ranked:</PickerTexts>
            <Picker
              selectedValue={selectField.ranked}
              style={{
                height: 50,
                width: 150,
                color: '#ddd',
                marginLeft: 8,
              }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectField({
                  ...selectField,
                  ranked: itemValue,
                })
              }
            >
              <Picker.Item label="Yes" value />
              <Picker.Item label="No" value={false} />
            </Picker>
          </PickerFields>
          <PickerFields>
            <Icon
              name="access-time"
              size={20}
              color="rgba(255, 255, 255, 0.6)"
            />

            <Picker
              selectedValue={selectField.times}
              style={{
                height: 50,
                width: 165,
                color: '#ddd',
                marginLeft: 8,
              }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectField({
                  ...selectField,
                  times: itemValue,
                })
              }
            >
              <Picker.Item label="Morning" value="Morning" />
              <Picker.Item label="Afternoon" value="Afternoon" />
              <Picker.Item label="Night" value="Night" />
              <Picker.Item label="All Day" value="All Day" />
            </Picker>
          </PickerFields>

          <PickerFields>
            <Icon name="place" size={20} color="rgba(255, 255, 255, 0.6)" />
            <Picker
              selectedValue={selectField.region}
              style={{
                height: 50,
                width: 180,
                color: '#ddd',
                marginLeft: 8,
              }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectField({
                  ...selectField,
                  region: itemValue,
                })
              }
            >
              <Picker.Item label="Africa" value="Africa" />
              <Picker.Item label="Asia" value="Asia" />
              <Picker.Item label="Europe" value="Europe" />
              <Picker.Item label="North America" value="North America" />
              <Picker.Item label="Oceania" value="Oceania" />
              <Picker.Item label="South America" value="South America" />
            </Picker>
          </PickerFields>

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Your current password"
            ref={oldPasswordRef}
            returnKeyType="send"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={oldPassword}
            onChangeText={setOldPassword}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="New password"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
            value={password}
            onChangeText={setPassword}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Confirm password"
            ref={confirmPasswordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <SubmitButton onPress={handleSubmit}>UPDATE</SubmitButton>
          <LogoutButton onPress={handleLogout}>Sair</LogoutButton>
        </Form>
      </Container>
    </Background>
  );
}
