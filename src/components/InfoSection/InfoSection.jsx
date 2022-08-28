import React from 'react'
import { InfoContainer } from './InfoSectionElements'

const InfoSection = ({title}) => {
  return (
    <InfoContainer id="about">
      <p>{title}</p>
    </InfoContainer>
  )
}

export default InfoSection