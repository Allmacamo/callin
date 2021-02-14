import React, { FC } from 'react';
import { Image, View } from 'react-native';
import { images } from '../../images';

type Props = {
  size?: number;
  mv?: number;
  white?: boolean;
};

/**
 * Component returning Logo of the app
 * @param {Number} size size of the logo
 * @param {Number} mv vertical margin
 */
const Logo: FC<Props> = ({ size, mv, white }) => {
  return (
    <View
      style={{
        marginVertical: mv ? mv : undefined,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      }}>
      {white ? (
        <Image
          source={images.logoW}
          style={{
            width: size ? size : 100,
            height: size ? size : 100,
            alignSelf: 'center',
            borderRadius: 10
          }}
        />
      ) : (
        <Image
          source={images.logo}
          style={{
            width: size ? size : 100,
            height: size ? size : 100,
            alignSelf: 'center',
            borderRadius: 10
          }}
        />
      )}
    </View>
  );
};

export default Logo;
