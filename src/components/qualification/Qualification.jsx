import React, {useState} from 'react'
import './qualification.css'

const Qualification = () => {
    const[toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="qualification section" id="qualifications">
        <h2 className="section__title">My Qualifications</h2>
        <span className="section__subtitle">Academics and Industry</span>
   
        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ?
                    "qualification__button qualification__active button--flex" 
                    : "qualification__button qualification button--flex"
                }
                onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualificatin__icon"></i> &nbsp; Education
                </div>

                <div className={toggleState === 2 ?
                    "qualification__button qualification__active button--flex" 
                    : "qualification__button qualification button--flex"
                }onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualificatin__icon"></i> &nbsp; Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? 
                    "qualification__content qualification__content-active" :
                    "qualification__content"
                }>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Master's in CS</h3>
                            <span className="qualification__subtitle">Purdue University, West Lafayette</span><br/>
                           
                            <div className="qualification__calender">
                                <i className="uil uil-calender"></i>
                                &nbsp; August 2024 - Present
                            </div>
                            <br/>
                            <br/>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">B.Tech in Computer Engineering</h3>
                            <span className="qualification__subtitle">Cummins College of Engineering, India</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender"></i>
                                &nbsp; 2019 - 2023
                            </div>
                        </div>
                    </div>
                    <br/><br/><br/><br/><br/>

                    {/* <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Development</h3>
                            <span className="qualification__subtitle">Insititute Name</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>
                                2021 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">UX Expert</h3>
                            <span className="qualification__subtitle">Insititute Name</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>
                                2021 - Present
                            </div>
                        </div>
                    </div> */}
                </div>

                <div className={toggleState === 2 ? 
                    "qualification__content qualification__content-active" :
                    "qualification__content"
                }>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Graduate Researcher</h3>
                            <span className="qualification__subtitle">Cognitive Robot Autonomy and Learning Lab, Purdue</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender"></i>
                                &nbsp; October 2024 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Engineering Analyst</h3>
                            <span className="qualification__subtitle">Goldman Sachs, Asset and Wealth Management</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-"></i>
                                &nbsp; July 2023 - June 2024
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Summer Analyst</h3>
                            <span className="qualification__subtitle">Goldman Sachs, Asset and Wealth Management</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender"></i>
                                &nbsp; June 2022 - July 2022
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class = "qcontainer">
        <div class="qcontent">
        </div>
        </div>
    </section>
  )
}

export default Qualification