import React from 'react'

function Form5() {
  return (
    <form class="col-12 col-md-6 me-md-5">
    <div class="row">
        <p>Education</p>
    </div>
    <div class="container bg-transparent2 golden-dashed-border py-3 px-4">

        <div class="row mt-3 mb-4">
            <div class="col-md col-lg-12">
                <label for="orgName" class="mb-3">Organization Name</label>
                <input type="text" class="form-control px-3 py-2" id="orgName" placeholder=""/>
            </div>
        </div>

        <div class="row mt-3 mb-4">
            <div class="col-md col-lg-12">
                <label for="degree" class="mb-3">Degree</label>
                <input type="text" class="form-control px-3 py-2" id="degree" placeholder=""/>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col-md col-lg">
                <label for="from" class="mb-3">From</label>
                <input type="text" class="form-control px-3 py-2" id="from" placeholder=""/>
            </div>
            <div class="col-md col-lg">
                <label for="to" class="mb-3 mt-3 mt-md-0">To</label>
                <input type="text" class="form-control px-3 py-2" id="to" placeholder=""/>
            </div>
        </div>

        <div class="row mt-3 mb-4">
            <div class="col-md col-lg-12">
                <label for="description2" class="mb-3 mt-3 mt-md-0">Description</label>
                <textarea class="form-control px-3 py-2" id="description2" rows="5" cols
                    placeholder=""></textarea>
            </div>
        </div>
    </div>
    <div class="d-flex align-items-center justify-content-end mt-3">
        <i class="far fa-trash-alt gold-txt mx-3"></i>
        <i class="fas fa-plus-circle gold-txt"></i>
    </div>
</form>
)
}

export default Form5