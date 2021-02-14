import React, { FC } from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
// For future use
// import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons'
// import Octicons from 'react-native-vector-icons/Octicons'
// import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
// import Zocial from 'react-native-vector-icons/Zocial'
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
// import Fontisto from 'react-native-vector-icons/Fontisto'
// import Foundation from 'react-native-vector-icons/Foundation'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type Props = {
  /**
   * @param name name of the icon
   */
  name: string;
  size?: number;
  color?: string;
  iFamily?:
    | 'Ionicons'
    | 'MCIcons'
    | 'Octicons'
    | 'SimpleLineIcons'
    | 'Zocial'
    | 'AntDesign'
    | 'Entypo'
    | 'Feather'
    | 'FontAwesome5'
    | 'Fontisto'
    | 'Foundation'
    | 'MaterialIcons';
};
/**
 * Icons component implementing React Native Vector Icons
 * @param {String} name name of the icon
 * @param {Number} size size of the icon, defaults to 30
 * @param {String} color color of the icon, defualt to black
 * @param {String} iFamily icon family, defaults to AntDesign
 * For All icons @see https://oblador.github.io/react-native-vector-icons/
 */
const Icons: FC<Props> = ({ name, size, color, iFamily }) => {
  let Icon;
  switch (iFamily) {
    case 'Feather':
      Icon = Feather;
      break;
    case 'Ionicons':
      Icon = Ionicons;
      break;
    case 'Entypo':
      Icon = Entypo;
      break;
    case 'MaterialIcons':
      Icon = MaterialIcons;
      break;
    default:
      Icon = AntDesign;
      break;
  }

  return <Icon name={name} size={size} color={color} />;
};

export default Icons;

Icons.defaultProps = {
  size: 30,
  name: 'user',
  color: 'black',
  iFamily: 'AntDesign'
};
