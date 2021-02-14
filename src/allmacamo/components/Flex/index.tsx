import React, {FC} from 'react'
import { View, ViewStyle } from 'react-native'

const Flex:FC<ViewStyle> =({children, ...rest})=>(<View {...rest}>{children}</View>)

export default Flex