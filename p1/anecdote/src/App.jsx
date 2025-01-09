import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.click}>{props.name}</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [popular, setPopular] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
  const Click = () => {
    setSelected(Math.floor(Math.random() * (anecdotes.length)))
  }

  const Vote = () => {

    const copy = {...points}
    copy[selected] += 1
    setPoints(copy)
    let a = Max_index(copy)
    setPopular(a)
  }

  const Max_index = (copy) => {
    let m = 0
    let index = 0
    for (const [key, value] of Object.entries(copy)) {
      if (value > m){
        m = value
        index = key
      }
    }
    return (index)
  }



  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <Button click={Vote} name="Vote"></Button>
      <Button click={Click} name="Next anecdote"/>
      <h1>Anecdote with the most votes</h1>
      <p>{anecdotes[popular]}</p>
      <p>has {points[popular]} votes</p>

    </div>
  )
}

export default App