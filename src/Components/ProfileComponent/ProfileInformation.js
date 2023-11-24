import React from 'react'
import { Link } from 'react-router-dom'

const ProfileInformation = ({ field }) => {
    return (
        <div>
            <div className='w-25'>
                {
                    field !== true ? (
                        <h4 style={{ width: "120px", borderBottom: "2px solid rgba(190,154,48,255)" }} className='py-2'>Profile</h4>
                    ):
                    (
                        <h4 style={{ width: "120px", borderBottom: "2px solid rgba(190,154,48,255)" }} className='py-2'>Edit Profile</h4>
                    )
                }
                <p className='mt-2'>6th June 2023</p>
            </div>

            {/* تعريف المعلومات الشخصيه  */}

            <div className='d-flex justify-content-between  p-4 ' style={{ background: "rgba(21,19,18,0.5)", borderRadius: "10px" }}>
                <div className='row justify-content-center align-items-center'>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <img style={{ borderRadius: "50%", marginRight: "8px" }} src="https://via.placeholder.com/150" alt="Placeholder" />
                    </div>
                    <div className='col-lg-8 col-md-6 col-sm-12 info'>
                        <h2>Balqees Hamdi Sabr</h2>
                        <p>Computer Science , International islamic university</p>
                    </div>
                </div>
                <div className=''>
                    {
                        field !== true ? (
                            <Link to="/editprofile">
                                <button className='btn btnReponsive'>EDIT PROFILE</button>
                            </Link>
                        ) : (
                            <button className='btn btnReponsive'>Save Changes</button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ProfileInformation
