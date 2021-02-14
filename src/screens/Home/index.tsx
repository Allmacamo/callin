import React, { FC } from 'react';
import { ScrollView } from 'react-native';
import { CallCard, Flex, H2, H3, Icons, Text } from '../../allmacamo';
import { Container } from '../../allmacamo/layout';
import ActionButton from 'react-native-action-button';
import { Colors } from '../../allmacamo/Colors';
import { CallCardProps } from '../../allmacamo/components/CallCard';
import RNCallKeep from 'react-native-callkeep';

const HomeScreen: FC = () => {
  const upcomingCalls: CallCardProps[] = [
    {
      type: 'VIDEO',
      caller: 'Jabulile',
      duration: '5:13',
      date: 'Tomorrow'
    },
    {
      type: 'GROUP',
      caller: 'The Macamos',
      duration: '5:13',
      date: 'Wednesday'
    }
  ];

  const CallQuick = () => (
    <ActionButton buttonColor={Colors.primary}>
      <ActionButton.Item
        buttonColor="#9b59b6"
        title="Voice Call"
        onPress={() => {}}>
        <Icons name="call" color="white" iFamily="MaterialIcons" />
      </ActionButton.Item>
      <ActionButton.Item
        buttonColor="#3498db"
        title="Video Call"
        onPress={() => {}}>
        <Icons name="videocam" color="white" iFamily="MaterialIcons" />
      </ActionButton.Item>
      <ActionButton.Item
        buttonColor="#1abc9c"
        title="Group Call"
        onPress={() => {}}>
        <Icons name="groups" color="white" iFamily="MaterialIcons" />
      </ActionButton.Item>
      <ActionButton.Item
        buttonColor="#1cbd4d"
        title="Schedule a Call"
        onPress={() => {}}>
        <Icons name="calendar" color="white" />
      </ActionButton.Item>
    </ActionButton>
  );

  return (
    <Container bg="#7B65D6">
      <Flex
        backgroundColor="white"
        height="93%"
        borderTopLeftRadius={30}
        borderTopRightRadius={30}>
        <Flex
          alignSelf="center"
          flexDirection="row"
          alignItems="flex-end"
          marginBottom={10}>
          <H2 color="#696969">60 minutes</H2>
          <Text> Credit</Text>
        </Flex>
        <Flex marginHorizontal={10}>
          <H3>Upcoming Calls</H3>
        </Flex>
        <ScrollView showsVerticalScrollIndicator={false}>
          {upcomingCalls.map((call, i: number) => (
            <CallCard key={i} {...call} />
          ))}
        </ScrollView>
        <CallQuick />
      </Flex>
    </Container>
  );
};

export default HomeScreen;
