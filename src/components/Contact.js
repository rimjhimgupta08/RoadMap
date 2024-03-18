import React from 'react'

const Contact = () => {
  return (
      <div className="row">
      <div className="col">
        <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
      </div>
      <div className="col">
        <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
      </div>
    </div>

  )
}

export default Contact