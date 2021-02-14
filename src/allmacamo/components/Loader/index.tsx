import React, {FC} from 'react';
import LottieView from 'lottie-react-native';
import { lottie } from '../../images';
import Flex from '../Flex';

const Loader: FC= () => (
    <Flex justifyContent="center" alignSelf="center" height={100}>
      <LottieView
        source={lottie.loading}
        autoPlay
        loop
        style={{ height: 100, alignSelf: 'center' }}
      />
    </Flex>
  );

export default Loader;