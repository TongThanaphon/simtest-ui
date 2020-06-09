import React from 'react'
import { Button } from 'antd'
import styled from 'styled-components'

interface ButtonItemProps {
  title: string
  buttonColor: string
  fontColor: string
}

const ButtonItem = (props: ButtonItemProps) => {
  const { title, buttonColor, fontColor } = props

  return <ButtonStyle style={{ backgroundColor: buttonColor, color: fontColor }}>{title}</ButtonStyle>
}

export default ButtonItem

const ButtonStyle = styled(Button)`
  width: 120px;
  height: 40px;
  font-weight: bold;
  font-size: 15px;
`
