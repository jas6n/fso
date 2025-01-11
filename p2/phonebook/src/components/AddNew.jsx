const AddNew = ({setNewName, setNewNumber, newName, newNumber, persons, setPersons}) => {
  const addPerson = (event) => {

    event.preventDefault()

    if (persons.some(obj => obj.name === newName)){
      window.alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat({name: newName, number: newNumber, id: (persons.length  + 1)}))
    }
    
  }


  const changeName = (event) => {
    setNewName(event.target.value)
  }

  const changeNumber = (event) => {
    setNewNumber(event.target.value)
  }

    return (<form>
    <div>
      name: <input onChange={changeName}/>
    </div>
    <div>
      number: <input onChange={changeNumber}/>
    </div>
    <div>
      <button type="submit" onClick={addPerson} >add</button>
    </div>
  </form>)
}

export default AddNew