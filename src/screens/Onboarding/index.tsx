import { useAsyncStorage } from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Flex, H3, Icons, PressOnText } from '../../allmacamo';
import { Colors } from '../../allmacamo/Colors';
import { Container } from '../../allmacamo/layout';

const OnboardingScreen: FC = () => {
  const { navigate } = useNavigation();

  const { setItem } = useAsyncStorage('onboarding');

  const slides: { id: string; title: string; image: any; intro: string }[] = [
    {
      id: '1',
      title: "Welcome to Call'in",
      image: require('../../assets/images/obOne.png'),
      intro: 'Hello there'
    },
    {
      id: '2',
      title: "Welcome to Call'in",
      image: require('../../assets/images/obOne.png'),
      intro: 'Hello there'
    }
  ];

  /**
   * Set onboarding as complete then move to chosen screen
   * @param route screen to navigate to
   */
  const completeOnboarding = async (route: string) => {
    await setItem('complete');
    navigate(route);
  };

  const renderSlides = (slide: { item: any }) => {
    const { item } = slide;
    return (
      <Flex key={item.id}>
        <Flex marginVertical={10}>
          <H3 align="center">{item.title}</H3>
        </Flex>
        <Image
          source={item.image}
          style={{ width: '100%', height: 300 }}
          resizeMode="contain"
        />
        <Flex marginHorizontal={15} marginVertical={10}>
          <H3 align="center">{item.intro}</H3>
        </Flex>
      </Flex>
    );
  };

  return (
    <Container bg="white">
      <AppIntroSlider
        dotStyle={{ backgroundColor: Colors.primary }}
        activeDotStyle={{ backgroundColor: 'black' }}
        renderItem={renderSlides}
        data={slides}
        renderDoneButton={() => (
          <Icons name="checkcircle" color={Colors.primary} />
        )}
        onDone={() => completeOnboarding('RegisterScreen')}
      />
      <Flex
        flexDirection="row"
        justifyContent="space-between"
        marginHorizontal={30}>
        <PressOnText
          align="center"
          mv={10}
          text="Login"
          onPress={() => completeOnboarding('LoginScreen')}
        />
        <PressOnText
          align="center"
          mv={10}
          text="Skip"
          onPress={() => completeOnboarding('RegisterScreen')}
        />
      </Flex>
    </Container>
  );
};

export default OnboardingScreen;
