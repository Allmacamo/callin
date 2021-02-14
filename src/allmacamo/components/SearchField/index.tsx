import React from 'react'
import { TextInput, View, TouchableOpacity } from 'react-native'
import Icons from '../Icons'

type Props = {
  onChange: (t: string) => void
  value: string
  placeHolder: string
  mh?: number
  disabled?: boolean
  submit: () => void
}

/**
 * Search input field with submit button
 * @param {Function} onChange called when users types in the box, returns typed info
 * @param {String} value text to typed in by user
 * @param {String} placeHolder text to be displayed when field is empty
 * @param {Number} mh horizontal margin
 * @param {Boolean} disabled disabled input field
 * @param {Function} submit calls a function to submit the search term
 */
const SearchField: React.FC<Props> = ({
  placeHolder,
  value,
  onChange,
  disabled,
  submit,
  mh
}) => {
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
        marginHorizontal: mh ? mh : 5,
        backgroundColor: '#e2e2e3'
      }}>
      <TextInput
        placeholder={placeHolder}
        editable={disabled ? false : true}
        style={{
          color: '#000',
          width: '80%'
        }}
        onChangeText={(text) => onChange(text)}
        value={value}
      />
      <TouchableOpacity onPress={() => submit()}>
        <Icons name="search1" size={25} />
      </TouchableOpacity>
    </View>
  )
}

export default SearchField
