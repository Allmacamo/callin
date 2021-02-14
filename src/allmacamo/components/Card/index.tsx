import React, { FC } from 'react'
import { TouchableOpacity, ViewStyle } from 'react-native'

type Props = ViewStyle & {
  onPress?: () => void
}
/**
 * Card Component with inline ViewStyle props
 * @param onPress function to call when user presses on the card
 */
const Card: FC<Props> = ({ onPress, children, ...rest }) => {
  return (
    <TouchableOpacity
      activeOpacity={onPress ? undefined : 1}
      onPress={onPress}
      style={{
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowOpacity: 0.6,
        shadowRadius: 3.84,
        elevation: 5,
        ...rest
      }}>
      {children}
    </TouchableOpacity>
  )
}
export default Card
