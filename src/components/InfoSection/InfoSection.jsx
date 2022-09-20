import React from 'react'
import { InfoContainer } from './InfoSectionElements'

const InfoSection = ({id, title}) => {
  return (
    <InfoContainer id={id}>
      <p>{title}</p>
    </InfoContainer>
  )
}

export default InfoSection