import { useNavigation } from '@react-navigation/native'
import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import Icons from '../Icons'

type Props = {
  ml?:number
}

/**
 * Component renders an arrow users can press to move back a screen
 * @param ml margin left
 */
const NavBack: FC<Props> = ({ml}) => {
  const { goBack } = useNavigation()
  return (
    <TouchableOpacity style={{marginLeft:ml}} onPress={goBack}>
      <Icons name="arrow-back-circle-outline" iFamily="Ionicons" />
    </TouchableOpacity>
  )
}

export default NavBack
