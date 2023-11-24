import React from 'react'
import AdminSidebar from '../../../Components/AdminComponents/AdminSidebar';
import { useSelector } from 'react-redux';
import PrgTableJobs from '../../../Components/Table/PrgTableJobs';
import { Link } from 'react-router-dom';
function AdminJobs({Status}) {
    var Jobs = useSelector(state => state.Jobs.Jobs)
    if(Status !== "All"){
        Jobs = Jobs.filter(job => job.Status  === Status)
    }
    return (
        <div className='container'>
            <div className='d-flex justify-content-between align-items-center'>
                <div>
                    <p style={{ width: "120px", borderBottom: "2px solid rgba(190,154,48,255)" }} className='py-2'>Admin Panel</p>
                    <p className='mt-2'>6th June 2023</p></div>
                <div className="text-end"><Link to={'/admin/AddJob'} className='btn btn-warning text-light'>Add Job</Link></div>
            </div>
            <div className='d-block d-lg-flex justify-content-between '>
                <AdminSidebar />
                <div className='col-11 h-100 col-lg-9 mx-auto '>

                    <PrgTableJobs itemsPerPage={6} items={Jobs}
                    />

                </div>
            </div>
        </div>


    )
}

export default AdminJobs