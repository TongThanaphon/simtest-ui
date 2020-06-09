import React from 'react'
import styled from 'styled-components'
import './App.css'

import ConditionTemplate from './components/ConditionTemplate'
import ImageItem from './components/ImageItem'
import SimTestTemplate from './components/SimTestTemplate'

function App() {
  return (
    <Root>
      <RootContainer>
        <ImageGridItem>
          <ImageItem image="https://assets.goscoreup.com/courses/cover/st_cos_10060_.jpg" />
        </ImageGridItem>
        <TemplateGridItem>
          <SimTestTemplate title="Sim Test O-NET วิทยาศาสตร์" location="สนามสอบจำลอง" questions={50} time={120} />
        </TemplateGridItem>
        <ConditionGridItem>
          <ConditionTemplate rule="เมื่อเริ่มทำข้อสอบแล้ว หากผู้สอบมีปัญหาในการเชื่อมต่อ ผู้สอบสามารถกลับมาทำใหม่อีกครั้งได้ จนกว่าจะมีการส่งคำตอบ" />
        </ConditionGridItem>
      </RootContainer>
    </Root>
  )
}

export default App

const Root = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`

const RootContainer = styled.div`
  display: grid;
  grid-template-columns: 15% auto;
  grid-template-rows: auto;
  grid-template-areas:
    'image template'
    'condition condition';
  gap: 20px 10%;
  /* border: 2px solid black; */
`

const ImageGridItem = styled.div`
  grid-area: image;
  /* height: auto; */
  justify-self: start;
  /* border: 2px solid green; */
`

const TemplateGridItem = styled.div`
  grid-area: template;
  /* border: 2px solid red; */
`

const ConditionGridItem = styled.div`
  grid-area: condition;
  /* border: 2px solid blue; */
`
