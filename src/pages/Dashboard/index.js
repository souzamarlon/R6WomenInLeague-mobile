import React from 'react';
import { View } from 'react-native';

import Card from '~/components/Card';

import api from '~/services/api';
import { Container, Content, CardList } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <Content>
        <CardList
          data={packages}
          refreshing={refreshList}
          onRefresh={loadPage}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item: data }) => (
            <PackageStatus
              data={data}
              onPress={() => {
                navigation.navigate('PackageDetails', { data });
              }}
            />
          )}
        />
        <Card />
      </Content>
    </Container>
  );
}
