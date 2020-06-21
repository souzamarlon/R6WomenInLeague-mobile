import React, { useState } from 'react';

import { Picker } from '@react-native-community/picker';

import {
  Container,
  Title,
  Form,
  OptionsTitle,
  SelectLayout,
  SubmitButton,
  ButtonText,
} from './styles';

export default function SearchTool({ onChange }) {
  const [selectOptions, setSelectOptions] = useState({
    play_style: 'Versatile',
    competition: 'false',
    ranked: 'false',
    times: 'All Day',
  });

  async function handleSubmit() {
    const data = {
      play_style: selectOptions.play_style,
      ranked: selectOptions.ranked,
      competition: selectOptions.competition,
      times: selectOptions.times,
    };

    onChange(data);
  }

  return (
    <Container>
      <Title>Which type of player are you looking for?</Title>

      <Form>
        <OptionsTitle>PLAY STYLE</OptionsTitle>
        <SelectLayout>
          <Picker
            selectedValue={selectOptions.play_style}
            style={{
              height: 50,
              width: 170,
              color: '#ddd',
              marginLeft: 8,
              fontSize: 11,
            }}
            onValueChange={(itemValue) =>
              setSelectOptions({
                ...selectOptions,
                play_style: itemValue,
              })
            }
          >
            <Picker.Item label="Support" value="Support" />
            <Picker.Item label="Entry fragger" value="Entry fragger" />
            <Picker.Item label="Versatile" value="Versatile" />
          </Picker>
        </SelectLayout>

        <OptionsTitle>Player available to play championship?</OptionsTitle>
        <SelectLayout>
          <Picker
            selectedValue={selectOptions.competition}
            style={{
              height: 50,
              width: 170,
              color: '#ddd',
              marginLeft: 8,
            }}
            onValueChange={(itemValue) =>
              setSelectOptions({
                ...selectOptions,
                competition: itemValue,
              })
            }
          >
            <Picker.Item label="Yes" value="true" />
            <Picker.Item label="No" value="false" />
          </Picker>
        </SelectLayout>

        <OptionsTitle>Player available to play ranked?</OptionsTitle>
        <SelectLayout>
          <Picker
            selectedValue={selectOptions.ranked}
            style={{
              height: 50,
              width: 170,
              color: '#ddd',
              marginLeft: 8,
            }}
            onValueChange={(itemValue) =>
              setSelectOptions({
                ...selectOptions,
                ranked: itemValue,
              })
            }
          >
            <Picker.Item label="Yes" value="true" />
            <Picker.Item label="No" value="false" />
          </Picker>
        </SelectLayout>

        <OptionsTitle>
          Which part of day does the player need to be available?
        </OptionsTitle>
        <SelectLayout>
          <Picker
            selectedValue={selectOptions.times}
            style={{
              height: 50,
              width: 170,
              color: '#ddd',
              marginLeft: 8,
            }}
            onValueChange={(itemValue) =>
              setSelectOptions({
                ...selectOptions,
                times: itemValue,
              })
            }
          >
            <Picker.Item label="Morning" value="Morning" />
            <Picker.Item label="Afternoon" value="Afternoon" />
            <Picker.Item label="Night" value="Night" />
            <Picker.Item label="All Day" value="All Day" />
          </Picker>
        </SelectLayout>

        <SubmitButton onPress={handleSubmit}>
          <ButtonText>SEARCH</ButtonText>
        </SubmitButton>
      </Form>
    </Container>
  );
}
