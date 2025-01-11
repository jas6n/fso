const Header = (props) => {

    return <h1>{props.course}</h1>
  }
  
  const Total = ({parts}) => {
    const total = parts.reduce((s, p) => {
        return s + p.exercises
    }, 0)
    
    return <p>Number of exercises {parts[0].exercises}</p>
  }
  
  const Part = (props) => {
    return (
      <p>
        {props.p} {props.exercises}
      </p>
    )
  }
  
  const Content = ({parts}) => {

    return (
      <div>
        {parts.map((part, i) => 
            <Part p={part.name} exercises={part.exercises} key={part.id}/>
        )}
        <Total parts={parts}/>
      </div>
    )
  }

const Course = ({course}) => {
    return (
        <div>
            <Header course={course.name}/>
            <Content parts={course.parts}/>
        </div>
    )
}

export default Course