import React from 'react'
import { TextInput, View } from 'react-native'
import { Text } from '../..'

type Props = {
  onChange: (t: string) => void
  value: any
  label?: string
  placeHolder: string
  disabled?: boolean
  mh?: number
  br?: number
  bg?: string
  max?: number
  mW?: string | number | undefined
}

/**
 * Input area for your forms
 * @param {Function} onChange called when users types in the box, returns typed info
 * @param {String} value text to typed in by user
 * @param {String} label label to be displed on top of the text area
 * @param {String} placeHolder text to be displayed when field is empty
 * @param {Boolean} disabled disabled input field
 * @param {Number} mh horizontal margin
 * @param {Number} br border radius
 * @param {String} bg background color of the field
 * @param {Number} max maximum number of characters allowed
 * @param {String|Number|undefined} mW minimum width of the text field
 */
const InputArea: React.FC<Props> = ({
  label,
  placeHolder,
  value,
  onChange,
  disabled,
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
        placeholder={placeHolder}
        editable={disabled ? false : true}
        multiline={true}
        numberOfLines={8}
        maxLength={max ? max : undefined}
        style={{
          minWidth: mW ? mW : undefined,
          color: '#000',
          minHeight: 150,
          borderColor: '#e2e2e3',
          borderWidth: 1,
          borderRadius: br ? br : 22,
          padding: 15,
          marginHorizontal: mh ? mh : 5,
          marginVertical: 10,
          backgroundColor: bg ? bg : '#e2e2e3'
        }}
        onChangeText={(text) => onChange(text)}
        value={value}
      />
    </>
  )
}

export default InputArea
