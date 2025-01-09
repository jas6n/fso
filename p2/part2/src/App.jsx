// import Note from './components/Note'

// const App = ({notes}) => {

//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note =>
//           <Note key={note.id} note={note} />
//         )}
//       </ul>
//     </div>
//   )
// }

// export default App

const Course = ({ props }) => {
  console.log(props)
  const { course } = props
  return (<div>
    <Header course={course} />
  </div>)
}

const App = () => {
  const course = {
    // ...
  }

  console.log("app works")

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App