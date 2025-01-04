import { useState } from 'react'

const Statistics = (props) => {
  if (props.good + props.neutral + props.bad == 0){
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  } 
  return (
    <div>
      <StatisticsLine text="good" value={props.good} />
      <StatisticsLine text="neutral" value={props.neutral} />
      <StatisticsLine text="bad" value={props.bad} />
      <StatisticsLine text="all" value={props.good + props.neutral + props.bad} />
      <StatisticsLine text="average" value={(props.good - props.bad) / (props.good + props.neutral + props.bad)} />
      <StatisticsLine text="percentage" value={(props.good / (props.good + props.neutral + props.bad)) * 100} />
    </div>
  )
}

const StatisticsLine = (props) => {
  return (
    <div>
      <p>{props.text} {props.value}</p>
    </div>
  )
}


const Button = ({action, text}) => (
  <div>
    <button onClick={action}>{text}</button>
  </div>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGood = () => {
    setGood(good + 1)
  }
  const incrementNeutral = () => {
    setNeutral(neutral + 1)
  }
  const incrementBad = () => {
    setBad(bad + 1)
  }



  return (
    <div>
      <h1>give feedback</h1>
      <Button action={incrementGood} text="Good" />
      <Button action={incrementNeutral} text="Neutral" />
      <Button action={incrementBad} text="Bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App