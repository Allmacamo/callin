import React, { FC } from 'react';
import { Text } from '../..';
import { Colors } from '../../Colors';
import H3 from '../../typography/H3';
import Card from '../Card';
import Flex from '../Flex';
import Icons from '../Icons';

export type CallCardProps = {
  type: 'VOICE' | 'VIDEO' | 'GROUP' | 'MISSED';
  caller: string;
  duration: string;
  date: string;
};
const CallCard: FC<CallCardProps> = ({ type, caller, duration, date }) => {
  const CallIcon = () => {
    if (type === 'VIDEO') {
      return <Icons name="videocam" color="white" iFamily="MaterialIcons" />;
    }
    if (type === 'GROUP') {
      return <Icons name="groups" color="white" iFamily="MaterialIcons" />;
    }
    if (type === 'MISSED') {
      return (
        <Icons name="phone-missed" color="white" iFamily="MaterialIcons" />
      );
    }
    return <Icons name="call" color="white" iFamily="MaterialIcons" />;
  };

  return (
    <Card height={60} padding={10} flexDirection="row">
      <Flex
        backgroundColor={Colors.primary}
        borderRadius={10}
        height={40}
        width={40}
        alignItems="center"
        justifyContent="center"
        marginRight={10}>
        <CallIcon />
      </Flex>
      <Flex width="80%">
        <H3>{caller}</H3>
        <Flex flexDirection="row" justifyContent="space-between">
          <Text>Duration {duration}</Text>
          <Text align="right">{date}</Text>
        </Flex>
      </Flex>
    </Card>
  );
};
export default CallCard;
