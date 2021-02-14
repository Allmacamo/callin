import React, { FC } from 'react'
import { Modal, ModalProps, SafeAreaView, TouchableOpacity } from 'react-native'
import Flex from '../Flex'
import Icons from '../Icons'

type Props = ModalProps & {
  close?: () => void
}

/**
 * Transparent modal component with inline props
 * @param close function to close modal
 */
const TransparentModal: FC<Props> = ({ children, close, ...rest }) => {
  return (
    <Modal transparent {...rest}>
      <SafeAreaView
        style={{
          backgroundColor: 'rgba(42,42,42,0.75)',
          height: '100%',
          justifyContent: 'center',
          alignContent: 'center'
        }}>
        <Flex
          backgroundColor="white"
          borderRadius={10}
          marginHorizontal={10}
          padding={10}>
          {close && (
            <TouchableOpacity onPress={close} style={{ alignSelf: 'flex-end' }}>
              <Icons name="close" />
            </TouchableOpacity>
          )}
          {children}
        </Flex>
      </SafeAreaView>
    </Modal>
  )
}

export default TransparentModal
