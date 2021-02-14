import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import { Text } from '../..'
import { TextProps } from '../../typography/Text'

type Props = TextProps & {
  onPress: () => void
  text: string
}

/**
 * Renders clickable/Pressable text
 * Pronouced press ON text
 * @param {Function} onPress calls a function when pressed
 * @param {String} text text to be displayed
 */
const PressOnText: FC<Props> = ({ onPress, text, ...rest }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text {...rest}>{text}</Text>
    </TouchableOpacity>
  )
}

export default PressOnText
