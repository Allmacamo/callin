import React, { FC, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Logo, Button, Flex } from '../../allmacamo';
import { useAsyncStorage } from '@react-native-community/async-storage';
import { Colors } from '../../allmacamo/Colors';
import { SafeAreaView, StatusBar } from 'react-native';

const LaunchScreen: FC = () => {
  const { navigate, reset } = useNavigation();

  const [loading, setLoading] = useState(true);

  const { getItem } = useAsyncStorage('onboarding');

  useEffect(() => {
    // Check if user has completed onboarding
    getItem().then((res) => {
      // If user has completed onboarding redirect to home screen
      if (res) {
        setLoading(false);
        reset({ index: 0, routes: [{ name: 'Home' }] });
      } else {
        // If not, maybe new user, let them go through onboarding
        setLoading(false);
      }
    });
  }, []);

  return (
    <SafeAreaView
      style={{
        backgroundColor: Colors.primary,
        height: '100%',
        justifyContent: 'center'
      }}>
      <StatusBar barStyle="light-content" />
      <Logo white size={200} />
      <Flex
        marginHorizontal={20}
        position="absolute"
        bottom={100}
        width="80%"
        alignSelf="center">
        <Button
          bg="white"
          color={Colors.primary}
          loading={loading}
          text="Get Started"
          onPress={() => navigate('OnboardingScreen')}
        />
      </Flex>
    </SafeAreaView>
  );
};

export default LaunchScreen;
