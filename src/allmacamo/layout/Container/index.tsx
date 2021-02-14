import React, { FC } from 'react';
import { Image, SafeAreaView, StatusBar } from 'react-native';
import { H3, lottie, NavBack, Text } from '../..';
import Flex from '../../components/Flex';
import Loader from '../../components/Loader';
import LottieView from 'lottie-react-native';
import { ApolloError } from '@apollo/client/errors';
import { images } from '../../images';

type Props = {
  bg?: string;
  mh?: number;
  loading?: boolean;
  error?: ApolloError | undefined;
  canNavBack?: boolean;
  hideLogo?: boolean;
};

/**
 * Default Container for all screens
 * @param bg background color
 * @param mh horizonal margin
 * @param loading loading state
 * @param error error message
 */
const Container: FC<Props> = ({
  bg,
  mh,
  loading,
  error,
  canNavBack,
  hideLogo,
  children
}) => {
  const Header = () => (
    <Flex
      flexDirection="row"
      height={50}
      alignItems="center"
      justifyContent="center">
      {canNavBack && (
        <Flex position="absolute" left={0} marginLeft={15}>
          <NavBack />
        </Flex>
      )}
      {!hideLogo && (
        <Image
          source={images.callin}
          style={{ width: '100%', height: 40 }}
          resizeMode="contain"
        />
      )}
    </Flex>
  );

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{ height: '100%', backgroundColor: bg, marginHorizontal: mh }}>
        {loading ||
          (error && (
            <Flex
              position="absolute"
              alignSelf="center"
              justifyContent="center"
              zIndex={1}
              height="100%">
              {loading && <Loader />}
              {error && (
                <Flex>
                  <LottieView
                    source={lottie.error}
                    autoPlay
                    style={{ height: 200, alignSelf: 'center' }}
                  />
                  <H3 align="center">There has been an error</H3>
                  <Text align="center">{error.message}</Text>
                </Flex>
              )}
            </Flex>
          ))}
        <Header />
        {children}
      </SafeAreaView>
    </>
  );
};

export default Container;
