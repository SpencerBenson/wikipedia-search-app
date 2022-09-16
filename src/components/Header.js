import React from "react"
import SearchForm from "./SearchForm"

const Header = ({ FetchPages,language, userInput, handleChange,handleSubmit,setLanguage}) => {

  

  return (
       <header className="p-3 mb-3 border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <ul  className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="/" className="nav-link px-2 link-dark"
                ><h2>Wikipedia Search App</h2></a>
            </li>
          </ul>
        

      <SearchForm  FetchPages={FetchPages} language={language} userInput={userInput} handleChange={handleChange} handleSubmit={handleSubmit} setLanguage={setLanguage}  />
        </div>
      </div>
    </header>
  )
}

export default Header
