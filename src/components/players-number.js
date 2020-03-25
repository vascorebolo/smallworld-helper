import React from 'react'
import Card from './card.js'
import { func } from 'prop-types'
import styled from 'styled-components'

const ButtonStyled = styled.button`
  appearance: none;
  margin-left: 15px;
  width: 60px;
  height: 60px;
  font-size: 30px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: linear-gradient(0deg, rgba(125, 9, 22, 1) 0% , rgba(222, 123, 40, 1) 100% );
  color: #fff;

  &:first-child {
    margin-left: 0;
  }
`

const PlayersNumber = ({ handleSetPlayers }) => {
  return (
    <Card>
      <h2>How many players ?</h2>
      <div>
        <ButtonStyled onClick={() => handleSetPlayers(2)}>2</ButtonStyled>
        <ButtonStyled onClick={() => handleSetPlayers(3)}>3</ButtonStyled>
        <ButtonStyled onClick={() => handleSetPlayers(4)}>4</ButtonStyled>
        <ButtonStyled onClick={() => handleSetPlayers(5)}>5</ButtonStyled>
      </div>
    </Card>
  )
}

PlayersNumber.propTypes = {
  handleSetPlayers: func.isRequired
}

PlayersNumber.displayName = 'PlayersNumber'

export default PlayersNumber