import React from 'react'
import { Link } from 'react-router-dom'
import Profileinfo from '../ProfileComponent/Profileinfo'
import { FaReact, FaGithub } from 'react-icons/fa'
import ProfileInformation from '../ProfileComponent/ProfileInformation'

const EditProfile = () => {
    return (
        <div>
            <div className='profileinformation container'>
                <ProfileInformation field={true}/>
                <Profileinfo fields={true}/>
            </div>
        </div>
    )
}

export default EditProfile
