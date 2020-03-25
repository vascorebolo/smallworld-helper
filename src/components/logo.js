import React from 'react'
import styled from 'styled-components'

const LogoStyled = styled.div`
  background: url('logo.png') no-repeat center center;
  background-size: contain;
  max-width: 880px;
  padding-top: 15%;
  position: fixed;
  top: 20px;
  width: 80vw;
`

const Logo = () => {
  return (
    <LogoStyled></LogoStyled>
  )
}

Logo.displayName = 'Logo'

export default Logo