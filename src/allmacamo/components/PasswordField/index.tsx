import React, { useState } from 'react'
import { TextInput, View, TouchableOpacity } from 'react-native'
import Icons from '../Icons'

type Props = {
  onChange: (t: string) => void
  value: any
  placeHolder: string
  disabled?: boolean
}

/**
 * Renders an input field specifically for password input with hide/view functionality
 * @param {Function} onChange called when users types in the box, returns typed info
 * @param {String} value text to typed in by user
 * @param {String} placeHolder text to be displayed when field is empty
 * @param {Boolean} disabled disabled input field
 */
const PasswordField: React.FC<Props> = ({
  placeHolder,
  value,
  onChange,
  disabled
}) => {
  const [hidden, setHidden] = useState(true)
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        minHeight: 50,
        alignItems: 'center',
        borderColor: '#e2e2e3',
        borderWidth: 1,
        borderRadius: 22,
        paddingLeft: 15,
        marginVertical: 10,
        marginHorizontal: 5,
        backgroundColor: 'white'
      }}>
      <TextInput
        placeholder={placeHolder}
        editable={disabled ? false : true}
        secureTextEntry={hidden}
        style={{
          color: '#000',
          width: '80%'
        }}
        onChangeText={(text) => onChange(text)}
        value={value}
      />
      <TouchableOpacity onPress={() => setHidden(!hidden)}>
        {hidden ? (
          <Icons name="eye-off" size={20} iFamily="Feather" />
        ) : (
          <Icons name="eye" size={20} iFamily="Feather" />
        )}
      </TouchableOpacity>
    </View>
  )
}

export default PasswordField
