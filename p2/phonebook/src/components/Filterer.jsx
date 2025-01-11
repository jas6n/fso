const Filterer = ({setEmpty, persons, setFiltered}) => {

    const filterBook = (event) => {
        if (event.target.value === ''){
          setEmpty(true)
        } else {
          setEmpty(false)
          const filt = persons.filter(person => person.name.toLowerCase().includes(event.target.value.toLowerCase()))
          setFiltered(filt)
        }
      }

    return (
    <div>
        filter shown with <input onChange={filterBook}/>
      </div>
      )
}

export default Filterer