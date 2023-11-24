import React from 'react'

function Form8() {
  return (

    <form class="col-12 col-lg-6 me-lg-5">
    <div class="row">
        <p>Links</p>
    </div>
    <div class="container bg-transparent2 golden-dashed-border py-3 px-4">


        <div class="row mt-3">
            <div class="col-md col-lg-3">
                <label for="from" class="mb-3">Website Name</label>
                <div class="col-md col-lg d-flex align-items-center">
                    <input type="text" class="form-control px-3 py-2" id="from" placeholder=""/>
                </div>
            </div>
            <div class="col-md col-lg">
                <label for="to" class="mb-3 mt-3 mt-md-0">URL</label>
                <div class="d-flex align-items-center">
                    <input type="text" class="form-control px-3 py-2 me-2" id="to"
                        placeholder=""/>
                    <i class="far fa-trash-alt gold-txt"></i>
                </div>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col-md col-lg-3">
                <label for="from" class="mb-3">Website Name</label>
                <div class="col-md col-lg d-flex align-items-center">
                    <input type="text" class="form-control px-3 py-2" id="from" placeholder=""/>
                </div>
            </div>
            <div class="col-md col-lg">
                <label for="to" class="mb-3 mt-3 mt-md-0">URL</label>
                <div class="d-flex align-items-center">
                    <input type="text" class="form-control px-3 py-2 me-2" id="to"
                        placeholder=""/>
                    <i class="far fa-trash-alt gold-txt"></i>
                </div>
            </div>
        </div>

        <div class="row mt-3 mb-4">
            <div class="col-md col-lg-3">
                <label for="from" class="mb-3">Website Name</label>
                <div class="col-md col-lg d-flex align-items-center">
                    <input type="text" class="form-control px-3 py-2" id="from" placeholder=""/>
                </div>
            </div>
            <div class="col-md col-lg">
                <label for="to" class="mb-3 mt-3 mt-md-0">URL</label>
                <div class="d-flex align-items-center">
                    <input type="text" class="form-control px-3 py-2 me-2" id="to"
                        placeholder=""/>
                    <i class="far fa-trash-alt gold-txt me-2"></i>
                    <i class="fas fa-plus-circle gold-txt"></i>
                </div>
            </div>
        </div>

    </div>

</form>  )
}

export default Form8