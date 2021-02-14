import { useNavigation } from '@react-navigation/native';
import React, { FC, useState } from 'react';
import {
  Button,
  InputField,
  Logo,
  PasswordField,
  PressOnText,
  Text
} from '../../allmacamo';
import { Container } from '../../allmacamo/layout';

const LoginScreen: FC = () => {
  const { navigate, reset } = useNavigation();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /**
   * Login user with email and password
   * TODO: add toast notification for login errors
   */
  const userLogin = async () => {
    try {
      setLoading(true);
      setLoading(false);
      reset({ index: 0, routes: [{ name: 'Home' }] });
    } catch (error) {
      setLoading(false);
      console.log({ error });
    }
  };

  return (
    <Container mh={15} hideLogo canNavBack>
      <Logo size={130} mv={20} />
      <Text align="center" mv={10}>
        Login with your existing account
      </Text>
      <InputField
        placeHolder="Email address"
        onChange={(t) => setEmail(t)}
        value={email}
      />
      <PasswordField
        placeHolder="Password"
        onChange={(t) => setPassword(t)}
        value={password}
      />
      <PressOnText
        text="Forgot your password?"
        onPress={() => {}}
        align="right"
        mv={10}
      />
      <Button text="Login" loading={loading} onPress={userLogin} />
      <PressOnText
        mv={30}
        text="Don't have an account? Sign up here"
        onPress={() => navigate('RegisterScreen')}
        align="center"
      />
      <PressOnText
        mv={15}
        text="Continue without login"
        onPress={() =>
          reset({
            index: 1,
            routes: [{ name: 'Home' }]
          })
        }
        align="center"
      />
    </Container>
  );
};

export default LoginScreen;
