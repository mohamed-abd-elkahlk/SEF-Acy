import React from 'react'
import Profileinfo from './Profileinfo'
import { Link } from 'react-router-dom'
import ProfileInformation from './ProfileInformation'

const ProfileDetails = () => {
    return (
        <div>
            <div className='profileinformation container'>
                <ProfileInformation/>
                <Profileinfo />
            </div>
        </div>
    )
}

export default ProfileDetails
