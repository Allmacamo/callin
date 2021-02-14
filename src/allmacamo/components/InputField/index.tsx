import React from 'react'
import { TextInput, View } from 'react-native'
import { Text } from '../..'

type InputProps = {
  onChange: (t: string) => void
  value: any
  label?: string
  placeHolder: string
  disabled?: boolean
  type?:
    | 'default'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'number-pad'
    | 'decimal-pad'
    | 'visible-password'
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'url'
    | 'name-phone-pad'
    | 'twitter'
    | 'web-search'
    | undefined
  mh?: number
  br?: number
  bg?: string
  max?: number
  mW?: string | number | undefined
}

/**
 * Input field for your forms
 * @param {Function} onChange called when users types in the box, returns typed info
 * @param {String} value text to typed in by user
 * @param {String} label label to be displed on top of the text area
 * @param {String} placeHolder text to be displayed when field is empty
 * @param {Boolean} disabled disabled input field
 * @param {String} type type of keyboard to show when users want to type
 * @param {Number} mh horizontal margin
 * @param {Number} br border radius
 * @param {String} bg background color of the field
 * @param {Number} max maximum number of characters allowed
 * @param {String|Number|undefined} mW minimum width of the text field
 */
const InputField: React.FC<InputProps> = ({
  label,
  placeHolder,
  value,
  onChange,
  disabled,
  type,
  mh,
  br,
  bg,
  max,
  mW
}) => {
  return (
    <>
      {label && (
        <View style={{ marginLeft: 15, marginTop: 10 }}>
          <Text>{label}</Text>
        </View>
      )}
      <TextInput
        keyboardType={type}
        placeholder={placeHolder}
        editable={disabled ? false : true}
        maxLength={max ? max : undefined}
        style={{
          minWidth: mW ? mW : undefined,
          color: '#000',
          minHeight: 50,
          borderColor: '#e2e2e3',
          borderWidth: 1,
          borderRadius: br ? br : 22,
          paddingLeft: 15,
          marginHorizontal: mh ? mh : 5,
          marginVertical: 10,
          backgroundColor: bg ? bg : 'white'
        }}
        onChangeText={(text) => onChange(text)}
        value={value}
      />
    </>
  )
}

export default InputField
