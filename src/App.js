import React, { useState } from 'react'
import './App.css'
import Card from './components/card'

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
      <p>{ names[name] }</p>
      )
    }

    return namesItems
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Card>
            <p>What are the names of the { players } players</p>
            <form onSubmit={namesSubmitHanlder}>
              { renderNameInputs() }
              <input type="submit" />
            </form>
          </Card>
        )
      case 2:
          return (
            <Card>
              <h2>Names</h2>
              { renderNamesList() }
            </Card>
          )
      default:
        return (
          <Card>
            <p>How many players ?</p>
            <div>
              <button onClick={() => handleSetPlayers(2)}>2</button>
              <button onClick={() => handleSetPlayers(3)}>3</button>
              <button onClick={() => handleSetPlayers(4)}>4</button>
              <button onClick={() => handleSetPlayers(5)}>5</button>
            </div>
          </Card>
        )
    }
  }

  return (
    <div className="App">
      { renderStep() }
    </div>
  )
}

export default App
