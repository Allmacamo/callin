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

const RegisterScreen: FC = () => {
  const { navigate, reset } = useNavigation();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  /**
   * Register user with email and password
   * TODO: add toast notification for registation errors
   * TODO: add verification for password and confirm password
   */
  const registration = async () => {
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
    <Container mh={15} canNavBack hideLogo>
      <Logo size={130} mv={20} />
      <Text align="center" mv={10}>
        Register using your email and a password
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
      <PasswordField
        placeHolder="Confirm Password"
        onChange={(t) => setConfirmPassword(t)}
        value={confirmPassword}
      />
      <Button text="Create account" loading={loading} onPress={registration} />
      <PressOnText
        mv={20}
        text="Already have an account? Login here"
        onPress={() => navigate('LoginScreen')}
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

export default RegisterScreen;
