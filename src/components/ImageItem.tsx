import React from 'react'
import styled from 'styled-components'

interface ImageProps {
  image: string
}

const ImageItem = (props: ImageProps) => {
  const { image } = props

  return <ImageContainer alt="simulation test" src={`${image}`} />
}

export default ImageItem

const ImageContainer = styled.img`
  width: 140%;
  height: 100%;
  object-fit: cover;
`
