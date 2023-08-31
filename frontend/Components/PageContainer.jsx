import React from "react"

const PageContainer = ({children}) => {
  return (
    <div className="cover-container d-flex w-100 h-100 p-3 ml-300px flex-column">
      {children}
    </div>
  )
}

export {Container}