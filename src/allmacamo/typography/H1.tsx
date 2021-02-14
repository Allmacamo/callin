import React from 'react';
import { Text } from 'react-native';

type TextProps = {
  color?: string;
  mv?: number;
  weight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
  align?: 'center' | 'auto' | 'left' | 'right' | 'justify' | undefined;
};

/**
 * H1 text with font size 34
 * @param {String} color font color
 * @param {Number} mv vertical margin
 * @param {String} weight font weight
 * @param {String} align text alignment
 */
const H1: React.FC<TextProps> = ({ children, color, mv, weight, align }) => {
  return (
    <Text
      allowFontScaling={false}
      style={{
        textAlign: align ? align : 'left',
        fontSize: 34,
        fontWeight: weight ? weight : 'normal',
        color: color ? color : '#696969',
        marginVertical: mv ? mv : 2
      }}>
      {children}
    </Text>
  );
};

export default H1;
