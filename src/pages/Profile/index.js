import React, { useState, useRef } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Picker } from '@react-native-community/picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';
import { updateProfileRequest } from '~/store/modules/user/actions';

import {
  Container,
  Form,
  FormInput,
  RegionField,
  SubmitButton,
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
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [uplay, setUplay] = useState(profile.uplay);
  const [region, setRegion] = useState(profile.region);

  const dispatch = useDispatch();

  const passwordRef = useRef();
  const emailRef = useRef();
  const uplayRef = useRef();

  async function handleSubmit({ confirmPassword }) {
    try {
      const uplayExists = await api.get('/stats', {
        params: {
          username: uplay,
          platform: 'pc',
          type: 'generic',
        },
      });
      if (!uplayExists) {
        throw new Error('Whoops!');
      }

      const { competition } = selectField;
      const { ranked } = selectField;
      const { region } = selectField;
      const { play_style } =
        selectField.play_style.length > 0 ? selectField : profile;
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
      toast.error('Uplay nickname not found!');
    }
  }

  return (
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

        <SubmitButton onPress={handleSubmit}>SIGN UP</SubmitButton>
      </Form>
    </Container>
  );
}
