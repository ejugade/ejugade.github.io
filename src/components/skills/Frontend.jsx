import React from 'react'

const Frontend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Software Development</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Backend</h3>
                        <span className="skills__level">Java Springboot, NodeJS, Python, Java, Kotlin</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Frontend</h3>
                        <span className="skills__level">React, Typescript, NextJS, HTML, CSS, Bootstrap</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Databases</h3>
                        <span className="skills__level">SQL, MongoDB, DuckDB, MySQL, GraphQL</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">SWE Techniques</h3>
                        <span className="skills__level">Microservice Design, MVCC model, </span>
                        <br/>
                        <span className="skills__level">Distributed Host Management, Capacity Estimation</span>
                        {/* <br/> */}
                        {/* <span className="skills__level">Concurrency Control, Distributed Host Management,</span>
                        <br/>
                        <span className="skills__level">Load Testing, SDN Optimization</span> */}

                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Web Tools</h3>
                        <span className="skills__level">Gatling, Kafka, OAUth, JWT, SAML</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Cloud</h3>
                        <span className="skills__level">AWS, Docker, Kubernetes</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Other Tools</h3>
                        <span className="skills__level">Git, Android Studio, Gatling, CI/CD, Prometheus, Grafana</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Languages</h3>
                        <span className="skills__level">Java, Python, C++, C, Bash Scripting</span><br/>
                        <span className="skills__level">PL/SQL, Prolog</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Frontend