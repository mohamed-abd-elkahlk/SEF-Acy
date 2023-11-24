import React from 'react'

function Form2() {
  return (
    <form className="col-12 col-md-6 me-md-5">
      <div className="row my-3">
        <div className="col-md col-lg me-3">
          <label for="textareaField" className="mb-3">About</label>
          <textarea className="form-control px-3 py-2" id="textareaField" rows="5" cols placeholder="Enter text"></textarea>
        </div>
      </div>
    </form>
  )
}

export default Form2