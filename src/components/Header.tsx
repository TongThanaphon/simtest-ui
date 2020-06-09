import React from 'react'
import styled from 'styled-components'

interface HeaderProps {
  title: string
}

const Header = (props: HeaderProps) => {
  const { title } = props

  return <HeaderStyle>{title}</HeaderStyle>
}

export default Header

const HeaderStyle = styled.p`
  font-weight: bold;
  font-size: 25px;
`
