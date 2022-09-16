import React from "react"

const SearchItem = ({ searchItem}) => {
  const handleClick = (e) => {
    e.preventDefault()
  }

  return (
 
     
   <a
      id={searchItem.id}
      key={searchItem.key}
      name="searchItem"
      value={searchItem.id}
      onClick={handleClick}
      href="/"
            className="list-group-item list-group-item-action d-flex gap-3 py-3"
            aria-current="true"
    >
      <span className="thumbnail-image-wrapper" >
        {searchItem.thumbnail && <img
          src={searchItem.thumbnail ? searchItem.thumbnail.url : ""}
          alt=""
          width="50"
          height="50"
          className="flex-shrink-0"
      />}
     </span>
            <div className="d-flex gap-2 w-100 justify-content-between ">
              <div className="text-start">
                <h6 >{searchItem.title? searchItem.title : ''}</h6>
                <p className="mb-0 opacity-75">
                  {searchItem.description? searchItem.description:""}
   
            </p>
              </div>
            </div>
      </a>
  )
}

export default SearchItem
