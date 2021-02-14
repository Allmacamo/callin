import React, { FC } from 'react'
import FastImage from 'react-native-fast-image'
import { apiServer } from '../../Constants'

type Props = {
  src: string | undefined
  d: [number | string, number | string, number]
  resizeMode?: 'contain' | 'cover' | 'stretch' | 'center' | undefined
}

/**
 * Cached Image Component
 * Caches image so it not loaded over and over, usinf data
 * @param src the uri of the image
 * @param d width, height and borderRadius
 * @param resizeMode resize mode for the image
 */
const CachedImage: FC<Props> = ({ src, d, resizeMode }) => {
  return (
    <FastImage
      style={{ width: d[0], height: d[1], borderRadius: d[2] }}
      source={{
        uri: apiServer + src,
        priority: FastImage.priority.normal
      }}
      resizeMode={resizeMode ? resizeMode : 'contain'}
    />
  )
}

export default CachedImage
