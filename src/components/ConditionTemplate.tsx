import React from 'react'

import styled from 'styled-components'

import Header from '../components/Header'

interface ConditionProps {
  rule: string
}

const ConditionTemplate = (props: ConditionProps) => {
  const { rule } = props

  return (
    <ConditionContainer>
      <Header title="เงื่อนไข" />
      <RuleDescription>{rule}</RuleDescription>
    </ConditionContainer>
  )
}

export default ConditionTemplate

const ConditionContainer = styled.div`
  text-align: left;
  /* width: 60%; */
  /* background: red; */
  /* height: 150px; */
`
const RuleDescription = styled.p`
  font-size: 16px;
  color: #b09896;
`
