import React, { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  const [ players, setPlayers ] = useState(0)
  const [ step, setStep ] = useState(0)
  const [ names, setNames ] = useState({})
  const [ coins, setCoins ] = useState({})
  const [ round, setRound ] = useState(1)
  let coinsCount = []

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

    if (round < 10) {
      setRound(round + 1)

      for (let i = 0; i < e.target.elements.length - 1; i++) {
        const element = e.target.elements[i];
        console.log(element.value, element.dataset)

      }
    }
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
      default:
        return (
          <Card>
            <h2>How many players ?</h2>
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
