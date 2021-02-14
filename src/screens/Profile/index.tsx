import { useNavigation } from '@react-navigation/native';
import React, { FC, useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import {
  Button,
  Flex,
  H2,
  H3,
  Icons,
  images,
  Text,
  TransparentModal
} from '../../allmacamo';
import { Container } from '../../allmacamo/layout';
import { useAsyncStorage } from '@react-native-community/async-storage';

type MenuOptionType = {
  name: string;
  icon: string;
  route?: string;
  modal?: 'details' | 'password' | 'about';
};

const ProfileScreen: FC = () => {
  const { reset, navigate } = useNavigation();

  const { removeItem } = useAsyncStorage('onboarding');

  const [showNoUserModel, setShowNoUserModel] = useState(false);

  const menuOptions: MenuOptionType[] = [
    {
      name: 'Update Details',
      icon: 'user',
      modal: 'details'
    },
    {
      name: 'Update Password',
      icon: 'lock',
      modal: 'password'
    },
    {
      name: 'Settings',
      icon: 'setting',
      route: 'SettingsScreen'
    },
    {
      name: 'About Callin',
      icon: 'info',
      modal: 'about'
    },
    {
      name: 'Share with Friends',
      icon: 'sharealt'
    },
    {
      name: 'Help',
      icon: 'question',
      route: 'HelpScreen'
    }
  ];

  return (
    <Container hideLogo>
      <TransparentModal
        transparent
        visible={showNoUserModel}
        close={() => setShowNoUserModel(false)}>
        <H3 align="center">Hi there!</H3>
        <Text align="center">
          In order to access these features, you need to be a registered user
        </Text>
        <Flex flexDirection="row" marginVertical={15}>
          <Button
            text="Login"
            onPress={() => {
              setShowNoUserModel(false);
              navigate('LoginScreen');
            }}
            width="45%"
          />
          <Button
            text="Register"
            onPress={() => {
              setShowNoUserModel(false);
              navigate('RegisterScreen');
            }}
            width="45%"
          />
        </Flex>
      </TransparentModal>
      <Flex
        marginTop={20}
        marginHorizontal={20}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <Flex>
          <H2>Hi there!</H2>
          <Text>Login for personal experience</Text>
        </Flex>
        <Image
          source={images.logo}
          style={{ width: 100, height: 100, borderRadius: 100 }}
        />
      </Flex>
      <Flex marginHorizontal={20} marginTop={50}>
        {menuOptions.map((option, i: number) => {
          const { name, icon } = option;
          return (
            <TouchableOpacity
              key={i}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingBottom: 10,
                borderBottomColor: 'gray',
                borderBottomWidth: 1,
                marginBottom: 20
              }}>
              <H3>{name}</H3>
              <Icons name={icon} />
            </TouchableOpacity>
          );
        })}
        <TouchableOpacity
          onPress={async () => {
            await removeItem();
            reset({
              index: 1,
              routes: [{ name: 'Launch' }]
            });
          }}
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            justifyContent: 'space-between',
            width: '100%'
          }}>
          <H3>Logout</H3>
          <Icons name="logout" />
        </TouchableOpacity>
      </Flex>
    </Container>
  );
};

export default ProfileScreen;
