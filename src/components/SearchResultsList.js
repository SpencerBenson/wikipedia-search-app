import React from "react"
import SearchResultsItem from "./SearchResultsItem"
import ResultsFooter from "./ResultsFooter"

const SearchResultsList = ({ searchResultsList,userInput }) => {

  const footerContent = userInput
  return (
    <main className="flex-shrink-0">
      <div className="container">
        <div id="search_results" className="list-group w-auto search-results">
         <div className="list-group">
      {searchResultsList.map((searchItem) => {

        return (
          <SearchResultsItem
            key={searchItem.key}
            searchItem={searchItem}
            />
         
        )
      })}
            {(searchResultsList.length>0) && <ResultsFooter
              key="resFooter"
              userInput={footerContent}
            />}
    </div>
    </div>
      </div>
      </main>
  )
}
export default SearchResultsList
