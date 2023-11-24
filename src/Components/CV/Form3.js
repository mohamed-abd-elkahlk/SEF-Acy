import React from 'react'

function Form3() {
  return (
    
    <form class="col-12 col-md-6 me-md-5">
    <div class="row">
        <label class="mb-3">Skills</label>
        <div class="col-md col-lg d-flex align-items-center">
            <input type="text" class="form-control px-3 py-2 me-3" id="skill1" placeholder="Enter your skills"/>
            <i class="far fa-trash-alt gold-txt"></i>
        </div>
    </div>
    <div class="row">
        <div class="col-md col-lg d-flex align-items-center">
            <input type="text" class="form-control px-3 py-2 my-3 me-3" id="skill1" placeholder="Enter your skills"/>
            <i class="far fa-trash-alt gold-txt"></i>
        </div>
    </div>
    <div class="row ">
        <div class="col-md col-lg d-flex align-items-center">
            <input type="text" class="form-control px-3 py-2 me-3" id="skill1" placeholder="Enter your skills"/>
            <i class="far fa-trash-alt gold-txt"></i>
        </div>
    </div>
    <div class="row">
        <div class="col-md col-lg d-flex align-items-center">
            <input type="text" class="form-control px-3 py-2 my-3" id="skill1" placeholder="Enter your skills"/>
            <i class="far fa-trash-alt gold-txt mx-3"></i>
            <i class="fas fa-plus-circle gold-txt"></i>
        </div>
    </div>
</form>
)
}

export default Form3