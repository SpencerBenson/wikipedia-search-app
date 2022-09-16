import React from "react"

const ResultsFooter = ({ userInput}) => {
  const handleClick = (e) => {
    e.preventDefault()
  }

  return (
 
     
   <a
      id="resFooter"
      key="resFooter"
      name="resFooter"
      value="resFooter"
      onClick={handleClick}
      href="/"
            className="list-group-item list-group-item-action d-flex gap-3 py-3"
            aria-current="true"
    >
      <span className="thumbnail-image-wrapper" >
        
     </span>
            <div className="d-flex gap-2 w-100 justify-content-between ">
        <div className="text-start">
          <h6 >Search for pages containing "<b>{ userInput}</b>"</h6>
             
              </div>
            </div>
      </a>
  )
}

export default ResultsFooter
