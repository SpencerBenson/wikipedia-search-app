import React from "react"
import languages from "../languages.json";

const SearchForm = ({  userInput, handleChange, handleSubmit, setLanguage }) => {
  
   const langs = languages.map((language) => {
    console.log("languag is: ",Object.keys(language)[0])
    return (<option key={Object.keys(language)[0]} value={Object.keys(language)[0]}>{Object.values(language)[0]}</option>
    )
  })

  return (
    <form onSubmit={(e)=>handleSubmit(e)} className="d-flex"  role="search">
           
      <select
        onChange={(e) => setLanguage(e.target.value)}
        className="form-select me-2"
        aria-label="Default select example"
        defaultValue="en">
       {langs}
      </select>
      <input
        value={userInput}
        onChange={(e)=>handleChange(e)}
              type="search"
              className="form-control me-2"
              placeholder="Search..."
              aria-label="Search"
      />
      <button type="button" className="btn btn-dark" onClick={(e)=>handleSubmit(e)}>
        search
      </button>
    </form>
    
  )
}

export default SearchForm
