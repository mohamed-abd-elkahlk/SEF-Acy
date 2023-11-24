import React from 'react'
import img from '../../image/cloud.png'
function Form1() {
    
    return (
            <form className="col-12 col-lg-6 me-md-5" >
                <div className="row">
                    <div className="col-md col-lg me-3">
                        <label for="firstName" className="mb-3">First Name</label>
                        <input type="text" className="form-control px-3 py-2" id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="col-md col-lg">
                        <label for="lastName" className="mb-3 mt-3 mt-md-0">Last Name</label>
                        <input type="text" className="form-control px-3 py-2" id="lastName" placeholder="Enter your last name" />
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md col-lg me-3">
                        <label for="profession" className="mb-3">Profession</label>
                        <input type="text" className="form-control px-3 py-2" id="profession" placeholder="Enter your profession" />
                    </div>
                    <div className="col-md col-lg">
                        <label for="country" className="mb-3 mt-3 mt-md-0">Country</label>
                        <input type="text" className="form-control px-3 py-2" id="country" placeholder="Enter your country" />
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md col-lg me-3">
                        <label for="city" className="mb-3">City</label>
                        <input type="text" className="form-control px-3 py-2" id="city" placeholder="Enter your city" />
                    </div>
                    <div className="col-md col-lg-8">
                        <label for="phone" className="mb-3 mt-3 mt-md-0">Mobile Number</label><br />
                        <input type="tel" className="form-control px-5 py-2" id="phone" placeholder="Enter your mobile number" />
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md col-lg">
                        <label for="email" className="mb-3">Email</label>
                        <input type="email" className="form-control px-3 py-2" id="email" placeholder="Enter your email" />
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-6">
                        <label for="personalPhoto" className="d-none d-md-block">Personal Photo</label>
                        <label for="personalPhoto" className="d-md-none">Upload CV</label>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col golden-dashed-border d-flex flex-column align-items-center py-5">
                        <img src={img} alt="" width="80px" />
                        <p className="fw-bold mt-3">Drag & drop files or
                            <label for="personalPhoto" id="fileLink" className="gold-txt browse-txt">Browse</label>
                            <input type="file" style={{ display: 'none' }} id="personalPhoto" />
                        </p>
                        <p className="text-secondary small-txt">Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD,
                            AI, Word, PPT
                        </p>
                    </div>
                </div>
            </form>

    )
}

export default Form1