import React from 'react'

import Header from '../components/Header'
import ButtonItem from '../components/ButtonItem'
import styled from 'styled-components'

interface SimTestProps {
  title: string
  location: string
  questions: number
  time: number
}

const SimTestTemplate = (props: SimTestProps) => {
  const { location, title, questions, time } = props

  return (
    <SimTestContainer>
      <p>{location}</p>
      <Header title={`${title}`} />
      <p>
        {questions} ข้อ จับเวลา {time} นาที
      </p>
      <ButtonItem title="ทำข้อสอบ" buttonColor="#CA3A33" fontColor="white" />
    </SimTestContainer>
  )
}

export default SimTestTemplate

const SimTestContainer = styled.div`
  text-align: left;
  /* background: yellow; */
  /* object-fit: contain; */
`
