import React from 'react'
import { FiMail } from 'react-icons/fi'; // Using Feather Icons
import { FiPhone } from 'react-icons/fi'; // Using Feather Icons
const Profileinfo = ({ fields }) => {
    return (
        <>
            <div className='row mt-5'>
                {/* عمود المعلومات الشخصيه */}
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <div style={{ background: "rgba(21,18,18,0.5)", padding: "10px", borderRadius: "10px" }}>
                        {
                            fields !== true ? (
                                <div>
                                    <p style={{ background: "rgba(21,18,18,255)", borderRadius: "10px", padding: "18px" }}>Personal Info</p>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <h5>Student ID </h5>
                                        <p>1420572</p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <h5>Age </h5>
                                        <p>26 Yo</p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <h5>Nationality </h5>
                                        <p>Sudanse</p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <h5>Country </h5>
                                        <p>Egypt</p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <h5>city </h5>
                                        <p>Cairo</p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <h5>Score </h5>
                                        <p>150</p>
                                    </div>
                                </div>
                            ) : (
                                <div className='information'>
                                    <p style={{ background: "rgba(21,18,18,255)", borderRadius: "10px", padding: "18px" }}>Personal Info</p>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <h5>Student ID </h5>
                                        <p>1420572</p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <h5>Age </h5>
                                        <input type="number" className='w-75' placeholder='Enter Your Age' name="age" id="age" />
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <h5>Nationality </h5>
                                        <input type="text" className='w-50'  name="nationality" id="nationality" placeholder='Enter Your Nationality' />
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <h5>Country </h5>
                                        <input type="text" style={{width:"60%"}} name="country" id="country" placeholder='Enter Your Country' />
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <h5>city </h5>
                                        <input type="text" className='w-75' name="city" id="city" placeholder='Enter Your City' />
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <h5>Score </h5>
                                        <p>150</p>
                                    </div>
                                </div>
                            )
                        }
                        {
                            fields !== true ? (
                                <div>
                                    <p style={{ background: "rgba(21,18,18,255)", borderRadius: "10px", padding: "18px" }}>Education</p>
                                    <div>
                                        <h5>university</h5>
                                        <p>International islamic university </p>
                                    </div>
                                    <div>
                                        <h5>Major</h5>
                                        <p>Computer Science</p>
                                    </div>
                                    <div>
                                        <h5>Graduation Year</h5>
                                        <p>2019</p>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <p style={{ background: "rgba(21,18,18,255)", borderRadius: "10px", padding: "18px" }}>Education</p>
                                    <div className='mb-2'>
                                        <h5>university</h5>
                                        <input name="university" id="university" type='text' className='w-100' style={{ marginLeft: "5px" }} />
                                    </div>
                                    <div className='mb-2'>
                                        <h5>Major</h5>
                                        <select name="major" id="major" type='text' className='w-100' style={{ marginLeft: "5px" }}>
                                            <option>Computer Science</option>
                                            <option>Information Tech</option>
                                            <option>Information system</option>
                                            <option>Oddo</option>
                                        </select>
                                    </div>
                                    <div className='mb-2'>
                                        <h5>Graduation Year</h5>
                                        <input type='number' name='year' id="year" value={2019} className='w-100' style={{ marginLeft: "5px" }} />
                                    </div>
                                </div>
                            )
                        }
                        {
                            fields !== true ? (
                                <div>
                                    <p style={{ background: "rgba(21,18,18,255)", borderRadius: "10px", padding: "18px" }}>Contact Info</p>
                                    <div className='d-flex justify-content-center mt-3'>
                                        <FiMail style={{ fontSize: "20px", marginRight: "8px", color: " rgba(190,154,48,255)" }} />
                                        <div className='w-75'>
                                            <p>Email</p>
                                            <p>balquesssaber@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-center mt-3'>
                                        <FiPhone style={{ fontSize: "20px", marginRight: "8px", color: " rgba(190,154,48,255)" }} />
                                        <div className='w-75'>
                                            <p>Mobile Number</p>
                                            <p>01001590979</p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div>
                            <p style={{ background: "rgba(21,18,18,255)", borderRadius: "10px", padding: "18px" }}>Contact Info</p>
                            <div className='d-flex justify-content-center mt-3'>
                                <FiMail style={{ fontSize: "20px", marginRight: "8px", color: " rgba(190,154,48,255)" }} />
                                <div className='w-75'>
                                    <p>Email</p>
                                    <input type="email" name="email" id="email"  className='w-100' value={"balquess@gmail.com"}/>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center mt-3'>
                                <FiPhone style={{ fontSize: "20px", marginRight: "8px", color: " rgba(190,154,48,255)" }} />
                                <div className='w-75'>
                                    <p>Mobile Number</p>
                                    <input type="tel" name='phone' id="phone" className='w-100' value={"01125178289"}/>
                                </div>
                            </div>
                        </div>
                            )
                        }
                    </div>
                </div>
                {/* معلومات عن المستخدم وكورساته */}
                <div className='col-lg-8 col-md-6 col-sm-12'>
                    {
                        fields !== true ? (
                            <div className='p-4 about' style={{ background: "rgba(21,19,18,0.5)", borderRadius: "10px" }}>
                                <div>
                                    <h4>About</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae</p>
                                </div>
                            </div>
                        ) : (
                            <div className='p-4 about' style={{ background: "rgba(21,19,18,0.5)", borderRadius: "10px", width: "100%" }}>
                                <div>
                                    <h4>About</h4>
                                    <textarea placeholder='Enter Your Information' cols={100} rows={2} style={{ resize: "none", width: "100%" }}>

                                    </textarea>
                                </div>
                            </div>
                        )
                    }
                    <div className='mt-5'>
                        <h5 style={{ marginLeft: "35px" }}>In Progress</h5>
                        {/* التقدم الاول */}
                        <div className='p-4 mt-4' style={{ background: "rgba(21,19,18,0.5)", borderRadius: "10px" }}>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <p style={{ fontSize: "20px", fontWeight: "bolder" }}>Introduction To Data Analysis</p>
                                    <p> <span style={{ color: "rgba(191,155,48,255)", fontSize: "18px", fontWeight: "bold" }}>Instructor</span> : Mohamed Nour</p>
                                </div>
                                <h3>LEV.1</h3>
                            </div>
                        </div>
                        {/* التقدم الثاني */}
                        <div className='p-4 mt-5' style={{ background: "rgba(21,19,18,0.5)", borderRadius: "10px" }}>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <p style={{ fontSize: "20px", fontWeight: "bolder" }}>Introduction To Data Analysis</p>
                                    <p> <span style={{ color: "rgba(191,155,48,255)", fontSize: "18px", fontWeight: "bold" }}>Instructor</span> : Mohamed Nour</p>
                                </div>
                                <h3>LEV.1</h3>
                            </div>
                        </div>
                    </div>
                    {/* المواد مسجله سابقه */}
                    <div className='mt-5'>
                        <h5 style={{ marginLeft: "35px" }}>Previous</h5>
                        {/* التقدم الاول */}
                        <div className='p-4 mt-4' style={{ background: "rgba(21,19,18,0.5)", borderRadius: "10px" }}>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <p style={{ fontSize: "20px", fontWeight: "bolder" }}>Introduction To Data Analysis</p>
                                    <p> <span style={{ color: "rgba(191,155,48,255)", fontSize: "18px", fontWeight: "bold" }}>Instructor</span> : Mohamed Nour</p>
                                </div>
                                <h3>LEV.1</h3>
                            </div>
                        </div>
                        {/* التقدم الثاني */}
                        <div className='p-4 mt-5' style={{ background: "rgba(21,19,18,0.5)", borderRadius: "10px" }}>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <p style={{ fontSize: "20px", fontWeight: "bolder" }}>Introduction To Data Analysis</p>
                                    <p> <span style={{ color: "rgba(191,155,48,255)", fontSize: "18px", fontWeight: "bold" }}>Instructor</span> : Mohamed Nour</p>
                                </div>
                                <h3>LEV.1</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profileinfo
