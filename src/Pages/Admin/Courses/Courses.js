import React from 'react'
import AdminSidebar from '../../../Components/AdminComponents/AdminSidebar';
import { useSelector } from 'react-redux';
import PrgTableCourses from '../../../Components/Table/PrgTableCourses';
import { Link } from 'react-router-dom';
function Courses({Status}) {
    var Courses = useSelector(state => state.Courses.Courses)
    if(Status !== "All"){
        Courses = Courses.filter(course => course.Status  === Status)
    }
    return (
        <div className='container'>
            <div className='d-flex justify-content-between align-items-center'>
                <div>
                    <p style={{ width: "120px", borderBottom: "2px solid rgba(190,154,48,255)" }} className='py-2'>Create New User</p>
                    <p className='mt-2'>6th June 2023</p></div>
                <div className="text-end"><Link to={'/admin/addCourse'} className='btn btn-warning text-light'>Add Course</Link></div>
            </div>
            <div className='d-block d-lg-flex justify-content-between '>
                <AdminSidebar />
                <div className='col-11 h-100 col-lg-8 m-auto '>

                    <PrgTableCourses itemsPerPage={6} items={Courses}
                    />

                </div>
            </div>
        </div>


    )
}

export default Courses