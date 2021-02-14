import React from 'react';
import { Text } from 'react-native';

export type TextProps = {
  size?: number;
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
 * Text text with font size 14
 * @param {Number} size font size
 * @param {String} color font color
 * @param {Number} mv vertical margin
 * @param {String} weight font weight
 * @param {String} align text alignment
 */
const Texts: React.FC<TextProps> = ({
  children,
  size,
  color,
  mv,
  weight,
  align
}) => {
  return (
    <Text
      allowFontScaling={false}
      style={{
        textAlign: align ? align : 'left',
        fontSize: size ? size : 14,
        fontWeight: weight ? weight : 'normal',
        color: color ? color : '#696969',
        marginVertical: mv ? mv : 2
      }}>
      {children}
    </Text>
  );
};

export default Texts;
