import React, { useState, useCallback } from "react"
import "./App.css"
import Header from "./components/Header"

import SearchResultsList from "./components/SearchResultsList"


function App() {
  const [searchResultsList, setSearchResultsList] = useState([])
  
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState("")

  const [language, setLanguage] = useState("en")

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value)
  }

     const setURL = useCallback(async () => { 
       let url = `https://${language}.wikipedia.org/w/rest.php/v1/search/page?q=${userInput}&limit=10`
      return url
     }, [language, userInput])
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true);

    try {
      const url = await setURL()
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('result is: ', result.pages);

      setSearchResultsList(result.pages)
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  };

 

  return (

    <div className="App">
      <Header
        userInput={userInput}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        setLanguage={setLanguage}
      />
      {isLoading && <div>Loading...</div>}
      {!isLoading && (<SearchResultsList
        searchResultsList={searchResultsList}
        userInput={userInput}
      />)}
      { (searchResultsList.length <1) && <h3>Select language and search term above then hit enter for results</h3>}
    
    </div>
  )
}

export default App
