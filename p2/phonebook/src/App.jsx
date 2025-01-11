import { use } from 'react'
import { useState } from 'react'
import FilteredPeople from './components/FilteredPeople'
import AddNew from './components/AddNew'
import Filterer from './components/Filterer'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filtered, setFiltered] = useState([...persons])
  const [empty, setEmpty] = useState(true)
  


  return (
    <div>
      <h1>Phonebook</h1>

      <Filterer setEmpty={setEmpty} setFiltered={setFiltered} persons={persons}/>

      <h2>add a new</h2>
      <AddNew setNewName={setNewName} setNewNumber={setNewNumber} newName={newName} newNumber={newNumber} persons={persons} setPersons={setPersons}/>
      <h2>Numbers</h2>
      <FilteredPeople filtered={filtered} persons={persons} empty={empty}/>

    </div>
  )
}

export default App