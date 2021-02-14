import React from 'react';
import { Text as RText } from 'react-native';

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
 * H2 text with font size 30
 * @param {String} color font color
 * @param {Number} mv vertical margin
 * @param {String} weight font weight
 * @param {String} align text alignment
 */
const H2: React.FC<TextProps> = ({ children, color, mv, weight, align }) => {
  return (
    <RText
      allowFontScaling={false}
      style={{
        textAlign: align ? align : 'left',
        fontSize: 30,
        fontWeight: weight ? weight : 'normal',
        color: color ? color : '#696969',
        marginVertical: mv ? mv : 2
      }}>
      {children}
    </RText>
  );
};

export default H2;
