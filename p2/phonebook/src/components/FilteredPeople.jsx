

const FilteredPeople = ({filtered, persons, empty}) => {

    if (empty){
      return (<div>
        {persons.map((person) => 
        <p key={person.id}>
        {person.name} {person.number}
      </p>)
      }
      </div>
      ) 
    }
    return (<div>
      {filtered.map((person) => 
      <p key={person.id}>
      {person.name} {person.number}
    </p>)
    }
    </div>
    )
  }

  export default FilteredPeople