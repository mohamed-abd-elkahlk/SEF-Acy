import React from 'react'

function Form4() {
  return (

    <form class="col-12 col-md-6 me-md-5">
    <div class="row">
        <p>Experience</p>
    </div>
    <div class="container bg-transparent2 golden-dashed-border py-3 px-4">
        <div class="row">
            <div class="col-md col-lg">
                <label for="companyName" class="mb-3">Company Name</label>
                <input type="text" class="form-control px-3 py-2" id="companyName"
                    placeholder="Enter your company name"/>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col-md col-lg">
                <label for="position" class="mb-3">Position</label>
                <input type="text" class="form-control px-3 py-2" id="position"
                    placeholder="Enter your position"/>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col-md col-lg me-3">
                <label for="from" class="mb-3">From</label>
                <input type="text" class="form-control px-3 py-2" id="from" placeholder=""/>
            </div>
            <div class="col-md col-lg">
                <label for="to" class="mb-3 mt-3 mt-md-0">To</label>
                <input type="text" class="form-control px-3 py-2" id="to" placeholder=""/>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col-md col-lg me-1">
                <label for="personalPhoto">Company Logo</label>
                <div class="col mt-3  golden-dashed-border d-flex flex-column align-items-center py-2">
                    <img src="Images/cloud.png" alt="" width="40px"/>
                    <p class="fw-bold my-2 text-center tiny-txt">Drag & drop files or
                        <label for="personalPhoto" id="fileLink"
                            class="gold-txt browse-txt tiny-txt">Browse</label>
                        <input type="file" style={{display: 'none'}} id="personalPhoto"/>
                    </p>
                    <p class="text-secondary tiny-txt text-center">Supported formates: JPEG, PNG, GIF, MP4, PDF,
                        PSD,
                        AI, Word, PPT
                    </p>
                </div>
            </div>
            <div class="col-md col-lg-8">
                <label for="description" class="mb-3 mt-3 mt-md-0">Description</label>
                <textarea class="form-control px-3 py-2" id="description" rows="5" cols
                    placeholder="Enter text"></textarea>
            </div>
        </div>
    </div>
    <div class="d-flex align-items-center justify-content-end mt-3">
        <i class="far fa-trash-alt gold-txt mx-3"></i>
        <i class="fas fa-plus-circle gold-txt"></i>
    </div>
</form>  )
}

export default Form4