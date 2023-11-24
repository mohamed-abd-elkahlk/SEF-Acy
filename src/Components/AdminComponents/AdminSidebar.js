import React from 'react'
import { Link } from 'react-router-dom'

const AdminSidebar = ({type}) => {
  return (
    <>
      <div className='col-11 mx-auto  col-lg-3   d-none d-lg-block p-3'>
        <div className='col-12 p-3 bg-black bg-opacity-50 d-none d-md-block' >
          <div>
            <Link to={'/admin'} className="d-block  text-light   p-2  bg-black bg-opacity-75 " ><h4      >Users</h4></Link>
            <Link to={'/admin/Admin'} className="d-block  text-light text-hover-warning   p-2 ps-4 ">Admin</Link>
            <Link to={'/admin/Instructors'} className="d-block  text-light text-hover-warning   p-2 ps-4 ">Instructors</Link>
            <Link to={'/admin/Students'} className="d-block  text-light text-hover-warning   p-2 ps-4 ">Students</Link>

          </div>
          <div>
            <Link to={'/admin/Articles'} className="d-block  text-light p-2   bg-black bg-opacity-75"  ><h4    >Articles</h4></Link>
            <Link to={'/admin/PublishedArticles'} className="d-block  text-light text-hover-warning   p-2 ps-4 ">Published Articles</Link>
            <Link to={'/admin/ScheduledArticles'} className="d-block  text-light text-hover-warning   p-2 ps-4 ">Scheduled Articles</Link>
            <Link to={'/admin/SavedArticles'} className="d-block  text-light text-hover-warning   p-2 ps-4 ">Saved Drafts</Link>
          </div>
          <div>
            <Link to={'/admin/jobs'} className="d-block  text-light  p-2   bg-black bg-opacity-75"  ><h4    >Jobs</h4></Link>
            <Link to={'/admin/publisherJobs'} className="d-block  text-light text-hover-warning   p-2 ps-4 ">Published Jobs</Link>
            <Link to={'/admin/SavedJobs'} className="d-block  text-light text-hover-warning   p-2 ps-4 ">Saved Drafts</Link>
          </div>
          <div>
            <Link to={'/admin/courses'} className="d-block  text-light  p-2   bg-black bg-opacity-75"  ><h4    >Courses</h4></Link>
            <Link to={'/admin/PublishedCourses'} className="d-block  text-light text-hover-warning   p-2 ps-4 ">Published Courses</Link>
            <Link to={'/admin/ScheduledCourses'} className="d-block  text-light text-hover-warning   p-2 ps-4 ">Scheduled Courses</Link>
            <Link to={'/admin/SavedCourses'} className="d-block  text-light text-hover-warning   p-2 ps-4 ">Saved Drafts</Link>
          </div>
        </div></div>
      <div className=" col-10 mb-5 mx-auto  d-block d-lg-none p-3 ">
        <div className="  mt-3">
          <ul className="nav nav-pills  nav-justified" role="tablist">
            <li className="nav-item">
              <Link to={'/admin'} className="nav-link text-light bg-transparent text-hover-warning " >Users</Link>
            </li>
            <li className="nav-item">
              <Link to={'/admin/Articles'} className="nav-link text-light bg-transparent text-hover-warning " >Articles</Link>
            </li>
            <li className="nav-item">
              <Link to={'/admin/jobs'} className="nav-link text-light bg-transparent text-hover-warning " >Jobs</Link>
            </li>
            <li className="nav-item">
              <Link to={'/admin/courses'} className="nav-link text-light bg-transparent text-hover-warning " >Courses</Link>
            </li>
          </ul>

          <div className="tab-content">
            { type === "Users"  &&<div id="Users" className="form-outline position-relative  container tab-pane active "><br />
              <select name="Location" id="Location-select" className="input select w-100 px-2 p-2 ps-4" >
                <option value="Admin">Admin</option>
                <option value="student">Student</option>
                <option value="Instructors">Instructors</option>
              </select>
            </div>}
            { type === "Articles"  &&<div id="Articles" className="form-outline position-relative  container tab-pane fade "><br />
              <select name="Location" id="Location-select" className="input w-100 px-2 p-2 ps-4" >
                <option value="PubhishedArticles">Published Articles</option>
                <option value="ScheduledArticles">Scheduled Articles</option>
                <option value="SavedDrafts">Saved Drafts</option>
              </select>
            </div>}
            { type === "Jobs"  &&<div id="Jobs" className="form-outline position-relative  container tab-pane fade "><br />
              <select name="Location" id="Location-select" className="input w-100 px-2 p-2 ps-4" >
                <option value="Pubhished Articles">Published Jobs</option>
                <option value="Saved Drafts">Saved Drafts</option>
              </select>
            </div>}
            { type === "Courses"  &&<div id="Courses" className="form-outline position-relative  container tab-pane fade "><br />
              <select name="Location" id="Location-select" className="input w-100 px-2 p-2 ps-4" >
                <option value="Pubhished Articles">Published Courses</option>
                <option value="Scheduled Articles">Scheduled Courses</option>
                <option value="Saved Drafts">Saved Drafts</option>
              </select>
            </div>}
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminSidebar
