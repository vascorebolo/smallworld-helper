import React from 'react'
import styled from 'styled-components'

const CardStyled = styled.div`
  align-items: center;
  background: #666;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`

const Card = ({ children }) => {
  return (
    <CardStyled>
      { children }
    </CardStyled>
  )
}

Card.displayName = 'Card'

export default Card