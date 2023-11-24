import React from 'react'
import { useSelector } from 'react-redux'

function Cv() {
  const {fName,
    lName,
    profession,
    country,
    city,
    mobileNumber,
    email,
    image,
    about,
    Skills,
    forms,
    forms5,
    forms6,
    Hobbies,
    URL} = useSelector(state=> state.CV.Cv)
console.log(Skills);
  return (

    <div className="col-6 d-none d-lg-block CVPage">
      <div className="container cv-container">
        <div className="row cv-height">
          <div className="col-4 bg-blue-side">
          <img class="d-block rounded-pill mt-3" src={image} alt="" style={{width: '120px',height: "120px"}}/>
          <div class="neme-job my-4">
              <h4 class="text-white text-capitalize">{ fName == '' ? 'Name': fName + " " + lName}</h4>
              <p class="text-capitalize">{ profession == '' ? profession :'Profession'} </p>
          </div>
          <div class="info-cv">
              <p class=" phone py-1 px-2"> {   mobileNumber == '' ?  'Mobile Number': mobileNumber }</p>
              <p class=" email py-1 px-2">  { email == '' ? "Email" : email}</p>
              <p class=" location py-1 px-2">   { city == '' ? "Location" :city + ',' + country} </p>
          </div>
          <div class="skills mb-5">
              <h6 class="text-white" >Skills</h6>
              <ul>
              {Skills.map(skill=>
                <li>{skill}</li>
                )}
              </ul>
          </div>
          <div class="award mb-5">
              <h6 class="text-white" >Honor & Award</h6>
          </div>
          <div class="hobbies mb-5">
              <h6 class="text-white" >Hobbies & Interest</h6>
              <ul>
              </ul>
          </div>
          <div class="links">
              <h6 class="text-white" >Links and Credentials</h6>
              <div class="links-icon row">
              </div>
          </div>
      </div>
          <div className="col-7 bg-white">
          <div class="about mb-5">
          <h4 class="cateigry-cv">About</h4>
          <div class="line-cv mb-3"></div>
          <p className='text-dark'>{about}</p>
      </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Cv