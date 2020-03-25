import React, { useState } from 'react'
import './App.css'
import Card from './components/card'
import Logo from './components/logo'
import PlayerNumber from './components/players-number'
import styled from 'styled-components'

const AppStyled = styled.div`
  align-items: center;
  background: #fff url('./bg1.jpg') repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  font-size: calc(10 px + 2 vmin);
  justify-content: center;
  min-height: 100 vh;
`

function App() {
  const [ players, setPlayers ] = useState(0)
  const [ step, setStep ] = useState(0)
  const [ names, setNames ] = useState({})
  const [ coins, setCoins ] = useState({})
  const [ round, setRound ] = useState(1)

  const handleSetPlayers = (nr) => {
    setStep(1)
    setPlayers(nr)
  }

  const handleNameChange = (e) => {
    const { value, dataset } = e.target
    const entry = {}

    entry[dataset.id] = value
    setNames({ ...names, ...entry})
  }

  const renderNameInputs = () => {
    let inputs = []

    for (let i = 0; i < players; i++) {
      inputs.push(
        <>
          <label key="name-{i}">
            Name {i + 1}
            <input
              data-id={`name-${i}`}
              type="text"
              onChange={handleNameChange}
            />
          </label>
        </>
      )
    }

    return inputs
  }

  const namesSubmitHanlder = (e) => {
    e.preventDefault()
    setStep(2)
  }

  const renderNamesList = () => {
    const namesItems = []

    for (const name in names) {
      namesItems.push(
        <label>
          { names[name] }
          <input
            type="number"
            data-id={name}
          />
        </label>
      )
    }

    return namesItems
  }

  const coinsSubmitHandler = (e) => {
    e.preventDefault()

    if (round <= 10) {
      setRound(round + 1)
      let newValues = {}

      for (let i = 0; i < e.target.elements.length - 1; i++) {
        const element = e.target.elements[i];
        if (round === 1) {
          const entry = {}
          entry[element.dataset.id] = element.value

          newValues = {...newValues, ...entry}
        } else {
          const entry = {}
          const id = element.dataset.id

          entry[id] = coins[id] * 1 + element.value * 1
          newValues = { ...newValues, ...entry }
        }

        element.value = ''
      }

      setCoins({...newValues})
      if (round === 2) {
        setStep(3)
      }
    }
  }

  const renderResults = () => {
    const results = []

    Object.keys(names).map(value =>
      results.push(<p>{ names[value] }:  { coins[value] }</p>)
    )

    return results
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Card>
            <h2>What are the names of the { players } players</h2>
            <form onSubmit={namesSubmitHanlder}>
              { renderNameInputs() }
              <input type="submit" />
            </form>
          </Card>
        )
      case 2:
        return (
          <Card>
            <h2>Coins earned in Round { round }</h2>
            <form onSubmit={coinsSubmitHandler}>
              { renderNamesList() }
              <input type="submit" />
            </form>
          </Card>
        )
      case 3:
        return (
          <Card>
            <h2>Results</h2>
            { renderResults() }
          </Card>
        )
      default:
        return (
          <PlayerNumber handleSetPlayers={handleSetPlayers}></PlayerNumber>
        )
    }
  }

  return (
    <AppStyled>
      <Logo></Logo>
      { renderStep() }
    </AppStyled>
  )
}

export default App
