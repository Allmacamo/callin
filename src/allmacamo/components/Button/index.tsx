import React from 'react'
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native'
import { Colors } from '../../Colors'

type Props = {
  onPress: () => void
  text: string
  size?: number
  bg?: string
  color?: string
  mh?: number
  mv?: number
  loading?: boolean
  disabled?: boolean
  noShadow?: boolean
  radius?: number
  width?: string | number | undefined
}

/**
 * Button Component
 * @param {Function} onPress allows button to call a function when pressed
 * @param {String} text text to be displayed on the button
 * @param {Number} size size of the text on the button
 * @param {String} bg background color of the button, default Colors.primary
 * @param {String} color color of text on the button
 * @param {Number} mh Horizontal margin of the button
 * @param {Number} mv Vertical margin of the button
 * @param {Boolean} loading loading state, shows a loading indicator
 * @param {Boolean} disabled diables button from being pressed
 * @param {Boolean} noShadow removes default shadow applied to button
 * @param {Number} radius specifies radius, default is 22
 * @param {String|Number|undefined} width width of the button, default is 100%
 */
const Button: React.FC<Props> = ({
  text,
  onPress,
  bg,
  color,
  mh,
  mv,
  loading,
  disabled,
  noShadow,
  radius,
  width,
  size
}) => {
  return (
    <TouchableOpacity
      activeOpacity={disabled || loading ? 1 : undefined}
      onPress={() => {
        disabled ? null : onPress()
      }}
      style={{
        minWidth: width,
        height: 50,
        borderColor: disabled ? '#cccccc' : bg ? bg : Colors.primary,
        borderWidth: 2,
        borderRadius: radius ? radius : 22,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: mh ? mh : 5,
        marginVertical: mv ? mv : 5,
        backgroundColor: disabled ? '#cccccc' : bg ? bg : Colors.primary,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 8
        },
        shadowOpacity: noShadow ? 0 : 0.44,
        shadowRadius: 10.32,
        elevation: disabled ? 0 : 5
      }}>
      {loading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <Text
          style={{
            fontSize: size ? size : 19,
            color: color ? color : Colors.white
          }}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  )
}

export default Button
