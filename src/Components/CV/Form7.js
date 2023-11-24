import React from 'react'
import { FaPlusCircle, FaTrashAlt } from 'react-icons/fa'

function Form7() {
  return (
    <form class="col-12 col-md-6 me-md-5">
    <div class="row">
        <label class="mb-3">Hobbies and interests</label>
        <div class="col-md col-lg d-flex align-items-center">
            <input type="text" class="form-control px-3 py-2 me-3" id="skill1" placeholder=""/>
            <FaTrashAlt   className='gold-txt ' />
        </div>
    </div>
    <div class="row">
        <div class="col-md col-lg d-flex align-items-center">
            <input type="text" class="form-control px-3 py-2 my-3 me-3" id="skill1"
                placeholder=""/>
            <FaTrashAlt   className='gold-txt ' />

        </div>
    </div>
    <div class="row ">
        <div class="col-md col-lg d-flex align-items-center">
            <input type="text" class="form-control px-3 py-2 me-3" id="skill1" placeholder=""/>
            <FaTrashAlt   className='gold-txt ' />

        </div>
    </div>
    <div class="row">
        <div class="col-md col-lg d-flex align-items-center">
            <input type="text" class="form-control px-3 py-2 my-3" id="skill1" placeholder=""/>
            <i class="far fa-trash-alt gold-txt mx-3"></i>
            <i class="fas fa-plus-circle gold-txt"></i>
            <FaTrashAlt   className='gold-txt ' />
            <FaPlusCircle className='gold-txt ms-3' />
        </div>
    </div>
</form>  )
}

export default Form7