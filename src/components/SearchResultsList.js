import React from "react"
import SearchResultsItem from "./SearchResultsItem"

const SearchResultsList = ({ searchResultsList }) => {
  return (
    <main className="flex-shrink-0">
      <div className="container">
        <div id="search_results" className="list-group w-auto search-results">
         <div className="list-group">
      {searchResultsList.map((searchItem) => {

          // console.log(searchItem)
        return (
          <SearchResultsItem
            key={searchItem.key}
            searchItem={searchItem}
          />
        )
      })}
     
    </div>
    </div>
      </div>
      </main>
  )
}
export default SearchResultsList
