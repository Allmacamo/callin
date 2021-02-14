import React, { FC } from 'react';
import { ScrollView } from 'react-native';
import { CallCard, Card, Flex, H2, Text } from '../../allmacamo';
import { CallCardProps } from '../../allmacamo/components/CallCard';
import { Container } from '../../allmacamo/layout';

const RecentScreen: FC = () => {
  const calls: CallCardProps[] = [
    {
      type: 'VIDEO',
      caller: 'Jabulile',
      duration: '5:13',
      date: 'Today 3:20pm'
    },
    {
      type: 'VOICE',
      caller: 'Nana',
      duration: '1:25',
      date: 'Today 11am'
    },
    {
      type: 'MISSED',
      caller: 'Sipho',
      duration: '0:00',
      date: 'Today 10am'
    },
    {
      type: 'GROUP',
      caller: 'Gaming Plans',
      duration: '34:41',
      date: 'Today 9am'
    }
  ];

  return (
    <Container bg="#7B65D6">
      <Flex
        backgroundColor="white"
        height="93%"
        borderTopLeftRadius={30}
        borderTopRightRadius={30}>
        <Flex alignSelf="center" flexDirection="row" alignItems="flex-end">
          <H2 color="#696969">Recent calls</H2>
        </Flex>
        <ScrollView showsVerticalScrollIndicator={false}>
          {calls.map((call, i: number) => (
            <CallCard key={i} {...call} />
          ))}
        </ScrollView>
      </Flex>
    </Container>
  );
};

export default RecentScreen;
